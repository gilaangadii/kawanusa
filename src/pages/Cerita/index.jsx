import { Search } from 'lucide-react';
import { useEffect,useState } from 'react';

import StoryCard from '../../components/cerita/StoryCard';
import StoryHero from '../../components/cerita/StoryHero';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import { storyData } from '../../data/storyData';

export default function Cerita() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStories, setFilteredStories] = useState(storyData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Real-time search filtering
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredStories(storyData);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = storyData.filter(story => 
        story.title.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredStories(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf1] font-jakarta overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col w-full pb-20">
        <StoryHero />

        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-12">
          
          
          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Cari buku favoritmu ..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-full border-2 border-transparent focus:border-[#c55428] shadow-md bg-white font-jakarta text-lg outline-none transition-colors"
              />
            </div>
          </div>

          
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {filteredStories.map((story, index) => (
                <StoryCard key={story.id} story={story} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-cheese-milky text-[#5a403f] text-2xl">Buku tidak ditemukan!</h3>
              <p className="text-gray-500 mt-2">Coba gunakan kata kunci pencarian yang lain.</p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
