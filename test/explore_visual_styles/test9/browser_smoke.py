"""Actual browser-level WebGPU smoke test on Chrome's SwiftShader software adapter.

This is *not* a hardware GPU performance test. Screenshots go to rendered/.
"""
import asyncio
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from threading import Thread

from PIL import Image, ImageStat
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "rendered"
OUT.mkdir(exist_ok=True)

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_args):
        return

async def main():
    server = ThreadingHTTPServer(("127.0.0.1", 0), partial(QuietHandler, directory=str(ROOT)))
    Thread(target=server.serve_forever, daemon=True).start()
    errors = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=[
                "--no-sandbox",
                "--enable-unsafe-webgpu",
                "--enable-unsafe-swiftshader",
                "--use-webgpu-adapter=swiftshader",
                "--use-vulkan=swiftshader",
                "--use-angle=swiftshader",
                "--enable-features=Vulkan",
                "--disable-vulkan-surface",
                "--enable-dawn-features=allow_unsafe_apis",
                "--ignore-gpu-blocklist",
            ],
        )
        page = await browser.new_page(viewport={"width": 1100, "height": 700}, device_scale_factor=1)
        page.on("pageerror", lambda exc: errors.append(str(exc)))
        url = f"http://127.0.0.1:{server.server_port}/index.html"
        await page.goto(url, wait_until="load", timeout=30000)
        await page.wait_for_function("Boolean(window.__abyssal)", timeout=60000)
        if errors:
            raise RuntimeError("Runtime page error: " + repr(errors))
        poses = [
            (0, -11, 38, .02, -.09),
            (-12, -15, -7, .15, .05),
        ]
        for index, pose in enumerate(poses):
            await page.evaluate("(p) => window.__abyssal.setPose(...p)", pose)
            await page.wait_for_timeout(3000)
            dest = OUT / f"WEBGPU-POSE-{index+1:02d}.png"
            await page.screenshot(path=str(dest), timeout=60000)
            frame = Image.open(dest).convert("RGB")
            stats = ImageStat.Stat(frame.resize((100,64)))
            assert sum(stats.stddev) > 14, f"Blank/uniform scene at pose {index+1}: {stats.stddev}"
            print(f"PASS WebGPU pose {index+1}: RGB stddev {stats.stddev}")
        if errors:
            raise RuntimeError("WebGPU page errors: " + repr(errors))
        await browser.close()
    server.shutdown()

if __name__ == "__main__":
    asyncio.run(main())
