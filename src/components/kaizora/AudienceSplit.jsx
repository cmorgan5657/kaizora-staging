import React from "react";
import { motion } from "framer-motion";
import { Upload, ShoppingCart, DollarSign, GitBranch, Trophy, SkipForward, Wand2, ShieldCheck } from "lucide-react";

const CREATOR_FEATURES = [
  { icon: DollarSign, title: "Earn from Every Sale", sub: "Set your price and license terms. Get paid instantly." },
  { icon: GitBranch, title: "Earn from Remixes", sub: "Get royalties when others build on your work." },
  { icon: Trophy, title: "Build Your Legacy", sub: "Showcase your AI creations and grow your audience." },
];

const BUYER_FEATURES = [
  { icon: SkipForward, title: "Skip the First Draft", sub: "Start with pre-generated content and iterate faster." },
  { icon: Wand2, title: "Remix with AI", sub: "Use our AI tools to evolve content into something new." },
  { icon: ShieldCheck, title: "Clear Licensing", sub: "Know exactly what you can do with each asset." },
];

function Panel({ icon: Icon, title, accent, sub, features, cta, ctaStyle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="relative rounded-2xl border border-[#ff3344]/25 bg-[#121215] p-8 sm:p-10 shadow-[0_0_50px_rgba(255,51,68,0.08)] hover:shadow-[0_0_70px_rgba(255,51,68,0.15)] transition-all"
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#ff3344]/10 border border-[#ff3344]/40 shadow-[0_0_20px_rgba(255,51,68,0.25)] mb-6">
        <Icon className="w-6 h-6 text-[#ff3344]" strokeWidth={1.6} />
      </div>
      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
        For <span className="text-[#ff3344]">{accent}</span>
      </h3>
      <p className="mt-3 text-[#a0a0a0]">{sub}</p>
      <ul className="mt-8 space-y-5">
        {features.map((f) => {
          const FIcon = f.icon;
          return (
            <li key={f.title} className="flex gap-3">
              <div className="shrink-0 mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center bg-[#ff3344]/10">
                <FIcon className="w-4 h-4 text-[#ff3344]" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-white font-medium">{f.title}</p>
                <p className="text-sm text-[#a0a0a0]">{f.sub}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        className={`mt-9 w-full rounded-xl px-6 py-3.5 text-sm font-semibold transition ${
          ctaStyle === "outline"
            ? "border border-[#ff3344] text-white hover:border-[#D90429] hover:bg-[#D90429]/10 hover:shadow-[0_0_14px_rgba(217,4,41,0.91),0_0_28px_rgba(217,4,41,0.46)]"
            : "bg-[#ff3344] text-white hover:bg-[#ff5577]"
        }`}
      >
        {cta}
      </button>
    </motion.div>
  );
}

export default function AudienceSplit() {
  return (
    <section id="audience" className="relative py-28 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Panel
            icon={Upload}
            accent="Creators"
            title="For Creators"
            sub="Monetize your AI generations. Transform creative experiments into revenue."
            features={CREATOR_FEATURES}
            cta="Start Uploading"
            ctaStyle="outline"
          />
          <Panel
            icon={ShoppingCart}
            accent="Buyers & Remixers"
            title="For Buyers & Remixers"
            sub="Find inspiration and starting points. Build faster with premium AI assets."
            features={BUYER_FEATURES}
            cta="Explore Marketplace"
            ctaStyle="outline"
          />
        </div>
      </div>
    </section>
  );
}