import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-[800px] mx-auto mt-6 mb-8 relative">
      <div className="bg-white border border-[#e2bebb] flex h-[64px] items-center px-6 relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full transition-all focus-within:ring-2 focus-within:ring-[#608981]/50 focus-within:border-[#608981] focus-within:shadow-md group">
        <Search className="text-[#6b7280] mr-4 shrink-0 transition-colors group-focus-within:text-[#608981]" size={24} />
        <input 
          type="text" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari provinsi atau budaya..."
          className="w-full h-full border-none outline-none font-cheese-milky text-[#6b7280] text-[20px] md:text-[24px] bg-transparent focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default SearchBar;
