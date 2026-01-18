import React from "react";
import { motion } from "framer-motion";
import { Code2, BookOpen, Globe2, Cpu } from "lucide-react";

const services = [
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: "Desenvolvimento Software",
    description:
      "Construção de aplicações robustas, escaláveis e com foco em excelente experiência de usuário.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: "Mentoria em Tecnologia",
    description:
      "Orientação estratégica para programadores que buscam elevar sua carreira e domínio técnico.",
  },

  {
    icon: <Globe2 className="w-6 h-6 text-blue-400" />,
    title: "Arquitetura & Pensamento Sistêmico",
    description:
      "Desenho de sistemas, análise de problemas complexos e tomada de decisões técnicas com visão de longo prazo.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
    title: "Produtos Educacionais",
    description:
      "Criação de trilhas de aprendizado e conteúdo técnico que gera valor intelectual imediato.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
              O Que Eu Faço
            </h2>
            <h3 className="text-3xl font-bold">Expertise Multidisciplinar</h3>
          </div>
          <p className="text-gray-400 max-w-sm text-sm">
            Engenharia de software e mentoria para construir soluções e pessoas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all rounded-2xl"
            >
              <div className="mb-6 p-3 w-fit bg-blue-500/10 rounded-xl transition-colors group-hover:bg-blue-500/20">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold mb-3">{service.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
