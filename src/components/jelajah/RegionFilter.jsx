
const regions = [
  "Semua", "Sumatera", "Jawa", "Kalimantan", "Sulawesi", "Bali & NT", "Maluku", "Papua"
];

const RegionFilter = ({ activeRegion, onRegionChange }) => {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center w-full mb-10">
      {regions.map((region) => {
        const isActive = activeRegion === region;
        return (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className={`font-singsong text-[16px] px-[26px] py-[12px] md:py-[14px] rounded-full transition-all duration-300 border-2 ${
              isActive 
                ? 'bg-[#356760] text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] border-[#356760]' 
                : 'bg-white text-[#5a403f] border-[#e2bebb] hover:border-[#356760] hover:text-[#356760]'
            }`}
          >
            {region}
          </button>
        );
      })}
    </div>
  );
};

export default RegionFilter;
