import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";

const STUDIO_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/f2cd5c785_generated_049d3fdd.png";

const MODELS = [
  { name: "Sora", color: "#ff3344", desc: "Cinematic motion" },
  { name: "Midjourney", color: "#ff5577", desc: "Painterly worlds" },
  { name: "Veo", color: "#cc2233", desc: "Hyperreal video" },
  { name: "DALL·E", color: "#ff7799", desc: "Compositional control" },
  { name: "Flux", color: "#e63950", desc: "Detail at scale" },
];

export default function RemixStudio() {
  const [active, setActive] = useState(0);
  const model = MODELS[active];

  return (
    <section id="studio" className="relative py-32 px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] tracking-[0.35em] text-zinc-400 uppercase mb-4">
            The Alchemist Studio
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-white max-w-3xl">
            One canvas. <span className="text-gradient-cyan">Every frontier model.</span>
          </motion.h2>
          <p className="mt-5 text-zinc-400 max-w-xl">Drop a 4K asset onto the Orb. It refracts through every model, glowing with each one's color signature.</p>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden glass-strong p-6 sm:p-10">
          {/* Central orb input */}
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full opacity-50"
              style={{ background: `conic-gradient(from 0deg, transparent, ${model.color}, transparent)` }}
            />
            <div className="relative w-[min(60vw,260px)] h-[min(60vw,260px)] rounded-full overflow-hidden orb-glow glass">
              <Image src={STUDIO_IMG} alt="Remix core" fittingType="fill" className="w-full h-full" />
              <div className="absolute inset-0" style={{ background: `radial-gradient(circle, ${model.color}22, transparent 70%)` }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div key={model.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center">
                    <p className="text-xs tracking-[0.3em] uppercase" style={{ color: model.color }}>{model.name}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Model carousel */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {MODELS.map((m, i) => (
                <button
                  key={m.name}
                  onClick={() => setActive(i)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all ${i === active ? "text-black" : "glass text-zinc-300 hover:text-white"}`}
                  style={i === active ? { background: m.color } : {}}
                >
                  {m.name}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-400">{model.desc}</p>
          </div>

          {/* Drop zone hint */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Drop 4K asset", "Select models", "Remix & resell"].map((step, i) => (
              <div key={step} className="glass rounded-2xl p-5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: `${model.color}22`, color: model.color }}>{i + 1}</div>
                <span className="text-sm text-zinc-200">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}