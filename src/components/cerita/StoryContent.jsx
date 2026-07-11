import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StoryContent = ({ 
  story, 
  currentChapterIndex, 
  onNext, 
  onPrev 
}) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  
  
  const isMoralValue = currentChapterIndex === story.chapters.length;
  
  const currentContent = isMoralValue 
    ? {
        title: "Pesan Moral Cerita",
        content: story.moralValue
      }
    : story.chapters[currentChapterIndex];

  
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 400); 
    return () => clearTimeout(timer);
  }, [currentChapterIndex]);

  return (
    <div className="flex flex-col h-full">
      
      <div className={`bg-white rounded-[30px] border-4 border-[#c55428] p-8 md:p-12 shadow-md flex-grow transition-opacity duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <h2 className="font-cheese-milky text-[#c55428] text-3xl md:text-4xl mb-6 text-center">
          {currentContent?.title}
        </h2>
        
        <div className="font-jakarta text-[#5a403f] text-lg leading-relaxed whitespace-pre-line text-center md:text-left">
          {currentContent?.content}
        </div>
        
        {isMoralValue && (
          <div className="mt-8 text-center bg-[#fdecc7] p-6 rounded-2xl border-2 border-[#e89b25] shadow-inner font-bricolage font-bold text-[#c55428]">
            🎉 Selamat! Kamu telah menyelesaikan cerita ini. Semoga nilai moralnya dapat kamu terapkan dalam kehidupan sehari-hari.
          </div>
        )}
      </div>

      
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
        
        {currentChapterIndex > 0 ? (
          <button 
            onClick={onPrev}
            disabled={isAnimating}
            className="flex items-center gap-2 font-cheese-milky text-white text-xl bg-[#d46d54] hover:bg-[#c55428] px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            &larr; Cerita Sebelumnya
          </button>
        ) : (
          <div></div>         )}

        
        {!isMoralValue ? (
          <button 
            onClick={onNext}
            disabled={isAnimating}
            className="flex items-center gap-2 font-cheese-milky text-white text-xl bg-[#5d8f85] hover:bg-[#4a736a] px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            Cerita Selanjutnya &rarr;
          </button>
        ) : (
          <button 
            onClick={() => navigate('/cerita')}
            className="flex items-center gap-2 font-cheese-milky text-white text-xl bg-[#5d8f85] hover:bg-[#4a736a] px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105"
          >
            Kembali ke Cerita Nusantara
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryContent;
