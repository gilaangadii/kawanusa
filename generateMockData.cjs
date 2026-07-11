const fs = require('fs');
const path = require('path');

const categories = [
  { id: 'rumah-adat', name: 'Rumah Adat' },
  { id: 'makanan', name: 'Makanan Khas' },
  { id: 'pakaian-adat', name: 'Pakaian Adat' },
  { id: 'alat-musik', name: 'Alat Musik Daerah' },
  { id: 'tempat-bersejarah', name: 'Tempat Bersejarah' },
  { id: 'kearifan-lokal', name: 'Kearifan Lokal' }
];

const createQuiz = (cat) => {
  const arr = [];
  for(let i=1; i<=15; i++) {
    arr.push({
      id: cat.id + "-q" + i,
      category: cat.id,
      question: "Pertanyaan tentang " + cat.name + " nomor " + i + "?",
      choices: ["Pilihan A " + i, "Pilihan B " + i, "Pilihan C " + i, "Pilihan D " + i],
      correctAnswer: "Pilihan A " + i,
      explanation: "Penjelasan singkat tentang " + cat.name + " " + i,
      difficulty: 'mudah'
    });
  }
  return "export const quiz_" + cat.id.replace(/-/g, '_') + " = " + JSON.stringify(arr, null, 2) + ";";
}

const createGuessImage = (cat) => {
  const arr = [];
  for(let i=1; i<=15; i++) {
    arr.push({
      id: cat.id + "-img" + i,
      category: cat.id,
      image: "https://placehold.co/600x400/8b181a/FFF?text=" + cat.name + "+" + i,
      question: "Gambar apakah ini?",
      choices: ["Jawaban " + i + "A", "Jawaban " + i + "B", "Jawaban " + i + "C", "Jawaban " + i + "D"],
      correctAnswer: "Jawaban " + i + "A"
    });
  }
  return "export const guess_" + cat.id.replace(/-/g, '_') + " = " + JSON.stringify(arr, null, 2) + ";";
}

const createMatching = (cat) => {
  const arr = [];
  for(let i=1; i<=15; i++) {
    arr.push({
      id: cat.id + "-match" + i,
      category: cat.id,
      left: "Item Kiri " + i,
      right: "Item Kanan " + i
    });
  }
  return "export const match_" + cat.id.replace(/-/g, '_') + " = " + JSON.stringify(arr, null, 2) + ";";
}

categories.forEach(cat => {
  fs.writeFileSync(path.join('src/data/quiz', cat.id + '.js'), createQuiz(cat));
  fs.writeFileSync(path.join('src/data/guessImage', cat.id + '.js'), createGuessImage(cat));
  fs.writeFileSync(path.join('src/data/matching', cat.id + '.js'), createMatching(cat));
});

console.log("Mock data created!");
