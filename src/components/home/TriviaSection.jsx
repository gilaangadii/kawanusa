import { motion } from 'framer-motion';

const TriviaSection = () => {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-8 pb-12 z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#860404] rounded-[20px] p-8 md:p-12 relative shadow-lg"
      >
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-[#c55428] to-[#e6cf4d] rounded-[30px] px-8 py-3 shadow-md w-max">
            <h3 className="font-kids-word text-white text-xl md:text-2xl tracking-widest text-center uppercase">
              Apakah kamu tahu ?
            </h3>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cheese-milky text-white text-base md:text-lg leading-relaxed tracking-wide">
            Batik merupakan warisan budaya Indonesia yang telah berkembang sejak masa kerajaan dan awalnya digunakan oleh kalangan bangsawan sebagai simbol status serta nilai filosofi. Seiring waktu, batik menyebar ke seluruh lapisan masyarakat dengan beragam motif khas dari berbagai daerah. Pada 2 Oktober 2009, UNESCO menetapkan batik Indonesia sebagai Warisan Budaya Takbenda Dunia.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default TriviaSection;
