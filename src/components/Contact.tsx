import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
                Contato
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Vamos criar algo{" "}
                <span className="font-serif italic font-normal text-blue-600">
                  relevante
                </span>
                ?
              </h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Estou sempre aberto a parcerias, mentorias e projetos que exijam
                rigor técnico e visão humana.
              </p>

              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/loidpadre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/loidrodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:loidpadre@gmail.com"
                  className="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <a
                href="mailto:loidpadre@gmail.com"
                className="flex items-center justify-between p-8 border-2 border-black/10 rounded-3xl hover:bg-black hover:text-white transition-all group"
              >
                <div>
                  <span className="text-sm font-bold opacity-60">E-mail</span>
                  <p className="text-xl font-bold">Enviar mensagem</p>
                </div>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>

              <a
                href="https://wa.me/5585996537401?text=ola%20Loid%20Padre,%20quero%20agendar%20uma%20sessao%20gratuita%20para%20sua%20mentoria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-8 border-2 border-black/10 rounded-3xl hover:bg-black hover:text-white transition-all group"
              >
                <div>
                  <span className="text-sm font-bold opacity-60">Mentoria</span>
                  <p className="text-xl font-bold">Agendar Sessão Gratuita</p>
                </div>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
