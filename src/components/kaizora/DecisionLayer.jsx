import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

export default function DecisionLayer() {
  return (
    <section id="decision" className="relative py-28 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 mb-6">
          <Star className="w-3.5 h-3.5 text-white" fill="white" />
          <span className="text-xs tracking-[0.2em] uppercase text-zinc-400">Pre-Monetization Tool</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-white leading-[1.05]"
        >
          Decide Before You <span className="text-[#ff3344]">List</span>
        </motion.h2>
        <p className="mt-6 text-[#a0a0a0] text-lg leading-relaxed max-w-xl mx-auto">
          KAIZORA's Decision Layer helps creators quickly determine what's worth monetizing, how to price it directionally, and who it's for before publishing or marketing anything.
        </p>
        <button className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 border border-[#ff3344]/60 text-white text-sm font-semibold hover:border-[#D90429] hover:bg-[#D90429]/10 hover:shadow-[0_0_14px_rgba(217,4,41,0.91),0_0_28px_rgba(217,4,41,0.46)] transition shadow-[0_0_30px_rgba(255,51,68,0.2)]">
          Try the Decision Layer <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}