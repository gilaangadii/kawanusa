
const DetailHero = ({ story }) => {
  return (
    <div className="relative w-full px-6 lg:px-16 pt-8 pb-32">
      
      <div className="w-full max-w-[1280px] mx-auto h-[40vh] md:h-[60vh] rounded-[40px] overflow-hidden shadow-xl border-4 border-[#5a403f] relative bg-gray-200">
        {story.heroImage ? (
          <img 
            src={story.heroImage} 
            alt={story.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#5a403f] font-bricolage text-2xl">
            Hero Image Not Found
          </div>
        )}
        
        
      </div>

      
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:bottom-12 w-[90%] md:w-[600px] z-10">
        <div className="relative">
          
          <div className="bg-[#8b181a] rounded-[40px] p-6 text-center border-4 border-[#5a403f] shadow-[6px_6px_0px_#5a403f] flex flex-col items-center justify-center relative">
            
            
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#fdecc7] border-4 border-[#5a403f] rounded-full px-8 py-1 shadow-[2px_2px_0px_#5a403f]">
              <span className="font-bricolage font-extrabold text-[#5a403f] tracking-[0.2em] uppercase text-sm">
                Legenda
              </span>
            </div>

            <h1 className="font-cheese-milky text-white text-4xl md:text-5xl lg:text-6xl mt-4 mb-2 tracking-wide leading-tight">
              {story.title}
            </h1>
            
            <p className="font-bricolage font-medium text-white text-lg tracking-widest mt-1">
              {story.province}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
