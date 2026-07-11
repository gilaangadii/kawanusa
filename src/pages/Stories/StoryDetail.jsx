import { useEffect, useRef,useState } from 'react';
import { Navigate,useParams } from 'react-router-dom';

import DetailHero from '../../components/cerita/DetailHero';
import ReadingProgress from '../../components/cerita/ReadingProgress';
import StoryContent from '../../components/cerita/StoryContent';
import TableOfContents from '../../components/cerita/TableOfContents';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import { storyData } from '../../data/storyData';

export default function StoryDetail() {
  const { slug } = useParams();
  const story = storyData.find(s => s.slug === slug);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const contentRef = useRef(null);

  
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentChapterIndex(0);
  }, [slug]);

  if (!story) {
    return <Navigate to="/cerita" replace />;
  }

  
  const hasChapters = story.chapters && story.chapters.length > 0;

  const handleNext = () => {
    if (hasChapters && currentChapterIndex < story.chapters.length) {
      setCurrentChapterIndex(prev => prev + 1);
      scrollToContent();
    }
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
      scrollToContent();
    }
  };

  const handleChapterSelect = (index) => {
    setCurrentChapterIndex(index);
    scrollToContent();
  };

  const scrollToContent = () => {
    
    if (contentRef.current) {
      const y = contentRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf1] font-jakarta overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col w-full pb-20">
        <DetailHero story={story} />

        <div 
          ref={contentRef} 
          className="w-full max-w-[1280px] mx-auto px-6 lg:px-16"
        >
          {hasChapters ? (
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              
              <div className="w-full lg:w-2/3 flex flex-col">
                <StoryContent 
                  story={story}
                  currentChapterIndex={currentChapterIndex}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              </div>

              
              <div className="w-full lg:w-1/3 flex flex-col">
                <div className="sticky top-32">
                  <ReadingProgress 
                    currentChapterIndex={currentChapterIndex}
                    totalChapters={story.chapters.length}
                  />
                  <TableOfContents 
                    chapters={story.chapters}
                    currentChapterIndex={currentChapterIndex}
                    onChapterSelect={handleChapterSelect}
                  />
                </div>
              </div>

            </div>
          ) : (
            <div className="bg-white p-10 rounded-[30px] border-[4px] border-[#5a403f] shadow-lg text-center">
              <h2 className="font-cheese-milky text-[#c55428] text-4xl mb-4">Cerita Sedang Disusun</h2>
              <p className="font-jakarta text-[#5a403f] text-lg mb-6">
                Wah, cerita ini sedang dalam proses penulisan. Mohon kembali lagi nanti ya!
              </p>
              <button 
                onClick={() => window.history.back()}
                className="font-cheese-milky text-white text-xl bg-[#5d8f85] hover:bg-[#4a736a] px-8 py-3 rounded-full transition-transform hover:scale-105"
              >
                Kembali
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
