"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

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
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-violet-400 mb-2">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h3>
          <p className="text-gray-500 max-w-md mx-auto mb-12">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or collaborations in AI and ML.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto"
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
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-violet-500/30 transition-all duration-200 group"
            >
              <link.icon
                className="text-violet-400 shrink-0"
                size={18}
              />
              <span className="text-gray-400 text-sm group-hover:text-white transition-colors truncate">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
