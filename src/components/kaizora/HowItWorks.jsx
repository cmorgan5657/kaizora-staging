import React from "react";
import { motion } from "framer-motion";
import { Upload, Tag, Search, DollarSign } from "lucide-react";

const STEPS = [
  { n: "01", icon: Upload, title: "Upload Your Content", desc: "Share unused generations, abandoned prompts, or creative experiments that deserve a second life." },
  { n: "02", icon: Tag, title: "Set License & Price", desc: "Choose your licensing terms and set your price, or offer it for free." },
  { n: "03", icon: Search, title: "Buyers Discover & Remix", desc: "Creators and remixers browse the marketplace, find inspiration, and purchase or remix your content." },
  { n: "04", icon: DollarSign, title: "Creators Earn Continuously", desc: "Get paid for sales and earn ongoing royalties when others build on your work through remixes." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-28 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-white"
          >
            How <span className="text-[#ff3344]">KAIZORA</span> Works
          </motion.h2>
          <p className="mt-5 text-[#a0a0a0]">From creative spark to valuable asset in four simple steps</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* connecting line */}
          <div className="hidden md:block absolute top-[2.6rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff3344]/40 to-transparent" />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <p className="font-display font-bold text-5xl text-[#ff3344] mb-4">{s.n}</p>
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-[#121215] border border-[#ff3344]/50 shadow-[0_0_30px_rgba(255,51,68,0.25)] mb-6">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-[#a0a0a0] leading-relaxed max-w-[16rem]">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}