import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-gray-500">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          © {new Date().getFullYear()} . Todos os direitos reservados.
        </div>
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Code of Conduct
          </a>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-green-500 uppercase">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Disponível para novos desafios
        </div>
      </div>
    </footer>
  );
};

export default Footer;
