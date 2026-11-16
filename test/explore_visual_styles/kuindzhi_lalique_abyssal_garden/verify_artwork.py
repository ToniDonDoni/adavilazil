"""Raster and source smoke tests. GPU visuals require a real browser."""
from pathlib import Path
from PIL import Image, ImageStat
import xml.etree.ElementTree as ET
import cairosvg
import re

home = Path(__file__).resolve().parent
out = home / "rendered"
out.mkdir(exist_ok=True)
items = [
 ("01-KUINDZHI.svg", "kuindzhi"),
 ("02-LALIQUE.svg", "lalique"),
 ("03-NORSTEIN.svg", "norstein"),
 ("04-HYBRID-KUINDZHI-LALIQUE.svg", "hybrid"),
]
required = {"canyon-layers", "swaying-kelp", "sunken-ship", "stone-fluke", "fish-and-manta", "one-luminous-anchor", "connected-light-path", "localized-glints"}
images = {}
for filename, key in items:
    svg = (home / "images" / filename).read_text()
    root = ET.fromstring(svg)
    assert root.tag.endswith("svg") and root.get("viewBox") == "0 0 1200 800"
    ids = {node.get("id") for node in root.iter() if node.get("id")}
    assert required <= ids, (filename, required - ids)
    assert ("translucent-enamel-flora" in ids) == (key in ("lalique", "hybrid")), filename
    assert ("cutpaper-mist" in ids) == (key == "norstein"), filename
    assert "<image" not in svg and "http://" not in svg.replace("http://www.w3.org/2000/svg", ""), filename
    dst = out / filename.replace(".svg", ".png")
    cairosvg.svg2png(bytestring=svg.encode(), write_to=str(dst))
    im = Image.open(dst).convert("RGB")
    assert im.size == (1200, 800), filename
    c, corner = im.getpixel((610, 118)), im.getpixel((50, 150))
    assert sum(c) > sum(corner) + 55, (filename, c, corner)
    images[key] = im
    print(f"PASS study {key}: luminous center {c}, dark edge {corner}")

def mean_brightness(im):
    v = ImageStat.Stat(im.resize((100, 67))).mean
    return .2126*v[0] + .7152*v[1] + .0722*v[2]

b = {key: mean_brightness(im) for key, im in images.items()}
assert b["kuindzhi"] < b["lalique"], b
assert b["hybrid"] < b["lalique"], b
assert b["hybrid"] < b["norstein"], b
print("PASS luminance hierarchy:", b)

html = (home / "index.html").read_text()
markers = [
 "navigator.gpu", "createShaderModule", "createRenderPipeline",
 "visualStyle:'kuindzhi-lalique'", "const sampleCount=4",
 "pointerLockElement", "keys[87]", "keys[81]", "keys[69]",
 "keys[16]", "let pearl=select(", "let enamel=mix(", "let border=",
 "moonPath=", "let disk=pow(", "window.__abyssal"
]
for marker in markers:
    assert marker in html, f"Missing HTML implementation: {marker}"
assert not re.search(r"<(?:img|link)\b", html, re.I)
assert not re.search(r"<script\b[^>]*\bsrc\s*=", html, re.I)
assert not re.search(r"\b(?:import|fetch)\s*\(", html)
print("PASS embedded scene and source markers.")
print("NOTE: Hardware WebGPU visuals and free-camera behavior are not verified by these tests.")
