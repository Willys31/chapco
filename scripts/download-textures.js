const fs = require('fs');
const https = require('https');
const path = require('path');

const TEXTURES = [
  {
    name: 'earth-day.jpg',
    url: 'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg',
  },
  {
    name: 'earth-bumps.jpg',
    url: 'https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png',
  },
  {
    name: 'earth-clouds.png',
    url: 'https://unpkg.com/three-globe@2.31.1/example/img/clouds.png',
  },
];

const outDir = path.join(__dirname, '..', 'public', 'textures');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const get = (u) => {
      https.get(u, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${u}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
    };
    get(url);
  });
}

(async () => {
  for (const tex of TEXTURES) {
    const dest = path.join(outDir, tex.name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`⏭  Already exists: ${tex.name}`);
      continue;
    }
    process.stdout.write(`⬇  Downloading ${tex.name}...`);
    try {
      await download(tex.url, dest);
      const size = (fs.statSync(dest).size / 1024).toFixed(0);
      console.log(` ✅ (${size} KB)`);
    } catch (e) {
      console.log(` ❌ ${e.message}`);
    }
  }
  console.log('\nDone.');
})();
