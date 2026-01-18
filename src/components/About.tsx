import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-8">
              Trajetória e Propósito
            </h2>
            <p className="text-2xl md:text-3xl font-semibold leading-snug text-balance">
              "Minha base é a disciplina; meu motor, a curiosidade intelectual."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-gray-400 text-sm leading-relaxed"
          >
            <p>
              Sou um profissional movido pela construção de soluções reais que
              integram tecnologia avançada e desenvolvimento humano. Como
              programador e mentor, acredito que a técnica sem disciplina é
              apenas potencial desperdiçado.
            </p>
            <p>
              Atualmente, divido meu tempo entre o desenvolvimento de
              arquiteturas de software, o estudo de Data Science e a mentoria
              educacional. Minha missão é democratizar o acesso ao conhecimento
              técnico de alto nível através de uma comunicação clara, humana e
              direta.
            </p>
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-bold mb-1">Impacto Social</h4>
                <p className="text-xs">Educação como pilar de transformação.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Crescimento</h4>
                <p className="text-xs">Aprendizado contínuo e rigoroso.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
