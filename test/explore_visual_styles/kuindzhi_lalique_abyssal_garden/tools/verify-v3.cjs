/* Reproducible Chrome WebGPU rendering, controls, six poses and 60 s traversal.
   Usage: node verify-v3.cjs <standalone.html> <evidence-directory> [reference.svg]
   Install playwright locally, or set PLAYWRIGHT_MODULE to an existing installation. */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const source = path.resolve(process.argv[2]);
const out = path.resolve(process.argv[3]);
const reference = process.argv[4] && path.resolve(process.argv[4]);
const poses = {
  opening: [0, -12, 43, 0, -.019],
  approach: [0, -12, 10, 0, .05],
  wreck: [-9, -14, -8, -.25, -.20],
  monument: [19, -14, -20, .2, -.2],
  reef: [-22, -18, -10, -.3, -.15],
  side_light: [14, -10, -30, -.72, -.05],
};
const summary = values => {
  const v = [...values].sort((a,b)=>a-b);
  return {samples:v.length,average:v.reduce((a,b)=>a+b,0)/v.length,p99:v[Math.floor((v.length-1)*.99)],max:v.at(-1)};
};
(async()=>{
  fs.mkdirSync(out,{recursive:true});
  const errors=[];
  const server=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico'){res.writeHead(204).end();return;}
    const file=req.url==='/reference.svg'?reference:source;
    res.setHeader('Content-Type',req.url==='/reference.svg'?'image/svg+xml':'text/html');
    res.end(fs.readFileSync(file));
  }).listen(0,'127.0.0.1');
  await new Promise(r=>server.once('listening',r));
  const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-webgpu','--ignore-gpu-blocklist']});
  try {
    const page=await browser.newPage({viewport:{width:1536,height:1024},deviceScaleFactor:1});
    page.on('pageerror',e=>errors.push(e.message));
    const base='http://127.0.0.1:'+server.address().port;
    await page.goto(base);
    await page.waitForFunction(()=>window.__abyssal,null,{timeout:60000});
    await page.waitForTimeout(1000);
    const controls={};
    await page.locator('#action').click();
    await page.waitForFunction(()=>document.pointerLockElement===document.getElementById('view'));
    controls.pointerLock=true;
    for(const [key,index,sign] of [['w',2,-1],['s',2,1],['a',0,-1],['d',0,1],['q',1,-1],['e',1,1]]){
      await page.evaluate(p=>window.__abyssal.setPose(...p),poses.opening);
      const start=await page.evaluate(()=>window.__abyssal.getPose());
      await page.keyboard.down(key);await page.waitForTimeout(240);await page.keyboard.up(key);
      const end=await page.evaluate(()=>window.__abyssal.getPose());
      controls[key]=(end[index]-start[index])*sign>.4;
    }
    await page.evaluate(p=>window.__abyssal.setPose(...p),poses.opening);
    await page.keyboard.down('Shift');await page.keyboard.down('w');await page.waitForTimeout(240);await page.keyboard.up('w');await page.keyboard.up('Shift');
    controls.shift=43-(await page.evaluate(()=>window.__abyssal.getPose()))[2]>4;
    const before=await page.evaluate(()=>window.__abyssal.getPose());
    await page.mouse.move(900,450);await page.mouse.move(1050,500);
    controls.mouseLook=JSON.stringify(before.slice(3))!==JSON.stringify((await page.evaluate(()=>window.__abyssal.getPose())).slice(3));
    await page.keyboard.press('r');
    controls.reset=JSON.stringify(await page.evaluate(()=>window.__abyssal.getPose()))===JSON.stringify(poses.opening);
    await page.keyboard.press('h');controls.hideHUD=await page.locator('#hud').evaluate(el=>!el.classList.contains('on'));
    await page.keyboard.press('h');controls.showHUD=await page.locator('#hud').evaluate(el=>el.classList.contains('on'));
    await page.keyboard.press('Escape');await page.waitForTimeout(200);
    controls.escape=await page.evaluate(()=>document.pointerLockElement===null);
    await page.evaluate(()=>{document.getElementById('veil').style.display='none';document.getElementById('hud').style.display='none';window.__abyssal.setTime(2);});
    const imageStats={};
    for(const [name,pose] of Object.entries(poses)){
      await page.evaluate(p=>window.__abyssal.setPose(...p),pose);await page.waitForTimeout(350);
      await page.screenshot({path:path.join(out,name+'.png')});
    }
    for(const [width,height] of [[1600,900],[390,844]]){
      await page.setViewportSize({width,height});await page.evaluate(p=>window.__abyssal.setPose(...p),poses.opening);await page.waitForTimeout(400);
      await page.screenshot({path:path.join(out,`opening-${width}x${height}.png`)});
    }
    await page.setViewportSize({width:1536,height:1024});
    await page.evaluate(p=>window.__abyssal.setPose(...p),poses.opening);
    await page.waitForTimeout(500);
    // Read the genuine screenshot through an image for radial comparison; no synthetic scene.
    const screenshot=await page.screenshot();
    imageStats.game=await page.evaluate(async data=>{
      const image=new Image();image.src=data;await image.decode();const c=document.createElementNS('http://www.w3.org/1999/xhtml','canvas');c.width=image.width;c.height=image.height;const ctx=c.getContext('2d');ctx.drawImage(image,0,0);
      return [0,10,30,50,80,100,150,200,250].map(r=>({radius:r,rgb:[...ctx.getImageData(768+r,440,1,1).data].slice(0,3)}));
    },'data:image/png;base64,'+screenshot.toString('base64'));
    await page.exposeFunction('__writeVideoChunk',data=>fs.appendFileSync(path.join(out,'flythrough.webm'),Buffer.from(data,'base64')));
    fs.writeFileSync(path.join(out,'flythrough.webm'),Buffer.alloc(0));
    await page.evaluate(()=>{
      const chunks=[];const recorder=new MediaRecorder(document.getElementById('view').captureStream(24),{mimeType:'video/webm;codecs=vp9',videoBitsPerSecond:3500000});
      window.__recording={recorder,chain:Promise.resolve()};recorder.ondataavailable=e=>{window.__recording.chain=window.__recording.chain.then(async()=>{const data=await new Promise(r=>{const reader=new FileReader();reader.onload=()=>r(reader.result.split(',')[1]);reader.readAsDataURL(e.data);});await window.__writeVideoChunk(data);});};recorder.start(1000);
      window.__abyssal.setTime(null);window.__abyssal.resetMetrics();
    });
    console.log('Captures and controls complete; recording 60-second real-time traversal.');
    await page.evaluate(async points=>{
      const start=performance.now();
      await new Promise(resolve=>{
        function step(now){
          const phase=Math.min((now-start)/60000,1)*(points.length-1),i=Math.min(Math.floor(phase),points.length-2),u=phase-i;
          const k=u*u*(3-2*u);window.__abyssal.setPose(...points[i].map((v,j)=>v+(points[i+1][j]-v)*k));
          if(phase>=points.length-1)resolve();else requestAnimationFrame(step);
        }requestAnimationFrame(step);
      });
    },[poses.opening,poses.approach,poses.wreck,poses.reef,poses.side_light,poses.monument,poses.opening]);
    const diagnostics=await page.evaluate(()=>structuredClone(window.__abyssal.diagnostics));
    await page.evaluate(async()=>{
      const recording=window.__recording;await new Promise(r=>{recording.recorder.onstop=r;recording.recorder.stop()});await recording.chain;
    });
    const result={sourceSha256:crypto.createHash('sha256').update(fs.readFileSync(source)).digest('hex'),browser:browser.version(),viewport:[1536,1024],devicePixelRatio:1,poses,controls,errors:[...errors,...diagnostics.errors],adapter:diagnostics.adapter,timestampQuery:diagnostics.timestampQuery,gpuMs:summary(diagnostics.gpuMs),frameMs:summary(diagnostics.frameMs),imageStats};
    fs.writeFileSync(path.join(out,'samples.json'),JSON.stringify({gpuMs:diagnostics.gpuMs,frameMs:diagnostics.frameMs}));
    fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(result,null,2));
    if(reference){
      const refPage=await browser.newPage({viewport:{width:1536,height:1024},deviceScaleFactor:1});
      await refPage.goto(base+'/reference.svg');await refPage.screenshot({path:path.join(out,'reference.png')});
      result.imageStats.svg=await refPage.evaluate(async()=>{
        const im=new Image();im.src=location.href;await im.decode();const c=document.createElementNS('http://www.w3.org/1999/xhtml','canvas');c.width=1536;c.height=1024;const ctx=c.getContext('2d');ctx.drawImage(im,0,0);return [0,10,30,50,80,100,150,200,250].map(r=>({radius:r,rgb:[...ctx.getImageData(768+r,440,1,1).data].slice(0,3)}));
      });
    }
    fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(result,null,2));
    console.log(JSON.stringify(result,null,2));
    if(result.errors.length || Object.values(controls).some(v=>!v))throw Error('Runtime or control regression');
  } finally { await browser.close();server.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
