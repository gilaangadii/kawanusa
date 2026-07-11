
const ReadingProgress = ({ currentChapterIndex, totalChapters }) => {
  
  const total = totalChapters + 1;
  const current = currentChapterIndex + 1;
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full flex items-center justify-between bg-white rounded-full p-2 border-2 border-[#5a403f] shadow-sm mb-4">
      <div className="px-4 font-bricolage font-bold text-[#5a403f] text-sm">
        Bagian {current} dari {total}
      </div>
      <div className="flex-grow mx-4 h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#c55428] transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="px-4 font-bricolage font-bold text-[#c55428] text-sm">
        {percentage}%
      </div>
    </div>
  );
};

export default ReadingProgress;
