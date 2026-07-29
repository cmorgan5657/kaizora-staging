import React from "react";
import { motion } from "framer-motion";

export default function KaizoraFooter() {
  return (
    <footer id="pricing" className="relative border-t border-white/5 py-16 px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center">
                <span className="text-black font-bold text-lg">K</span>
              </div>
              <span className="text-white font-semibold tracking-[0.2em] text-sm">KAIZORA</span>
            </div>
            <p className="text-zinc-400 max-w-sm">The agentic commerce platform powering the future of AI-content creators. Recycle. Remix. Resell.</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4">Platform</p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li><a href="#hero" className="hover:text-white transition">Marketplace</a></li>
              <li><a href="#agents" className="hover:text-white transition">Agents</a></li>
              <li><a href="#studio" className="hover:text-white transition">Remix Studio</a></li>
              <li><a href="#pulse" className="hover:text-white transition">Pulse</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4">Company</p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#pulse" className="hover:text-white transition">About</a></li>
              <li><a href="#pulse" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#pulse" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">© 2026 Kaizora. The rebirth of AI content.</p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs tracking-[0.2em] uppercase text-zinc-600">For visionary creators worldwide</motion.p>
        </div>
      </div>
    </footer>
  );
}