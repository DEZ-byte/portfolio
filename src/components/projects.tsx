"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "CVE Security Data Lakehouse",
    category: "Data Engineering",
    description:
      "Production-grade pipeline on Databricks processing 40K+ cybersecurity vulnerabilities. Bronze-Silver-Gold Medallion architecture with Delta Lake ACID transactions.",
    metrics: [
      { value: "318K", label: "Raw files" },
      { value: "4,000+", label: "Vendors" },
      { value: "1,816", label: "Critical CVEs" },
    ],
    tech: ["PySpark", "Delta Lake", "Databricks", "SQL"],
    accent: "#2997ff",
  },
  {
    title: "SQL-Grounded Analytics Agent",
    category: "AI Agent",
    description:
      "Production agent answering business questions via safe SQL generation. Schema-aware with dry-run validation, query budget caps, and PII-aware row limits.",
    metrics: [
      { value: "48%", label: "Fewer errors" },
      { value: "280ms", label: "p90 latency" },
      { value: "100%", label: "Validated" },
    ],
    tech: ["Python", "LangChain", "OpenAI API", "SQLAlchemy", "Pinecone"],
    accent: "#30d158",
  },
  {
    title: "Real-Time Product Detection",
    category: "Computer Vision",
    description:
      "Fine-tuned YOLOv8 to identify 50+ product SKUs from retail shelf images. Deployed as REST API via Flask/Docker on GCP for real-time inventory tracking.",
    metrics: [
      { value: "0.92", label: "mAP score" },
      { value: "50+", label: "SKUs" },
      { value: "400%", label: "Augmentation" },
    ],
    tech: ["PyTorch", "YOLOv8", "Flask", "Docker", "GCP"],
    accent: "#ff9f0a",
  },
  {
    title: "Echo Chamber Analysis",
    category: "Social Network Analysis",
    description:
      "Analyzed echo chamber formation on Reddit using network analysis. Led the MCP implementation enabling AI-powered analysis of community polarization.",
    metrics: [
      { value: "MCP", label: "Integration" },
      { value: "NLP", label: "Analysis" },
      { value: "EAS 587", label: "Research" },
    ],
    tech: ["Python", "MCP", "Network Analysis", "Reddit API"],
    accent: "#bf5af2",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-end justify-between mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight"
          >
            Projects.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-2"
          >
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[#86868b] hover:text-[#1d1d1f] hover:border-[#86868b] transition-all duration-200"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[#86868b] hover:text-[#1d1d1f] hover:border-[#86868b] transition-all duration-200"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-[max(1.5rem,calc((100vw-980px)/2+1.5rem))] snap-x snap-mandatory"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="snap-start shrink-0 w-[340px] md:w-[420px] p-6 md:p-8 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
          >
            <p
              className="text-xs font-medium tracking-wide uppercase mb-2"
              style={{ color: project.accent }}
            >
              {project.category}
            </p>
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">
              {project.title}
            </h3>
            <p className="text-[#86868b] text-sm leading-relaxed mb-6 grow">
              {project.description}
            </p>

            {/* Metrics row */}
            <div className="flex gap-4 mb-5">
              {project.metrics.map((m, j) => (
                <div key={j}>
                  <p
                    className="text-xl font-bold"
                    style={{ color: project.accent }}
                  >
                    {m.value}
                  </p>
                  <p className="text-[10px] text-[#86868b] uppercase tracking-wide">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, j) => (
                <span
                  key={j}
                  className="text-xs text-[#86868b] px-2.5 py-1 rounded-full bg-[#f5f5f7]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
