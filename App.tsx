import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BookOpen,
  Globe2,
  Lightbulb,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Cpu,
  LineChart,
  ChevronDown,
} from "lucide-react";

// Sub-components
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import About from "./src/components/About";
import Services from "./src/components/Services";
import Values from "./src/components/Values";
import Projects from "./src/components/Projects";
import Content from "./src/components/Content";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Values />
        <Projects />
        <Content />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
