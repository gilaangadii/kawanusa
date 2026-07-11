const provinceImages = import.meta.glob('../assets/images/Daerah/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });

export const getProvinceImage = (landmark, fallbackUrl) => {
  if (!landmark) return fallbackUrl;

  for (const path in provinceImages) {
    
    const fileName = path.split('/').pop().split('.')[0].toLowerCase();
    if (fileName === landmark.toLowerCase()) {
      return provinceImages[path]; 
    }
  }
  
  return fallbackUrl;
};
