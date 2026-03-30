"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "C/C++", "JavaScript", "Django", "Node.js"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "Hugging Face",
      "LLMs",
      "XGBoost",
      "scikit-learn",
      "Vector Databases",
    ],
  },
  {
    title: "Data Engineering & Cloud",
    skills: [
      "Apache Spark",
      "Dask",
      "ETL/ELT",
      "dbt",
      "Snowflake",
      "BigQuery",
      "AWS",
      "GCP",
      "Azure",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "MLOps & DevOps",
    skills: [
      "Kubernetes",
      "Docker",
      "Jenkins",
      "Terraform",
      "MLflow",
      "W&B",
      "Prometheus",
      "Airflow",
      "Kafka",
      "Git",
      "FastAPI",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-[980px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-14"
        >
          Skills.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-[#f5f5f7]"
            >
              <h3 className="text-[#1d1d1f] font-semibold text-sm mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-sm text-[#6e6e73] px-3 py-1.5 rounded-full bg-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
