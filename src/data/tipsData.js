export const tipsData = [
  "Tahukah kamu? Indonesia memiliki lebih dari 1.300 suku bangsa dan ribuan budaya unik!",
  "Tahukah kamu? Bahasa Indonesia berakar dari bahasa Melayu yang telah digunakan sebagai lingua franca sejak berabad-abad lalu.",
  "Tahukah kamu? Candi Borobudur di Jawa Tengah merupakan candi Buddha terbesar di dunia.",
  "Tahukah kamu? Rendang dari Sumatera Barat pernah dinobatkan sebagai makanan terenak di dunia versi CNN.",
  "Tahukah kamu? Tari Saman dari Aceh diakui sebagai Warisan Budaya Takbenda Manusia oleh UNESCO.",
  "Tahukah kamu? Indonesia memiliki 3 dari 10 pulau terbesar di dunia: Kalimantan, Sumatera, dan Papua.",
  "Tahukah kamu? Terdapat ratusan bahasa daerah di Indonesia, menjadikannya salah satu negara dengan keragaman bahasa terbanyak."
];

export const getRandomTip = () => {
  const randomIndex = Math.floor(Math.random() * tipsData.length);
  return tipsData[randomIndex];
};
