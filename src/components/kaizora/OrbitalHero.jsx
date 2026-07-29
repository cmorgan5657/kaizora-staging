import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";

const ORB_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/00ac9dd39_generated_image.png";
const ORB_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/e62a7b4ba_Liquid_Orb.mp4";
const DECISION_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/9ded05d0d_generated_5149b298.png";
const DECISION_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/9c986880f_Decision_Layer_Video.mp4";
const PULSE_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/d9dfdfc32_Pulse_Model_Video.mp4";
const STUDIO_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/f2cd5c785_generated_049d3fdd.png";

const KLING_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/321c6a8a4_Kling_Style_Clip.mp4";
const SEEDANCE_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/a7979bf9e_Seedance_20_Clip.mp4";
const VEO_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/485cff1f7_Veo_Style_Clip.mp4";

const PHASES = [
  {
    key: "hero",
    eyebrow: "THE WORLD'S PREMIER AI MARKETPLACE",
    title: "The Agentic\nCommerce Platform",
    accent: "AI-Content Creators",
    sub: "Recycle. Remix. Resell.",
    body: "Unlocking the untapped value hidden inside AI-generated content.",
    cta: "Explore Marketplace",
    media: { type: "video", src: ORB_VIDEO, poster: ORB_IMG },
  },
  {
    key: "kling",
    eyebrow: "KLING · 4K CINEMATIC",
    title: "Perfect camera\nmotion, rendered",
    accent: "by Kling",
    sub: "Smooth dolly tracking · character consistency",
    body: "A flowing gown, an obsidian corridor — every frame composed by a frontier model.",
    cta: "Watch the Reel",
    media: { type: "video", src: KLING_VIDEO },
  },
  {
    key: "seedance",
    eyebrow: "SEEDANCE 2.0 · 4K",
    title: "One character,\n360 degrees",
    accent: "by Seedance",
    sub: "Orbital camera · perfect consistency",
    body: "The camera orbits a single subject without losing a single detail of the face.",
    cta: "See the Orbit",
    media: { type: "video", src: SEEDANCE_VIDEO },
  },
  {
    key: "veo",
    eyebrow: "VEO · 4K SLOW MOTION",
    title: "Liquid metal,\nin motion",
    accent: "by Veo",
    sub: "Volumetric light · push-in camera",
    body: "Every shimmer of fabric and light captured in cinematic slow-motion.",
    cta: "Play the Shot",
    media: { type: "video", src: VEO_VIDEO },
  },
  {
    key: "decision",
    eyebrow: "THE DECISION LAYER",
    title: "Agents that\nevaluate",
    accent: "and coach",
    sub: "Real-time intelligence, not just scoring.",
    body: "A crystalline neural core reads every asset and guides each creator toward mastery.",
    cta: "Enter the Layer",
    media: { type: "video", src: DECISION_VIDEO, poster: DECISION_IMG },
  },
  {
    key: "studio",
    eyebrow: "THE REMIX STUDIO",
    title: "Remix the\nuniverse",
    accent: "of models",
    sub: "Every top model. One canvas.",
    body: "Drop a 4K asset onto the Orb and let it refract through every frontier model at once.",
    cta: "Open the Studio",
    media: { type: "image", src: STUDIO_IMG },
  },
];

export default function OrbitalHero() {
  const [index, setIndex] = useState(0);
  const phase = PHASES[index];

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % PHASES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(255,0,229,0.06) 40%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, #050505 75%)" }} />
      </div>

      {/* Orb */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <div className="relative w-[min(94vw,552px)] h-[min(94vw,552px)] sm:w-[504px] sm:h-[504px]">
          {/* Rotating conic ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 rounded-full opacity-60"
            style={{ background: "conic-gradient(from 0deg, transparent, rgba(0,240,255,0.4), transparent, rgba(255,0,229,0.4), transparent)" }}
          />
          {/* Orb media */}
          <div className="relative w-full h-full rounded-full overflow-hidden orb-glow glass-strong">
            <AnimatePresence mode="wait">
              <motion.div
                key={phase.key}
                initial={{ opacity: 0, scale: 1.15 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {phase.media.type === "video" ? (
                  <video
                    src={phase.media.src}
                    poster={phase.media.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image src={phase.media.src} alt="Kaizora Orb" fittingType="fill" className="w-full h-full" />
                )}
              </motion.div>
            </AnimatePresence>
            {/* Refraction overlay */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 70% 75%, rgba(0,240,255,0.2), transparent 50%)" }} />
          </div>

          {/* Phase dots */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {PHASES.map((p, i) => (
              <button
                key={p.key}
                onClick={() => setIndex(i)}
                className="group relative h-2 transition-all"
                style={{ width: i === index ? 32 : 8 }}
                aria-label={p.key}
              >
                <span className={`absolute inset-0 rounded-full ${i === index ? "bg-cyan-400" : "bg-white/25"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Text phase */}
        <div className="mt-20 sm:mt-24 text-center max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={phase.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-[11px] sm:text-xs tracking-[0.35em] text-cyan-300/80 mb-5 uppercase">{phase.eyebrow}</p>
              <h1 className="font-display font-bold leading-[1.02] tracking-[-0.04em] text-4xl sm:text-6xl lg:text-7xl text-white whitespace-pre-line">
                {phase.title}{" "}
                <span className="text-gradient-cyan">{phase.accent}</span>
              </h1>
              <p className="mt-6 text-lg font-semibold text-fuchsia-400">{phase.sub}</p>
              <p className="mt-2 text-base text-zinc-300">{phase.body}</p>
              <button className="mt-9 inline-flex items-center gap-2 rounded-full px-8 py-4 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z"/></svg>
                {phase.cta}
              </button>
              <p className="mt-6 text-xs tracking-widest text-zinc-500 uppercase">For visionary creators worldwide</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.a
        href="#agents"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 text-xs tracking-[0.2em] uppercase flex flex-col items-center gap-1"
      >
        <span>↓ Discover the rebirth ↓</span>
      </motion.a>
    </section>
  );
}