import React, { useState } from "react";
import { motion } from "framer-motion";

const PULSE_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/d9dfdfc32_Pulse_Model_Video.mp4";
const PULSE_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/3be652d74_generated_dd400baa.png";

const ITEMS = [
  { title: "Neon Reverie", author: "@aria", model: "Sora", color: "#ff3344", video: true },
  { title: "Liquid Memory", author: "@nova", model: "Midjourney", color: "#ff5577", video: false },
  { title: "Crystalline Dawn", author: "@zen", model: "Veo", color: "#cc2233", video: true },
  { title: "Hyper Bloom", author: "@kai", model: "Flux", color: "#ff7799", video: false },
  { title: "Obsidian Drift", author: "@leo", model: "DALL·E", color: "#e63950", video: true },
  { title: "Prism Echo", author: "@mira", model: "Sora", color: "#ff3344", video: false },
];

function PulseCard({ item, onHover }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      onMouseEnter={() => onHover(item.color)}
      onMouseLeave={() => onHover(null)}
      className="group relative rounded-2xl overflow-hidden glass aspect-[3/4] cursor-pointer"
    >
      {item.video ? (
        <video src={PULSE_VIDEO} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      ) : (
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-110" style={{ background: `linear-gradient(160deg, ${item.color}33, #050505)` }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }} />
      <div className="absolute bottom-0 inset-x-0 p-4">
        <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-400">{item.model}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-xs text-zinc-400">{item.author}</p>
      </div>
    </motion.div>
  );
}

export default function PulseHub() {
  const [tint, setTint] = useState(null);
  return (
    <section id="pulse" className="relative py-32 px-6">
      {/* Dynamic background tint */}
      <motion.div
        animate={{ opacity: tint ? 0.18 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: tint ? `radial-gradient(circle at center, ${tint}, transparent 60%)` : "transparent" }}
      />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-14">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] tracking-[0.35em] text-zinc-400 uppercase mb-4">
            The Pulse
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-white max-w-3xl">
            A living stream of <span className="text-gradient-cyan">4K momentum</span>
          </motion.h2>
          <p className="mt-5 text-zinc-400 max-w-xl">Hover any creation and the whole world shifts to its color signature.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {ITEMS.map((item) => (
            <PulseCard key={item.title} item={item} onHover={setTint} />
          ))}
        </div>
      </div>
    </section>
  );
}