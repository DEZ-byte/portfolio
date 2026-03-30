"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            About me.
          </h2>
          <div className="max-w-2xl space-y-5 text-[#86868b] text-lg leading-relaxed">
            <p>
              Graduate student pursuing a{" "}
              <span className="text-[#1d1d1f]">
                Master of Science in Artificial Intelligence
              </span>{" "}
              at the{" "}
              <span className="text-[#1d1d1f]">
                University at Buffalo, SUNY
              </span>
              . Deep focus on Reinforcement Learning, Machine Learning, and
              Computer Vision.
            </p>
            <p>
              I build production-grade ML pipelines, optimize models for
              real-world performance, and deploy scalable AI systems. From
              architecting ETL pipelines processing 52GB+ datasets at{" "}
              <span className="text-[#1d1d1f]">IBM</span> to engineering
              real-time network monitoring at{" "}
              <span className="text-[#1d1d1f]">InfraKnit Technologies</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 grid grid-cols-3 gap-px bg-[#d2d2d7] rounded-2xl overflow-hidden"
        >
          {[
            { value: "MS", label: "Artificial Intelligence", sub: "University at Buffalo" },
            { value: "2", label: "Industry Internships", sub: "IBM & InfraKnit" },
            { value: "4+", label: "ML Projects Shipped", sub: "Production-grade systems" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 md:p-8 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#1d1d1f] mb-0.5">{stat.label}</p>
              <p className="text-xs text-[#86868b]">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
