import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";

const ORB_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/00ac9dd39_generated_image.png";
const ORB_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/e62a7b4ba_Liquid_Orb.mp4";
const DECISION_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/9ded05d0d_generated_5149b298.png";
const DECISION_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/9c986880f_Decision_Layer_Video.mp4";
const PULSE_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/d9dfdfc32_Pulse_Model_Video.mp4";
const STUDIO_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/f2cd5c785_generated_049d3fdd.png";
const STUDIO_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/5f2bb4cc1_ScreenRecording2026-07-29at121128AM.mov";

const KLING_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/321c6a8a4_Kling_Style_Clip.mp4";
const SEEDANCE_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/a7979bf9e_Seedance_20_Clip.mp4";
const VEO_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/485cff1f7_Veo_Style_Clip.mp4";
const SORA_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/d22a76a5e_Sora_Natural_Clip.mp4";
const RUNWAY_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/c5c2711f7_Runway_Natural_Clip.mp4";
const PIKA_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/88072619d_Pika_Natural_Clip.mp4";
const HAILUO_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/83fc299f4_Hailuo_Natural_Clip.mp4";
const LUMA_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/730a1fc10_Luma_Natural_Clip.mp4";
const HUNYUAN_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/c48c09c2e_Hunyuan_Natural_Clip.mp4";

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
    key: "sora",
    eyebrow: "SORA · 4K",
    title: "A single spin,\ncentered",
    accent: "by Sora",
    sub: "Locked camera · elegant motion",
    body: "One dancer, one turn — perfect character consistency across every frame.",
    cta: "Watch the Spin",
    media: { type: "video", src: SORA_VIDEO },
  },
  {
    key: "runway",
    eyebrow: "RUNWAY GEN-3 · 4K",
    title: "Walking\ntoward you",
    accent: "by Runway",
    sub: "Dolly-in · centered subject",
    body: "Smooth approach with the character locked dead-center in the frame.",
    cta: "See the Walk",
    media: { type: "video", src: RUNWAY_VIDEO },
  },
  {
    key: "pika",
    eyebrow: "PIKA · 4K PORTRAIT",
    title: "A slow\nturn of the head",
    accent: "by Pika",
    sub: "Locked camera · facial consistency",
    body: "The subtlest motion, held perfectly centered and stable.",
    cta: "Watch the Turn",
    media: { type: "video", src: PIKA_VIDEO },
  },
  {
    key: "hailuo",
    eyebrow: "HAILUO · 4K",
    title: "Fabric in\nthe wind",
    accent: "by Hailuo",
    sub: "Slow zoom · centered figure",
    body: "A still subject, moving cloth — cinematic slow-push composition.",
    cta: "Feel the Wind",
    media: { type: "video", src: HAILUO_VIDEO },
  },
  {
    key: "luma",
    eyebrow: "LUMA DREAM MACHINE · 4K",
    title: "The scene\nrevealed",
    accent: "by Luma",
    sub: "Pull-back camera · centered subject",
    body: "The camera retreats while the character holds the dead-center of the frame.",
    cta: "See the Reveal",
    media: { type: "video", src: LUMA_VIDEO },
  },
  {
    key: "hunyuan",
    eyebrow: "HUNYUAN · 4K",
    title: "Hair in\nthe wind",
    accent: "by Hunyuan",
    sub: "Locked camera · character consistency",
    body: "Golden light meets cyan rim — every strand rendered with perfect continuity.",
    cta: "Watch the Motion",
    media: { type: "video", src: HUNYUAN_VIDEO },
  },
  {
    key: "pulse-model",
    eyebrow: "PULSE · 4K PORTRAIT",
    title: "Hyper-real\nskin & light",
    accent: "by Pulse",
    sub: "Rim lighting · character consistency",
    body: "Avant-garde portraiture with hyper-realistic skin textures and dramatic lighting.",
    cta: "See the Portrait",
    media: { type: "video", src: PULSE_VIDEO },
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

const LIQUID_PHASE = {
  key: "liquid",
  eyebrow: "THE KAIZORA ORB",
  title: "Liquid\nintelligence",
  accent: "at rest",
  sub: "Mercury, refracting.",
  body: "The Orb breathes between every transmission from the models.",
  cta: "Continue",
  duration: 3200,
  media: { type: "video", src: ORB_VIDEO, poster: ORB_IMG },
};

const CHARACTER_KEYS = new Set([
  "kling", "seedance", "veo", "sora", "runway",
  "pika", "hailuo", "luma", "hunyuan", "pulse-model",
]);

const SEQUENCE = PHASES.flatMap((p, i) =>
  i < PHASES.length - 1 ? [p, LIQUID_PHASE] : [p]
);

export default function OrbitalHero() {
  const [index, setIndex] = useState(0);
  const phase = SEQUENCE[index];

  useEffect(() => {
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % SEQUENCE.length),
      phase.duration || 6000
    );
    return () => clearTimeout(t);
  }, [index]);

  const contain = CHARACTER_KEYS.has(phase.key);

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
                    className={`w-full h-full ${contain ? "object-contain" : "object-cover"} object-center`}
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
            {PHASES.map((p, i) => {
              const target = i * 2;
              return (
                <button
                  key={p.key}
                  onClick={() => setIndex(target)}
                  className="group relative h-2 transition-all"
                  style={{ width: index === target ? 32 : 8 }}
                  aria-label={p.key}
                >
                  <span className={`absolute inset-0 rounded-full ${index === target ? "bg-cyan-400" : "bg-white/25"}`} />
                </button>
              );
            })}
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