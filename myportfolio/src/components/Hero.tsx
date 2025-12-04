// src/components/Hero.tsx
"use client";

import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";

const FloatingSymbol = ({ 
  children, 
  delay = 0, 
  duration = 4, 
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number; 
  className?: string;
}) => {
  return (
    <motion.span
      className={`absolute text-5xl md:text-7xl pointer-events-none ${className}`}
      animate={{
        y: [-10, -30, -10],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.span>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // subtle parallax

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white text-center overflow-hidden font-mono"
    >
      {/* Dynamic floating symbols that react subtly to mouse */}
      <FloatingSymbol delay={0} className="top-1/4 left-1/6 text-purple-400/70">
        &lt;/&gt;
      </FloatingSymbol>
      <FloatingSymbol delay={1} className="top-1/3 right-1/5 text-blue-400/70">
        {"{}"}
      </FloatingSymbol>
      <FloatingSymbol delay={2} className="top-1/2 left-1/3 text-pink-400/70">
        &lt;/&gt;
      </FloatingSymbol>
      <FloatingSymbol delay={3} className="bottom-1/4 right-1/4 text-green-400/70">
        {"{}"}
      </FloatingSymbol>

      {/* Subtle code background */}
      <pre className="absolute inset-0 text-gray-700/10 text-xs sm:text-sm md:text-base font-mono whitespace-pre-wrap px-4 pointer-events-none z-0">
{`const developer = {
  name: "Rigbe",
  stack: ["TypeScript", "React", "Node.js", "Python", "GenAI"],
  passion: "Building intelligent systems that scale."
};

console.log(developer);`}
      </pre>

      {/* Main content with scroll-based parallax */}
      <motion.div
        style={{ y }}
        className="relative z-10 max-w-4xl px-6 sm:px-8"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">Rigbe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          <Typewriter
            words={[
              "Full-stack Software Engineer.",
              "AI & Data Enthusiast.",
              "Building real-time, intelligent applications."
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-300 mb-10 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          Rigbe Welu Weleslasie has built impactful projects like{" "}
          <span className="text-purple-300 font-semibold">SafiGreens</span> and{" "}
          <span className="text-purple-300 font-semibold">Recos</span> — an AI-driven recruitment platform that automates scheduling, transcribes interviews in real-time, and delivers GenAI-powered candidate insights using Odoo, Google Calendar, and modern ML stacks.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)",
            y: -3 
          }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Optional: subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;