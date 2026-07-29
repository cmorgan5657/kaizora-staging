import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const AGENT_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/0113ef8d2_generated_ce690338.png";

const AGENTS = [
  { name: "ARIA", role: "Vision Director", specialty: "Composition & light", signature: "#0056D2" },
  { name: "NOVA", role: "Narrative Coach", specialty: "Story & sequence", signature: "#0D172A" },
  { name: "ZEN", role: "Aesthetic Judge", specialty: "Taste calibration", signature: "#2563EB" },
];

export default function AgentOracle() {
  return (
    <section id="agents" className="relative py-32 px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[11px] tracking-[0.35em] text-[#0056D2] uppercase mb-4"
          >
            The Agent Oracle
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-[#0D172A] max-w-3xl"
          >
            Top-tier agents that <span className="text-gradient-cyan">coach every creation</span>
          </motion.h2>
          <p className="mt-5 text-[#475569] max-w-xl">Editorial profiles of the intelligence layer — each one evaluates, guides, and elevates.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="snap-start shrink-0 w-[280px] sm:w-[340px] group"
            >
              <div className="relative rounded-3xl overflow-hidden glass aspect-[3/4]">
                <Image src={AGENT_IMG} alt={agent.name} fittingType="fill" className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D172A] via-[#0D172A]/30 to-transparent" />
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full animate-pulse" style={{ background: agent.signature, boxShadow: `0 0 16px ${agent.signature}` }} />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#94A3B8]">{agent.role}</p>
                  <h3 className="mt-1 text-3xl font-bold text-white tracking-tight">{agent.name}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{agent.specialty}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#94A3B8]">
                    <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${agent.signature}, transparent)` }} />
                    Decision Logic
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}