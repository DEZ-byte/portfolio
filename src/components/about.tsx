"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "MS in AI",
    sublabel: "University at Buffalo",
  },
  { icon: MapPin, label: "Buffalo, NY", sublabel: "United States" },
  { icon: Briefcase, label: "2 Internships", sublabel: "IBM & InfraKnit" },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-violet-400 mb-2">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            A bit about me
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 text-gray-400 leading-relaxed"
        >
          <p>
            I&apos;m a graduate student pursuing my{" "}
            <span className="text-white">
              Master of Science in Artificial Intelligence
            </span>{" "}
            at the{" "}
            <span className="text-white">University at Buffalo, SUNY</span>,
            with a deep focus on Reinforcement Learning, Machine Learning, and
            Computer Vision.
          </p>
          <p>
            My experience spans building production-grade ML pipelines,
            optimizing models for real-world performance, and deploying scalable
            AI systems. From architecting ETL pipelines processing 52GB+
            datasets at <span className="text-white">IBM</span> to engineering
            real-time network monitoring systems at{" "}
            <span className="text-white">InfraKnit Technologies</span>, I
            thrive at the intersection of data engineering and machine learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800"
            >
              <item.icon className="text-violet-400 shrink-0" size={20} />
              <div>
                <p className="text-white text-sm font-medium">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
