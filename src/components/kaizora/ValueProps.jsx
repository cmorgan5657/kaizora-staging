import React from "react";
import { motion } from "framer-motion";
import { Flame, Search, Sparkles } from "lucide-react";

const CARDS = [
  {
    icon: Flame,
    title: "Regenerate Content",
    body: "Transform unused AI generations, discarded outputs, and forgotten concepts into valuable assets.",
  },
  {
    icon: Search,
    title: "Discover Inspiration",
    body: "Browse a curated marketplace of premium AI creations. Find the perfect foundation for your next masterpiece.",
  },
  {
    icon: Sparkles,
    title: "Remix & Reinvent",
    body: "Use AI to evolve existing content into something extraordinary. Build on others' work and create unique value.",
  },
];

export default function ValueProps() {
  return (
    <section id="value" className="relative py-28 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-white max-w-3xl leading-[1.05]"
          >
            The World's Premier AI <span className="text-[#ff3344]">Regeneration</span> Platform
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-[#ff3344]/30 bg-[#121215] p-8 transition-all hover:border-[#ff3344]/70 hover:shadow-[0_0_40px_rgba(255,51,68,0.15)]"
              >
                <div className="mx-auto mb-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-[#ff3344]/10 border border-[#ff3344]/40 shadow-[0_0_24px_rgba(255,51,68,0.25)]">
                  <Icon className="w-7 h-7 text-[#ff3344]" strokeWidth={1.6} />
                </div>
                <h3 className="text-center text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-center text-[#a0a0a0] leading-relaxed">{c.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}