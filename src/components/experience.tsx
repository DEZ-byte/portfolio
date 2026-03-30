"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "IBM",
    role: "Software Engineer Intern",
    period: "Jun 2022 – Aug 2022",
    highlights: [
      "Architected an end-to-end ETL pipeline using Python and Dask to process a 52GB dataset, accelerating the ML development lifecycle by 35%.",
      "Drove an 18% uplift in model accuracy by implementing and tuning an XGBoost classifier, replacing an underperforming Random Forest baseline.",
      "Containerized the application with Docker and configured deployment within a Jenkins CI/CD pipeline for zero-downtime releases.",
    ],
  },
  {
    company: "InfraKnit Technologies",
    role: "Network Engineering Intern",
    period: "Aug 2023 – Oct 2023",
    highlights: [
      "Re-architected network protocols for public transit systems, improving critical alert delivery time by 20%.",
      "Implemented preventive maintenance schedules that slashed critical network failures by 40% across 15+ nodes.",
      "Created troubleshooting guides standardizing resolutions for 10+ common issues, cutting ticket resolution time by 30%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-[980px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-14"
        >
          Experience.
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-[#f5f5f7] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f]">
                    {exp.company}
                  </h3>
                  <p className="text-[#2997ff] text-sm mt-0.5">{exp.role}</p>
                </div>
                <p className="text-[#86868b] text-sm mt-1 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="text-[#6e6e73] text-[15px] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#d2d2d7]"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
