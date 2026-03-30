"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 text-center px-6 max-w-[980px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[#2997ff] text-sm tracking-wide mb-6"
        >
          AI &amp; Machine Learning Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-[7rem] font-bold leading-[0.95] tracking-[-0.03em] text-[#1d1d1f] mb-8"
        >
          Anirudh Raj
          <br />
          Sharma.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#86868b] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Engineering production ML systems that ship.
          <br className="hidden md:block" />
          From 52GB data pipelines to real-time computer vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-8"
        >
          <a
            href="#projects"
            className="group text-[#2997ff] text-lg hover:underline underline-offset-4 transition-all duration-300 flex items-center gap-1"
          >
            View my work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
          <a
            href="#contact"
            className="group text-[#2997ff] text-lg hover:underline underline-offset-4 transition-all duration-300 flex items-center gap-1"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
