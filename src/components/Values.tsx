import React from "react";
import { motion } from "framer-motion";

const values = [
  "Clareza",
  "Disciplina",
  "Aprendizado Contínuo",
  "Impacto Real",
  "Simplicidade",
];

const Values: React.FC = () => {
  return (
    <section id="valores" className="py-32 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
            Princípios Fundamentais
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            O que guia cada decisão técnica.
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <span className="text-2xl md:text-3xl font-serif italic text-gray-500 group-hover:text-blue-400 transition-colors">
                {val}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
