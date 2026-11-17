import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';

const htmlArg = process.argv.slice(2).find(arg => arg.endsWith('.html'));
const html = readFileSync(htmlArg ? resolve(htmlArg) : new URL('../index.html', import.meta.url), 'utf8');
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
if (scripts.length !== 1 || !/\btype=["']module["']/.test(scripts[0][1])) throw Error('Expected one inline ES module');
const js = scripts[0][2];
const shaders = [...js.matchAll(/\bconst\s+(shader|background|atmosphere)\s*=\s*\/\*\s*wgsl\s*\*\/\s*\x60([\s\S]*?)\x60\s*;/g)];
const expectedNames = ['shader', 'background'];
if (/\bconst\s+atmosphere\s*=/.test(js)) expectedNames.push('atmosphere');
if (shaders.length !== expectedNames.length || !expectedNames.every(name => shaders.some(shader => shader[1] === name))) throw Error('Missing or duplicate WGSL modules');

const dir = mkdtempSync(join(tmpdir(), 'abyssal-style-'));
try {
  const entry = join(dir, 'entry.mjs'); writeFileSync(entry, js);
  console.log('JavaScript syntax');
  execFileSync(process.execPath, ['--check', entry], { stdio: 'inherit' });
  if (process.argv.includes('--syntax-only')) {
    console.log('PASS: JS syntax; WGSL validation explicitly skipped.');
  } else {
    for (const [, name, code] of shaders) {
      if (code.includes('$' + '{')) throw Error('Interpolated WGSL is not supported: ' + name);
      const file = join(dir, name + '.wgsl'); writeFileSync(file, code);
      console.log('Naga WGSL validation: ' + name);
      execFileSync('naga', [file], { stdio: 'inherit' });
    }
    console.log('PASS: JS syntax and all WGSL shader modules.');
  }
} finally { rmSync(dir, { recursive: true, force: true }); }
