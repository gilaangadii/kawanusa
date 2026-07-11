const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/data/provinceDetailsData.js');

try {
  // Try to load as a module but it uses ES modules (export const)
  // Let's read it as string and evaluate or convert it.
  const content = fs.readFileSync(file, 'utf8');
  const code = content.replace('export const provinceDetailsData =', 'module.exports =');
  const tempFile = path.join(__dirname, 'temp_extract.js');
  fs.writeFileSync(tempFile, code);
  
  const data = require('./temp_extract.js');
  
  console.log("| No | Nama Daerah | Rumah Adat | Makanan Khas | Tarian Khas | Tempat Ikonik 1 | Tempat Ikonik 2 | Cerita Rakyat |");
  console.log("| -- | ----------- | ---------- | ------------ | ----------- | --------------- | --------------- | ------------- |");
  
  let i = 1;
  for (const provId in data) {
    const p = data[provId];
    
    // Extract info
    const namaDaerah = p.name || '-';
    
    // Find Rumah Adat
    const rumahAdat = p.culture.find(c => c.category === 'rumah-adat')?.title || '-';
    const makanan = p.culture.find(c => c.category === 'makanan')?.title || '-';
    const tarian = p.culture.find(c => c.category === 'tarian-adat')?.title || '-';
    
    // Places
    const places = p.places || [];
    const tempat1 = places.length > 0 ? places[0].name : '-';
    const tempat2 = places.length > 1 ? places[1].name : '-';
    
    // Folklore
    const folklore = p.culture.find(c => c.category === 'cerita-rakyat')?.title || '-';
    
    console.log(`| ${i++} | ${namaDaerah} | ${rumahAdat} | ${makanan} | ${tarian} | ${tempat1} | ${tempat2} | ${folklore} |`);
  }
  
  fs.unlinkSync(tempFile);
} catch (e) {
  console.error(e);
}
