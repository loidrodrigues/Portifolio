import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    date: "MAR 2024",
    title: "A Disciplina como Diferencial Competitivo na Programação",
    tag: "Desenvolvimento Pessoal",
  },
  {
    date: "FEV 2024",
    title: "Por que Engenheiros de Dados precisam dominar o Inglês?",
    tag: "Tecnologia",
  },
  {
    date: "JAN 2024",
    title: "Construindo uma Cultura de Aprendizado Contínuo",
    tag: "Educação",
  },
];

const Content: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
              Pensamento Construtor
            </h2>
            <h3 className="text-3xl font-bold">Conhecimento Compartilhado</h3>
          </div>

          <div className="space-y-12">
            {articles.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group flex gap-8 items-start border-b border-white/5 pb-8 last:border-0"
              >
                <div className="text-xs font-bold text-gray-600 tracking-tighter pt-1 shrink-0">
                  {article.date}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500 mb-2 block">
                    {article.tag}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold group-hover:text-blue-400 transition-colors cursor-pointer leading-tight">
                    {article.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
