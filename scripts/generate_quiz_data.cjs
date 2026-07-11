const fs = require('fs');
const path = require('path');

const categories = [
  { id: 'rumah-adat', title: 'Rumah Adat' },
  { id: 'makanan', title: 'Makanan Khas Nusantara' },
  { id: 'pakaian-adat', title: 'Pakaian Adat' },
  { id: 'alat-musik', title: 'Alat Musik Daerah' },
  { id: 'tempat-bersejarah', title: 'Tempat Bersejarah' },
  { id: 'kearifan-lokal', title: 'Kearifan Lokal' }
];

const generateData = (category, count) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const correctAns = `Jawaban Benar ${category.title} ${i}`;
    const allChoices = [
      correctAns,
      `Pilihan Salah A ${i}`,
      `Pilihan Salah B ${i}`,
      `Pilihan Salah C ${i}`
    ];
    
    data.push({
      id: `${category.id}-${i}`,
      question: `Pertanyaan ke-${i} tentang ${category.title}. Manakah pernyataan di bawah ini yang benar mengenai peninggalan budaya tersebut?`,
      choices: allChoices,
      correctAnswer: correctAns,
      explanation: `Penjelasan lengkap tentang ${category.title} nomor ${i} untuk edukasi.`,
      difficulty: i <= 10 ? 'easy' : i <= 20 ? 'medium' : 'hard'
    });
  }
  return data;
};

const outputDir = path.join(__dirname, '../src/data/quiz');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

categories.forEach(cat => {
  const fileContent = `export const ${cat.id.replace(/-./g, x => x[1].toUpperCase())}Data = ${JSON.stringify(generateData(cat, 35), null, 2)};\n`;
  const filePath = path.join(outputDir, `${cat.id.replace(/-./g, x => x[1].toUpperCase())}.js`);
  fs.writeFileSync(filePath, fileContent, 'utf-8');
});

let indexContent = '';
categories.forEach(cat => {
  const varName = cat.id.replace(/-./g, x => x[1].toUpperCase()) + 'Data';
  indexContent += `export { ${varName} } from './${cat.id.replace(/-./g, x => x[1].toUpperCase())}';\n`;
});
fs.writeFileSync(path.join(outputDir, 'index.js'), indexContent, 'utf-8');

console.log('Quiz data generated successfully.');
