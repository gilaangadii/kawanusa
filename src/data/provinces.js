import { getProvinceImage } from '../utils/imageMapper';


const rawProvinces = [
  {
    "id": "prov-1",
    "name": "Aceh",
    "slug": "aceh",
    "region": "Sumatera",
    "description": "Provinsi yang dikenal dengan julukan Serambi Mekkah.",
    "landmark": "Masjid Baiturrahman",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-2",
    "name": "Sumatera Utara",
    "slug": "sumatera-utara",
    "region": "Sumatera",
    "description": "Provinsi dengan pesona Danau Toba yang memukau.",
    "landmark": "Danau Toba",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-3",
    "name": "Sumatera Barat",
    "slug": "sumatera-barat",
    "region": "Sumatera",
    "description": "Tanah Minang dengan kekayaan arsitektur dan kuliner.",
    "landmark": "Jam Gadang",
    "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jam_Gadang_Bukittinggi_2.jpg/800px-Jam_Gadang_Bukittinggi_2.jpg",
    "isPopular": true
  },
  {
    "id": "prov-4",
    "name": "Riau",
    "slug": "riau",
    "region": "Sumatera",
    "description": "Provinsi kaya budaya Melayu dan Istana Siak.",
    "landmark": "Istana Siak",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-5",
    "name": "Kepulauan Riau",
    "slug": "kepulauan-riau",
    "region": "Sumatera",
    "description": "Gugusan kepulauan yang indah berbatasan dengan Singapura.",
    "landmark": "Jembatan Barelang",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-6",
    "name": "Jambi",
    "slug": "jambi",
    "region": "Sumatera",
    "description": "Pusat peradaban Melayu dan Candi Muaro Jambi.",
    "landmark": "Candi Muaro Jambi",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-7",
    "name": "Bengkulu",
    "slug": "bengkulu",
    "region": "Sumatera",
    "description": "Provinsi sejarah tempat pengasingan Bung Karno.",
    "landmark": "Benteng Marlborough",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-8",
    "name": "Sumatera Selatan",
    "slug": "sumatera-selatan",
    "region": "Sumatera",
    "description": "Bumi Sriwijaya yang terkenal dengan Jembatan Ampera dan pempek.",
    "landmark": "Jembatan Ampera",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-9",
    "name": "Kepulauan Bangka Belitung",
    "slug": "kepulauan-bangka-belitung",
    "region": "Sumatera",
    "description": "Provinsi kepulauan dengan pantai berbatu granit nan eksotis.",
    "landmark": "Pantai Tanjung Tinggi",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-10",
    "name": "Lampung",
    "slug": "lampung",
    "region": "Sumatera",
    "description": "Pintu gerbang Sumatera yang terkenal dengan konservasi gajah.",
    "landmark": "Menara Siger",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-11",
    "name": "Banten",
    "slug": "banten",
    "region": "Jawa",
    "description": "Provinsi dengan badak bercula satu di Ujung Kulon.",
    "landmark": "Taman Nasional Ujung Kulon",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-12",
    "name": "DKI Jakarta",
    "slug": "dki-jakarta",
    "region": "Jawa",
    "description": "Ibu kota negara dengan monumen bersejarah Monas.",
    "landmark": "Monumen Nasional (Monas)",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": true
  },
  {
    "id": "prov-13",
    "name": "Jawa Barat",
    "slug": "jawa-barat",
    "region": "Jawa",
    "description": "Tanah Pasundan yang kaya budaya, terkenal dengan Gedung Sate.",
    "landmark": "Gedung Sate",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-14",
    "name": "Jawa Tengah",
    "slug": "jawa-tengah",
    "region": "Jawa",
    "description": "Pusat kebudayaan Jawa yang penuh dengan nilai sejarah.",
    "landmark": "Candi Borobudur",
    "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Borobudur_Temple.jpg/800px-Borobudur_Temple.jpg",
    "isPopular": true
  },
  {
    "id": "prov-15",
    "name": "DI Yogyakarta",
    "slug": "di-yogyakarta",
    "region": "Jawa",
    "description": "Kota pelajar yang memadukan budaya keraton dan candi megah.",
    "landmark": "Tugu Yogyakarta",
    "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Prambanan_Temple_Yogyakarta_Indonesia.jpg/800px-Prambanan_Temple_Yogyakarta_Indonesia.jpg",
    "isPopular": true
  },
  {
    "id": "prov-16",
    "name": "Jawa Timur",
    "slug": "jawa-timur",
    "region": "Jawa",
    "description": "Provinsi dengan pesona kawah Bromo yang menakjubkan.",
    "landmark": "Tugu Pahlawan",
    "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bromo_volcano.jpg/800px-Bromo_volcano.jpg",
    "isPopular": false
  },
  {
    "id": "prov-17",
    "name": "Bali",
    "slug": "bali",
    "region": "Bali & NT",
    "description": "Pulau Dewata dengan keajaiban alam dan seni budayanya.",
    "landmark": "Pura Tanah Lot",
    "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pura_Ulun_Danu_Bratan_A.JPG/800px-Pura_Ulun_Danu_Bratan_A.JPG",
    "isPopular": true
  },
  {
    "id": "prov-18",
    "name": "Nusa Tenggara Barat",
    "slug": "nusa-tenggara-barat",
    "region": "Bali & NT",
    "description": "Provinsi dengan keindahan Mandalika dan Gunung Rinjani.",
    "landmark": "Gunung Rinjani",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-19",
    "name": "Nusa Tenggara Timur",
    "slug": "nusa-tenggara-timur",
    "region": "Bali & NT",
    "description": "Rumah bagi hewan endemik komodo di pulau-pulau eksotis.",
    "landmark": "Pulau Komodo",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-20",
    "name": "Kalimantan Barat",
    "slug": "kalimantan-barat",
    "region": "Kalimantan",
    "description": "Kota Khatulistiwa dengan kekayaan budaya Dayak dan Melayu.",
    "landmark": "Tugu Khatulistiwa",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-21",
    "name": "Kalimantan Tengah",
    "slug": "kalimantan-tengah",
    "region": "Kalimantan",
    "description": "Jantung Kalimantan, pusat konservasi orangutan.",
    "landmark": "Rumah Betang",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-22",
    "name": "Kalimantan Selatan",
    "slug": "kalimantan-selatan",
    "region": "Kalimantan",
    "description": "Kota Seribu Sungai dengan budaya pasar terapungnya.",
    "landmark": "Pasar Terapung",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-23",
    "name": "Kalimantan Timur",
    "slug": "kalimantan-timur",
    "region": "Kalimantan",
    "description": "Calon ibu kota baru dengan pesona alam Kepulauan Derawan.",
    "landmark": "Jembatan Mahakam",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-24",
    "name": "Kalimantan Utara",
    "slug": "kalimantan-utara",
    "region": "Kalimantan",
    "description": "Provinsi termuda di Kalimantan dengan budaya sungai yang kental.",
    "landmark": "Pantai Amal",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-25",
    "name": "Sulawesi Utara",
    "slug": "sulawesi-utara",
    "region": "Sulawesi",
    "description": "Bumi Minahasa yang terkenal dengan taman laut Bunaken.",
    "landmark": "Taman Laut Bunaken",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-26",
    "name": "Gorontalo",
    "slug": "gorontalo",
    "region": "Sulawesi",
    "description": "Provinsi yang dikenal sebagai Serambi Madinah di Sulawesi.",
    "landmark": "Benteng Otanaha",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-27",
    "name": "Sulawesi Tengah",
    "slug": "sulawesi-tengah",
    "region": "Sulawesi",
    "description": "Mempunyai lanskap pegunungan dan peninggalan megalitik.",
    "landmark": "Danau Poso",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-28",
    "name": "Sulawesi Barat",
    "slug": "sulawesi-barat",
    "region": "Sulawesi",
    "description": "Provinsi dengan budaya maritim suku Mandar yang kuat.",
    "landmark": "Pantai Manakarra",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-29",
    "name": "Sulawesi Selatan",
    "slug": "sulawesi-selatan",
    "region": "Sulawesi",
    "description": "Bumi Anging Mammiri, terkenal dengan tradisi unik Tana Toraja.",
    "landmark": "Benteng Rotterdam",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-30",
    "name": "Sulawesi Tenggara",
    "slug": "sulawesi-tenggara",
    "region": "Sulawesi",
    "description": "Surga terumbu karang yang menakjubkan di Wakatobi.",
    "landmark": "Pulau Labengki",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-31",
    "name": "Maluku",
    "slug": "maluku",
    "region": "Maluku",
    "description": "Kepulauan rempah-rempah yang bersejarah dan mempesona.",
    "landmark": "Jembatan Merah Putih",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-32",
    "name": "Maluku Utara",
    "slug": "maluku-utara",
    "region": "Maluku",
    "description": "Provinsi bersejarah dengan pesona gunung api dan kesultanan.",
    "landmark": "Benteng Tolukko",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-33",
    "name": "Papua",
    "slug": "papua",
    "region": "Papua",
    "description": "Bumi Cenderawasih dengan keragaman suku dan alam yang kaya.",
    "landmark": "Lembah Baliem",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-34",
    "name": "Papua Barat",
    "slug": "papua-barat",
    "region": "Papua",
    "description": "Surga bawah laut Raja Ampat yang mendunia.",
    "landmark": "Raja Ampat",
    "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Piai_Islands_Raja_Ampat_Papua_Indonesia.jpg/800px-Piai_Islands_Raja_Ampat_Papua_Indonesia.jpg",
    "isPopular": true
  },
  {
    "id": "prov-35",
    "name": "Papua Selatan",
    "slug": "papua-selatan",
    "region": "Papua",
    "description": "Provinsi di ujung timur Indonesia dengan budaya Marind.",
    "landmark": "Taman Nasional Wasur",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-36",
    "name": "Papua Tengah",
    "slug": "papua-tengah",
    "region": "Papua",
    "description": "Provinsi dengan pegunungan bersalju abadi di Puncak Jaya.",
    "landmark": "Puncak Cartenz",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-37",
    "name": "Papua Pegunungan",
    "slug": "papua-pegunungan",
    "region": "Papua",
    "description": "Satu-satunya provinsi yang tidak memiliki lautan, pusat Lembah Baliem.",
    "landmark": "Lembah Baliem Pegunungan",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  },
  {
    "id": "prov-38",
    "name": "Papua Barat Daya",
    "slug": "papua-barat-daya",
    "region": "Papua",
    "description": "Pintu gerbang menuju keajaiban alam Papua.",
    "landmark": "Piaynemo Raja Ampat",
    "imageSrc": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600",
    "isPopular": false
  }
];

export const provincesData = rawProvinces.map(prov => ({
  ...prov,
  imageSrc: getProvinceImage(prov.landmark, prov.imageSrc)
}));
