import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Heart } from "lucide-react";

const DROPS = [
  {
    badge: "Video",
    price: "Free",
    sales: "0 sales",
    title: "1773693521258.mp4 (Remixed)",
    desc: "Remixed with Vid2Vid — Luma Modify Video",
    via: "AI Content",
    by: "Test",
    img: "https://images.unsplash.com/photo-1535016120720-0bb21e8a9c5b?auto=format&fit=crop&w=800&q=80",
  },
  {
    badge: "Image",
    price: "$60.00",
    sales: "0 sales",
    title: "The Watcher",
    desc: "Cybernetic owl perched on metal branch",
    via: "ChatGPT",
    by: "Testing",
    img: "https://images.unsplash.com/photo-1473445292566-25d9e2aab3b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    badge: "Image",
    price: "$3.00",
    sales: "0 sales",
    title: "Mars Colony",
    desc: "Mining working walking across the martian landscape",
    via: "ChatGPT",
    by: "Testing",
    img: "https://images.unsplash.com/photo-1614728263952-7ea790faef03?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedDrops() {
  return (
    <section id="drops" className="relative py-28 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.03em] text-white"
          >
            Featured Drops
          </motion.h2>
          <p className="mt-4 text-[#a0a0a0]">Marketplace picks from top-performing and long-time KAIZORA sellers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DROPS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[#ff3344]/25 bg-[#0a0a0c] overflow-hidden hover:border-[#ff3344]/60 transition"
            >
              <div className="relative aspect-square">
                <Image src={d.img} alt={d.title} fittingType="fill" className="w-full h-full" />
                <span className="absolute top-3 left-3 text-[10px] px-2 py-0.5 rounded-full text-white font-medium" style={{ background: "#58305c" }}>
                  {d.badge}
                </span>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center hover:bg-black/60 transition">
                  <Heart className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-right">
                    <p className="text-white font-bold text-lg">{d.price}</p>
                    <p className="text-xs text-[#a0a0a0]">{d.sales}</p>
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-[#a0a0a0] mb-4">{d.desc}</p>
                <div className="flex items-center justify-between text-xs text-[#a0a0a0] mb-4">
                  <span>via {d.via}</span>
                  <span>by {d.by}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="rounded-lg border border-[#ff3344] text-white text-sm font-medium py-2 hover:border-[#D90429] hover:bg-[#D90429]/10 hover:shadow-[0_0_14px_rgba(217,4,41,0.91),0_0_28px_rgba(217,4,41,0.46)] transition">Buy</button>
                  <button className="rounded-lg border border-[#ff3344] text-white text-sm font-medium py-2 hover:border-[#D90429] hover:bg-[#D90429]/10 hover:shadow-[0_0_14px_rgba(217,4,41,0.91),0_0_28px_rgba(217,4,41,0.46)] transition">Remix</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}