import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Edunio",
    category: "EdTech / Plataforma",
    impact: "Comunidade de aprendizado colaborativo.",
    description:
      "A Edunio nasceu da crença de que o conhecimento deve ser acessível a todos. Somos uma plataforma brasileira que conecta estudantes apaixonados por aprender com mentores especializados, criando uma comunidade de aprendizado colaborativo e transformador.",
    link: "https://www.edunio.com.br/",
  },
  {
    title: "Voxidea",
    category: "Social / Inovação",
    impact: "Estruturação e debate de ideias.",
    description:
      "Voxidea é uma plataforma criada para dar voz, estrutura e destino às ideias por meio da participação ativa da comunidade. O app permite que usuários lancem ideias, recebam feedback qualificado e participem de Duelos de Ideias — confrontos estruturados com votação pública.",
    link: "https://voxidea-landpage.vercel.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
            Projetos & Experiências
          </h2>
          <h3 className="text-3xl font-bold">Resultados Tangíveis</h3>
        </div>

        <div className="space-y-4">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] rounded-3xl transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <span className="text-[10px] font-bold text-blue-500 mb-2 block">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-xs max-w-xl">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-[10px] font-medium text-gray-500 whitespace-nowrap">
                  {project.impact}
                </span>
                <div className="hidden md:flex p-3 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-xs">
            Outros 15+ projetos disponíveis sob consulta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
