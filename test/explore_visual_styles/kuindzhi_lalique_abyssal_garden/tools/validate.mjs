import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
if (scripts.length !== 1 || !/\btype=["']module["']/.test(scripts[0][1])) throw Error('Expected one inline ES module');
const js = scripts[0][2];
const shaders = [...js.matchAll(/\bconst\s+(shader|background)\s*=\s*\/\*\s*wgsl\s*\*\/\s*\x60([\s\S]*?)\x60\s*;/g)];
if (shaders.length !== 2 || shaders[0][1] !== 'shader' || shaders[1][1] !== 'background') throw Error('Expected two WGSL modules');

const dir = mkdtempSync(join(tmpdir(), 'abyssal-style-'));
try {
  const entry = join(dir, 'entry.mjs'); writeFileSync(entry, js);
  console.log('JavaScript syntax');
  execFileSync(process.execPath, ['--check', entry], { stdio: 'inherit' });
  for (const [full, name, code] of shaders) {
    if (code.includes('$' + '{')) throw Error('Interpolated WGSL is not supported: ' + name);
    const file = join(dir, name + '.wgsl'); writeFileSync(file, code);
    console.log('Naga WGSL validation: ' + name);
    execFileSync('naga', [file], { stdio: 'inherit' });
  }
  console.log('PASS: JS syntax and both WGSL shader modules.');
} finally { rmSync(dir, { recursive: true, force: true }); }
