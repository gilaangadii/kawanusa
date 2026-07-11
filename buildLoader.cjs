const fs = require('fs');
const path = require('path');

// Read files list manually
const folders = [
  'Rumah Adat',
  'Makanan Khas',
  'Daerah',
  'Tempat Ikonik',
  'Tarian daerah',
  'Cerita Rakyat'
];
const basePath = path.join(__dirname, 'src/assets/images');
const scanResult = {};

folders.forEach(f => {
  const p = path.join(basePath, f);
  if (fs.existsSync(p)) {
    scanResult[f] = fs.readdirSync(p).filter(file => !file.startsWith('.'));
  } else {
    scanResult[f] = [];
  }
});

// Read province data
const code = fs.readFileSync('src/data/provinceDetailsData.js', 'utf8');
const tmp = code.replace('export const provinceDetailsData =', 'module.exports =');
fs.writeFileSync('tmpData.cjs', tmp);
const data = require('./tmpData.cjs');

// We need a helper to find closest file matching a string in an array of strings
function findBestMatch(str, files) {
  if (!str) return null;
  const cleanStr = str.toLowerCase();
  for (let f of files) {
    const withoutExt = f.replace(/\.[^/.]+$/, "");
    const cleanF = withoutExt.toLowerCase();
    
    const str1 = cleanF.replace(/[^a-z0-9]/g, '');
    const str2 = cleanStr.replace(/[^a-z0-9]/g, '');
    if (str1.includes(str2) || str2.includes(str1)) return f;

    const wordsF = cleanF.split(/[^a-z0-9]+/).filter(w => w.length >= 3);
    const wordsStr = cleanStr.split(/[^a-z0-9]+/).filter(w => w.length >= 3);
    
    let allMatch = true;
    for (let w of wordsF) {
      if (!wordsStr.includes(w) && !str2.includes(w)) {
        allMatch = false;
        break;
      }
    }
    
    if (wordsF.length > 0 && allMatch) return f;
  }
  return null;
}

const mapping = {};
for (const prov of data) {
  mapping[prov.slug] = {
    hero: findBestMatch(prov.tempatIkonik?.[1]?.nama, scanResult['Tempat Ikonik']) || findBestMatch(prov.name, scanResult['Tempat Ikonik']),
    rumahAdat: findBestMatch(prov.rumahAdat, scanResult['Rumah Adat']),
    makanan: findBestMatch(prov.makananKhas, scanResult['Makanan Khas']),
    tarian: findBestMatch(prov.tarian, scanResult['Tarian daerah']),
    tempatIkonik1: findBestMatch(prov.tempatIkonik?.[0]?.nama, scanResult['Daerah']) || findBestMatch(prov.tempatIkonik?.[1]?.nama, scanResult['Daerah']) || findBestMatch(prov.name, scanResult['Daerah']) || (prov.slug === 'nusa-tenggara-timur' ? 'Pulau Komodo.jpg' : prov.slug === 'kalimantan-tengah' ? 'Rumah Betang.jpg' : null),
    tempatIkonik2: findBestMatch(prov.tempatIkonik?.[1]?.nama, scanResult['Tempat Ikonik']) || findBestMatch(prov.name, scanResult['Tempat Ikonik']),
    ceritaRakyat: findBestMatch(prov.ceritaRakyat?.judul, scanResult['Cerita Rakyat']),
  };
}

let loaderCode = `export const assetMapping = ${JSON.stringify(mapping, null, 2)};

export const getProvinceAssets = (slug) => {
  const assets = assetMapping[slug] || {};
  return {
    hero: assets.hero ? new URL(\`../assets/images/Tempat Ikonik/\${assets.hero}\`, import.meta.url).href : '',
    rumahAdat: assets.rumahAdat ? new URL(\`../assets/images/Rumah Adat/\${assets.rumahAdat}\`, import.meta.url).href : '',
    makanan: assets.makanan ? new URL(\`../assets/images/Makanan Khas/\${assets.makanan}\`, import.meta.url).href : '',
    tarian: assets.tarian ? new URL(\`../assets/images/Tarian daerah/\${assets.tarian}\`, import.meta.url).href : '',
    tempatIkonik1: assets.tempatIkonik1 ? new URL(\`../assets/images/Daerah/\${assets.tempatIkonik1}\`, import.meta.url).href : '',
    tempatIkonik2: assets.tempatIkonik2 ? new URL(\`../assets/images/Tempat Ikonik/\${assets.tempatIkonik2}\`, import.meta.url).href : '',
    ceritaRakyat: assets.ceritaRakyat ? new URL(\`../assets/images/Cerita Rakyat/\${assets.ceritaRakyat}\`, import.meta.url).href : ''
  };
};
`;

const utilDir = path.join(__dirname, 'src/utils');
if (!fs.existsSync(utilDir)) fs.mkdirSync(utilDir);

fs.writeFileSync(path.join(utilDir, 'assetLoader.js'), loaderCode);
fs.unlinkSync('tmpData.cjs');
console.log("Loader built!");
