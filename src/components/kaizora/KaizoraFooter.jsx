import React from "react";
import { motion } from "framer-motion";

export default function KaizoraFooter() {
  return (
    <footer id="pricing" className="relative border-t border-[#0D172A]/10 py-16 px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0D172A] flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-[#0D172A] font-semibold tracking-[0.2em] text-sm">KAIZORA</span>
            </div>
            <p className="text-[#475569] max-w-sm">The agentic commerce platform powering the future of AI-content creators. Recycle. Remix. Resell.</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#0D172A] mb-4">Platform</p>
            <ul className="space-y-3 text-sm text-[#475569]">
              <li><a href="#hero" className="hover:text-[#0D172A] transition">Marketplace</a></li>
              <li><a href="#agents" className="hover:text-[#0D172A] transition">Agents</a></li>
              <li><a href="#studio" className="hover:text-[#0D172A] transition">Remix Studio</a></li>
              <li><a href="#pulse" className="hover:text-[#0D172A] transition">Pulse</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#0D172A] mb-4">Company</p>
            <ul className="space-y-3 text-sm text-[#475569]">
              <li><a href="#pricing" className="hover:text-[#0D172A] transition">Pricing</a></li>
              <li><a href="#pulse" className="hover:text-[#0D172A] transition">About</a></li>
              <li><a href="#pulse" className="hover:text-[#0D172A] transition">Privacy</a></li>
              <li><a href="#pulse" className="hover:text-[#0D172A] transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#0D172A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]">© 2026 Kaizora. The rebirth of AI content.</p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs tracking-[0.2em] uppercase text-[#94A3B8]">For visionary creators worldwide</motion.p>
        </div>
      </div>
    </footer>
  );
}