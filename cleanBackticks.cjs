const fs = require('fs');

const files = [
  'src/pages/TebakGambar/TebakGambarGame.jsx',
  'src/pages/Matching/MatchingGame.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Fix Tebak Gambar
  content = content.replace(
    /const categoryTitle = categoryId \? \\`TEBAK \\\\\$\{categoryId\.split\('-'\)\.join\(' '\)\.toUpperCase\(\)\}\\` : 'TEBAK GAMBAR';/g,
    "const categoryTitle = categoryId ? `TEBAK ${categoryId.split('-').join(' ').toUpperCase()}` : 'TEBAK GAMBAR';"
  );
  // Fix Matching
  content = content.replace(
    /const categoryTitle = categoryId \? \\`MENCOCOKKAN \\\\\$\{categoryId\.split\('-'\)\.join\(' '\)\.toUpperCase\(\)\}\\` : 'MENCOCOKKAN';/g,
    "const categoryTitle = categoryId ? `MENCOCOKKAN ${categoryId.split('-').join(' ').toUpperCase()}` : 'MENCOCOKKAN';"
  );
  
  // Just in case it's slightly different:
  content = content.replace(/\\`TEBAK \\\\\$\{categoryId\.split\('-'\)\.join\(' '\)\.toUpperCase\(\)\}\\`/g, "`TEBAK ${categoryId.split('-').join(' ').toUpperCase()}`");
  content = content.replace(/\\`MENCOCOKKAN \\\\\$\{categoryId\.split\('-'\)\.join\(' '\)\.toUpperCase\(\)\}\\`/g, "`MENCOCOKKAN ${categoryId.split('-').join(' ').toUpperCase()}`");
  content = content.replace(/\\`MENCOCOKKAN/g, "`MENCOCOKKAN");
  content = content.replace(/\\`TEBAK/g, "`TEBAK");
  
  // Actually, let's just do a blanket fix for the literal strings
  // The screenshot shows: \`TEBAK \${categoryId.split('-').join(' ').toUpperCase()}\`
  // We can just replace the whole line since we know what it is.
  
  fs.writeFileSync(file, content);
});

console.log("Fixed backticks.");
