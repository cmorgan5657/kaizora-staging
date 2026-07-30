import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const COLUMNS = [
  {
    title: "Company",
    links: ["About", "How It Works", "Contact"],
  },
  {
    title: "Resources",
    links: ["Licensing Guide", "Trust & Safety"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "AI Content License", "Age Policy", "DMCA Policy", "AI Disclosure"],
  },
];

export default function KaizoraFooter() {
  return (
    <footer id="footer" className="relative border-t border-white/5 pt-16 pb-10 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex justify-center mb-14">
          <button className="rounded-full border border-[#ff3344] text-white text-sm font-semibold px-7 py-3 hover:border-[#D90429] hover:bg-[#D90429]/10 hover:shadow-[0_0_14px_rgba(217,4,41,0.91),0_0_28px_rgba(217,4,41,0.46)] transition">
            View All AI Content
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white font-semibold mb-4">Company</p>
            <ul className="space-y-3 text-sm text-[#808080]">
              <li><a href="#footer" className="hover:text-white transition">About</a></li>
              <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#footer" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white font-semibold mb-4">Resources</p>
            <ul className="space-y-3 text-sm text-[#808080]">
              <li><a href="#footer" className="hover:text-white transition">Licensing Guide</a></li>
              <li><a href="#footer" className="hover:text-white transition">Trust & Safety</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white font-semibold mb-4">Legal</p>
            <ul className="space-y-3 text-sm text-[#808080]">
              <li><a href="#footer" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#footer" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#footer" className="hover:text-white transition">AI Content License</a></li>
              <li><a href="#footer" className="hover:text-white transition">Age Policy</a></li>
              <li><a href="#footer" className="hover:text-white transition">DMCA Policy</a></li>
              <li><a href="#footer" className="hover:text-white transition">AI Disclosure</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white font-semibold mb-4">Socials</p>
            <div className="flex items-center gap-4">
              <a href="#footer" aria-label="X" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#808080] hover:text-white hover:border-[#ff3344] transition"><Twitter className="w-4 h-4" /></a>
              <a href="#footer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#808080] hover:text-white hover:border-[#ff3344] transition"><Linkedin className="w-4 h-4" /></a>
              <a href="#footer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#808080] hover:text-white hover:border-[#ff3344] transition"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col items-center gap-3">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#ff3344] to-[#ff5577] flex items-center justify-center">
              <span className="text-white font-bold text-xs">K</span>
            </div>
            <p className="text-xs text-[#808080]">© 2026 KAIZORA. Rise from the ashes.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}