import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Marketplace", href: "#hero" },
  { label: "Agents", href: "#agents" },
  { label: "Decision Layer", href: "#decision" },
  { label: "Studio", href: "#studio" },
  { label: "Pulse", href: "#pulse" },
  { label: "Pricing", href: "#pricing" },
];

function MagneticLink({ item }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.4, y: y * 0.4 });
  };

  return (
    <motion.a
      ref={ref}
      href={item.href}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.6 }}
      className="relative text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-colors px-3 py-2"
    >
      {item.label}
    </motion.a>
  );
}

export default function MagneticNav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-fuchsia-500 opacity-90" />
            <span className="relative text-black font-bold text-lg">K</span>
          </div>
          <span className="text-white font-semibold tracking-[0.2em] text-sm">KAIZORA</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-3 py-1.5">
          {NAV_ITEMS.map((item) => (
            <MagneticLink key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex glass rounded-full w-10 h-10 items-center justify-center text-zinc-300 hover:text-white transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
          <button className="rounded-full bg-white text-black text-sm font-semibold px-5 py-2.5 hover:bg-zinc-200 transition">
            Sign In
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden glass rounded-full w-10 h-10 flex items-center justify-center text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="lg:hidden glass-strong mx-6 rounded-2xl overflow-hidden">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block px-6 py-4 text-zinc-300 hover:text-white border-b border-white/5 last:border-0">
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}