import fs from 'fs';
import path from 'path';

const folders = [
  'Rumah Adat',
  'Makanan Khas',
  'Daerah',
  'Tempat Ikonik',
  'Tarian daerah',
  'Cerita Rakyat'
];

const basePath = 'c:/Users/user/OneDrive/Documents/BytesFest2k26/kawanusa/src/assets/images';
const result = {};

folders.forEach(f => {
  const p = path.join(basePath, f);
  if (fs.existsSync(p)) {
    result[f] = fs.readdirSync(p).filter(file => !file.startsWith('.'));
  } else {
    result[f] = [];
  }
});

console.log(JSON.stringify(result, null, 2));
