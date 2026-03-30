"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "rajsharmaanirudh@gmail.com",
    href: "mailto:rajsharmaanirudh@gmail.com",
  },
  {
    icon: Linkedin,
    label: "anirudh-raj-sharma",
    href: "https://linkedin.com/in/anirudh-raj-sharma",
  },
  {
    icon: Github,
    label: "DEZ-byte",
    href: "https://github.com/DEZ-byte",
  },
  {
    icon: Phone,
    label: "+1-716-328-6491",
    href: "tel:+17163286491",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-3">
            Let&apos;s connect.
          </h2>
          <p className="text-[#86868b] text-lg max-w-md mb-12">
            Open to new opportunities, collaborations, and interesting
            conversations about AI and ML.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl"
        >
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center justify-between p-4 rounded-xl bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 min-w-0">
                <link.icon className="text-[#86868b] shrink-0" size={16} />
                <span className="text-[#1d1d1f] text-sm truncate">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                size={14}
                className="text-[#d2d2d7] group-hover:text-[#2997ff] shrink-0 transition-colors duration-300"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
