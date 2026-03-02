"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "IBM",
    role: "Software Engineer Intern",
    period: "Jun 2022 – Aug 2022",
    location: "Remote",
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
    location: "Remote",
    highlights: [
      "Re-architected network protocols for public transit systems, improving critical alert delivery time by 20% and enhancing passenger safety monitoring.",
      "Implemented preventive maintenance schedules that slashed critical network failures by 40% across 15+ nodes while maintaining 99.5% uptime.",
      "Created troubleshooting guides standardizing resolutions for 10+ common issues, cutting average ticket resolution time by 30%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-violet-400 mb-2">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Where I&apos;ve worked
          </h3>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {exp.company}
                  </h4>
                  <p className="text-violet-400 text-sm">{exp.role}</p>
                </div>
                <div className="text-gray-500 text-sm mt-1 md:mt-0 md:text-right">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-gray-400 text-sm flex gap-2">
                    <span className="text-violet-500 mt-1 shrink-0">
                      &bull;
                    </span>
                    <span>{h}</span>
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
