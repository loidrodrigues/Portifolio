import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-blue-400 mb-8 uppercase"
            >
              Tecnologia • Educação • Disciplina
            </motion.span>

            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-8 leading-[0.9] text-balance">
              Construindo o futuro com{" "}
              <span className="font-serif italic font-normal text-white/90">
                clareza
              </span>{" "}
              e rigor.
            </h1>

            <p className="text-sm md:text-base text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
              Desenvolvedor de software e mentor. Traduzo complexidade em
              soluções elegantes, unindo inteligência técnica e desenvolvimento
              humano.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/5585996537401?text=ola,%20Loid%20Estou%20interessado%20em%20trabalhar%20com%20vc"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-3 bg-white text-black text-sm font-bold rounded-full transition-all hover:bg-blue-50 hover:scale-105 active:scale-95"
              >
                Trabalhar Comigo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#sobre"
                className="flex items-center justify-center px-6 py-3 border border-white/10 bg-white/5 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all active:scale-95"
              >
                Minha Trajetória
              </a>
            </div>

            {/* Subtle Social Proof / Metric */}
            <div className="mt-16 flex items-center gap-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-lg font-bold">Rigor</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  Técnico
                </p>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div>
                <p className="text-lg font-bold">Visão</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  Estratégica
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] aspect-square lg:aspect-[4/5]">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-4 border border-white/5 rounded-[2rem] z-0"></div>
              <div className="absolute -inset-8 border border-white/5 rounded-[2.5rem] z-0 opacity-50"></div>

              {/* Image Container */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-[2rem] bg-[#111] border border-white/10 shadow-2xl">
                <img
                  src="/images/loid.png"
                  alt="Profissional"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  style={
                    {
                      // Nota: Substitua a URL acima pelo caminho da imagem que você enviou
                      // como '/assets/profile.png' após salvar o arquivo no projeto.
                    }
                  }
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40"></div>
              </div>

              {/* Status Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <ArrowRight className="-rotate-45" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Baseado em
                    </p>
                    <p className="text-xs font-bold text-white uppercase">
                      Disciplina & Foco
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-6 text-gray-600 hidden md:block"
      >
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase rotate-90 origin-left ml-2">
            Scroll
          </span>
          <div className="w-px h-12 bg-white/10 mt-12"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
