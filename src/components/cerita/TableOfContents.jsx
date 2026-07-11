
const TableOfContents = ({ chapters, currentChapterIndex, onChapterSelect }) => {
  return (
    <div className="bg-white rounded-[30px] border-4 border-[#8b181a] p-8 shadow-md">
      <h3 className="font-cheese-milky text-[#5a403f] text-3xl mb-6 text-center">
        Daftar isi
      </h3>
      <ul className="space-y-4">
        {chapters.map((chapter, index) => {
          const isActive = index === currentChapterIndex;
          const isMoral = index === chapters.length; 

          return (
            <li key={chapter.id}>
              <button
                onClick={() => onChapterSelect(index)}
                className={`text-left font-bricolage font-bold text-lg transition-colors ${
                  isActive 
                    ? "text-[#d46d54]" 
                    : "text-[#5a403f] hover:text-[#d46d54]"
                }`}
              >
                {index + 1}. {chapter.title}
              </button>
            </li>
          );
        })}
        
        <li>
          <button
            onClick={() => onChapterSelect(chapters.length)}
            className={`text-left font-bricolage font-bold text-lg transition-colors ${
              currentChapterIndex === chapters.length
                ? "text-[#d46d54]" 
                : "text-[#5a403f] hover:text-[#d46d54]"
            }`}
          >
            {chapters.length + 1}. Pesan Moral Cerita
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TableOfContents;
