import ProvinceCard from './ProvinceCard';

const ProvinceGrid = ({ provinces }) => {
  if (!provinces || provinces.length === 0) {
    return (
      <div className="w-full text-center py-12 z-10 relative">
        <p className="font-cheese-milky text-[24px] text-[#5a403f]">
          Pencarian tidak ditemukan. Coba kata kunci lain.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1120px] mx-auto z-10 relative">
      {provinces.map((prov, index) => (
        <ProvinceCard 
          key={prov.id || index}
          title={prov.name}
          slug={prov.slug}
          description={prov.description}
          imageSrc={prov.imageSrc}
          isPopular={prov.isPopular}
          delay={(index % 3) * 0.15}
        />
      ))}
    </div>
  );
};

export default ProvinceGrid;
