import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Play } from "lucide-react";

const FILTERS = ["All", "Images", "Text", "Video", "Audio", "Code"];
const FILTER_MAP = { All: null, Images: "image", Text: "text", Video: "video", Audio: "audio", Code: "code" };

const ITEMS = [
  { cat: "video", tag: "AI Content", title: "Cinematic Aerial Drone Shot of Misty Tropical Rainforest at Sunrise", price: "Free", creator: "syed masroor ahmad", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80" },
  { cat: "image", tag: "AI Content", title: "Cucumber Kiwi Twist Mocktail", price: "$2.00", creator: "badri rayavarapu", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80" },
  { cat: "video", tag: "AI Content", title: "Luxury Beauty Commercial | AI Video", price: "$8.00", creator: "AI Video Studio", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" },
  { cat: "video", tag: "AI Content", title: "walk on the beach", price: "$5.00", creator: "Ikechukwu Ezema", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { cat: "image", tag: "AI Content", title: "Beach surf", price: "$2.00", creator: "Ikechukwu Ezema", img: "https://images.unsplash.com/photo-1502680390469-be4c9bc83c44?auto=format&fit=crop&w=800&q=80" },
  { cat: "image", tag: "Other", title: "Ninja on rooftop", price: "$8.00", creator: "Niel de Kock", img: "https://images.unsplash.com/photo-1519501025264-65ba15a6231a?auto=format&fit=crop&w=800&q=80" },
];

export default function BrowseContent() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? ITEMS : ITEMS.filter((it) => it.cat === FILTER_MAP[active]);

  return (
    <section id="browse" className="relative py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.03em] text-white"
          >
            Browse <span className="text-[#ff3344]">AI Content</span>
          </motion.h2>
          <p className="mt-4 text-[#a0a0a0]">Live public content from Marketplace Commerce OS</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                active === f
                  ? "border-[#ff3344] text-[#ff3344] bg-[#ff3344]/5"
                  : "border-[#202024] text-zinc-400 hover:text-white hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((it) => (
            <div key={it.title} className="group rounded-xl border border-[#202024] bg-[#121215] overflow-hidden hover:border-[#ff3344]/40 transition">
              <div className="relative aspect-[4/3]">
                <Image src={it.img} alt={it.title} fittingType="fill" className="w-full h-full" />
                {it.cat === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur flex items-center justify-center border border-white/20">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#331118] text-[#ff3344] font-medium">{it.cat}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#331118] text-[#ff3344] font-medium">{it.tag}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white text-base leading-snug line-clamp-2 mb-3 min-h-[2.6rem]">{it.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#ff3344] text-sm">{it.price}</span>
                  <span className="text-[#666] text-xs">by {it.creator}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}