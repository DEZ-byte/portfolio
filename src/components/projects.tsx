"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "CVE Security Data Lakehouse",
    subtitle: "Medallion Architecture",
    description:
      "Production-grade data pipeline on Databricks processing 40K+ cybersecurity vulnerabilities for enterprise-scale risk analysis. Implemented Bronze to Silver to Gold Medallion architecture with Delta Lake ACID transactions transforming 318K raw JSON files into analytics-ready tables.",
    stats: [
      "318K raw files",
      "4,000+ vendors",
      "1,816 critical CVEs",
    ],
    tech: ["PySpark", "Delta Lake", "Databricks", "SQL"],
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "SQL-Grounded Analytics Agent",
    subtitle: "Production AI Agent",
    description:
      "Production agent that answers business questions by generating safe SQL instead of free-form text. Features schema-aware SQL generation with dry-run validation, query budget caps, and PII-aware row limits. Reduced wrong-answer rate 48% vs plain RAG.",
    stats: [
      "48% fewer errors vs RAG",
      "p90: 280ms",
      "Source-of-truth checks",
    ],
    tech: ["Python", "LangChain", "OpenAI API", "SQLAlchemy", "Pinecone"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Real-Time Product Detection",
    subtitle: "Retail Analytics",
    description:
      "Fine-tuned a YOLOv8 object detection model to identify 50+ product SKUs from retail shelf images, achieving 0.92 mAP. Deployed as a REST API via Flask/Docker on GCP for real-time inventory tracking.",
    stats: ["0.92 mAP", "50+ SKUs", "400% data augmentation"],
    tech: ["PyTorch", "YOLOv8", "Flask", "Docker", "GCP"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Echo Chamber Analysis",
    subtitle: "Reddit Social Network Analysis",
    description:
      "Analyzed echo chamber formation patterns on Reddit using social network analysis techniques. Led the MCP (Model Context Protocol) implementation to enable AI-powered analysis of community polarization and information flow dynamics.",
    stats: [
      "MCP integration",
      "Network analysis",
      "Team project \u00b7 EAS 587",
    ],
    tech: ["Python", "MCP", "Network Analysis", "Reddit API"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-violet-400 mb-2">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What I&apos;ve built
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col"
            >
              {/* Gradient accent line at top */}
              <div
                className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="mb-3">
                <h4 className="text-lg font-bold text-white">
                  {project.title}
                </h4>
                <p className="text-xs text-gray-500">{project.subtitle}</p>
              </div>

              <p className="text-gray-400 text-sm mb-4 grow">
                {project.description}
              </p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.stats.map((stat, j) => (
                    <span
                      key={j}
                      className="text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs text-violet-300 px-2 py-0.5 rounded-full border border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
