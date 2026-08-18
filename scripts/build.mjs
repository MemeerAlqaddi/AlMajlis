import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

const excluded = new Set([
  '.git', '.github', '.vercel', 'node_modules', 'dist', 'api', 'scripts',
  'package-lock.json', 'package.json', 'vercel.json', '.env.example',
  'AL-MAJLIS-VERCEL-STRIPE-SETUP.txt',
  'AlMajlis-GitHub-Upload-v48',
  'AlMajlis-GitHub-Upload-v48.zip',
  'AlMajlis-GitHub-Upload-v49',
  'AlMajlis-GitHub-Upload-v49.zip',
  'AlMajlis-GitHub-Upload-v50',
  'AlMajlis-GitHub-Upload-v50.zip',
  'AlMajlis-GitHub-Upload-v51',
  'AlMajlis-GitHub-Upload-v51.zip'
]);

const { readdir } = await import('node:fs/promises');
for (const name of await readdir(root)) {
  if (excluded.has(name)) continue;
  await cp(path.join(root, name), path.join(out, name), { recursive: true });
}

const indexPath = path.join(root, 'index.html');
if (!existsSync(indexPath)) throw new Error('index.html was not found.');

let html = await readFile(indexPath, 'utf8');

const styleTag = '<link rel="stylesheet" href="./monetization.css?v=5">';
const scriptTag = '<script src="./monetization.js?v=5"></script>';

if (!html.includes('monetization.css')) {
  html = html.replace('</head>', `${styleTag}</head>`);
}
if (!html.includes('monetization.js')) {
  html = html.replace('</body>', `${scriptTag}</body>`);
}

await writeFile(path.join(out, 'index.html'), html);
let ownerHtml = html.replace(
  'href="manifest.webmanifest?v=51-install"',
  'href="owner-manifest.webmanifest"'
);
if (!ownerHtml.includes('owner-manifest.webmanifest')) {
  ownerHtml = ownerHtml.replace(
    '</head>',
    '<link rel="manifest" href="owner-manifest.webmanifest"></head>'
  );
}
await writeFile(path.join(out, 'owner.html'), ownerHtml);
console.log('Built Al Majlis without changing the original app files.');
