// Build a standalone HTML page. No packages are needed by the resulting page.
const fs = require('node:fs');
const path = require('node:path');
const { minify } = require('terser');
(async () => {
  const root = path.resolve(__dirname, '..');
  const source = fs.readFileSync(path.join(root, 'index-v3-source.html'), 'utf8');
  const module = source.match(/<script type="module">([\s\S]*?)<\/script>/);
  if (!module) throw Error('Expected one inline module');
  const result = await minify(module[1], { module: true, compress: true, mangle: true });
  const built = source.replace(module[0], '<script type="module">' + result.code + '</script>');
  fs.writeFileSync(path.join(root, 'index-v3.html'), built);
  console.log(JSON.stringify({ sourceBytes: Buffer.byteLength(source), minifiedBytes: Buffer.byteLength(built), gzipBytes: require('node:zlib').gzipSync(built).length }));
})().catch(error => { console.error(error); process.exitCode = 1; });
