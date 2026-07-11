import { provinceDetailsData } from './src/data/provinceDetailsData.js';

console.log("| No | Nama Daerah | Rumah Adat | Makanan Khas | Tarian Khas | Tempat Ikonik 1 | Tempat Ikonik 2 | Cerita Rakyat |");
console.log("| -- | ----------- | ---------- | ------------ | ----------- | --------------- | --------------- | ------------- |");

let i = 1;
for (const provId in provinceDetailsData) {
  const p = provinceDetailsData[provId];
  
  // Extract info
  const namaDaerah = p.name || '-';
  
  // Find Categories
  const rumahAdat = p.rumahAdat || '-';
  const makanan = p.makananKhas || '-';
  const tarian = p.tarian || '-';
  const cerita = p.ceritaRakyat?.judul || '-';
  
  // Places
  const tempatIkonik = p.tempatIkonik || [];
  const tempat1 = tempatIkonik.length > 0 ? tempatIkonik[0].nama : '-';
  const tempat2 = tempatIkonik.length > 1 ? tempatIkonik[1].nama : '-';
  
  console.log(`| ${i++} | ${namaDaerah} | ${rumahAdat} | ${makanan} | ${tarian} | ${tempat1} | ${tempat2} | ${cerita} |`);
}
