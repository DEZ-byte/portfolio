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
    <section id="skills" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-violet-400 mb-2">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technologies I work with
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-gray-900/50 border border-gray-800"
            >
              <h4 className="text-white font-semibold mb-4">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-sm text-gray-400 px-3 py-1 rounded-full border border-gray-800 hover:border-violet-500/30 hover:text-violet-300 transition-colors duration-200 cursor-default"
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
