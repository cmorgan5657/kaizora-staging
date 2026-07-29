import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";

const ORB_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/00ac9dd39_generated_image.png";
const ORB_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/e62a7b4ba_Liquid_Orb.mp4";
const DECISION_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/9ded05d0d_generated_5149b298.png";
const DECISION_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/5e60bfb65_ScreenRecording2026-07-29at120131AM.mov";
const PULSE_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/d9dfdfc32_Pulse_Model_Video.mp4";
const STUDIO_IMG = "https://media.base44.com/images/public/6a6984ae3df2ae3b9c071a1c/f2cd5c785_generated_049d3fdd.png";
const STUDIO_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/5f2bb4cc1_ScreenRecording2026-07-29at121128AM.mov";

const KLING_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/321c6a8a4_Kling_Style_Clip.mp4";
const VEO_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/485cff1f7_Veo_Style_Clip.mp4";
const RUNWAY_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/887ea9086_Runway_City_V2.mp4";
const HAILUO_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/adc06f75d_Hailuo_Skate_V2.mp4";
const LUMA_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/ce48197e7_Luma_Chef_V2.mp4";
const SPACE_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/87257326f_Spacewalk_Clip.mp4";
const ROCKET_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/6318c604f_Rocket_Launch_Clip.mp4";
const ROBOT_SOLDIER_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/9ae192b0e_Robot_Soldiers_Clip.mp4";
const TIKTOK_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/e3473939d_TikTok_Dance_Clip.mp4";
const ROBOT_YOUTUBER_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/c73e2de86_Robot_YouTuber_Clip.mp4";
const NEON_CITY_VIDEO = "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/a0ef1f6e8_Neon_City_Flythrough_Clip.mp4";

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
    key: "runway",
    eyebrow: "RUNWAY GEN-3 · 4K",
    title: "Walking the\ncity night",
    accent: "by Runway",
    sub: "Tracking shot · natural stride",
    body: "A figure in a tailored suit moves through neon streets — the camera tracks with flawless motion.",
    cta: "See the Walk",
    media: { type: "video", src: RUNWAY_VIDEO },
  },
  {
    key: "hailuo",
    eyebrow: "HAILUO · 4K",
    title: "Air on\nthe ramp",
    accent: "by Hailuo",
    sub: "Follow camera · slow motion",
    body: "A skater launches off the ramp — the camera follows the arc with smooth, natural motion.",
    cta: "Watch the Trick",
    media: { type: "video", src: HAILUO_VIDEO },
  },
  {
    key: "luma",
    eyebrow: "LUMA DREAM MACHINE · 4K",
    title: "Precision\non the plate",
    accent: "by Luma",
    sub: "Push-in camera · natural hands",
    body: "A chef plates with deliberate precision — the camera pushes in with fluid, realistic motion.",
    cta: "See the Craft",
    media: { type: "video", src: LUMA_VIDEO },
  },
  {
    key: "space",
    eyebrow: "REALISTIC · 4K SPACE",
    title: "Drifting\nabove Earth",
    accent: "in orbit",
    sub: "Weightless slow-motion · ultra-real",
    body: "An astronaut floats outside the station while Earth glows below — the kind of shot that breaks the feed.",
    cta: "Watch the Drift",
    media: { type: "video", src: SPACE_VIDEO },
  },
  {
    key: "rocket",
    eyebrow: "TRENDING · 4K LAUNCH",
    title: "Liftoff\nat golden hour",
    accent: "full thrust",
    sub: "Slow-motion ascent · billowing smoke",
    body: "A rocket ignites and rises through the clouds — every frame engineered for maximum shareability.",
    cta: "Feel the Thrust",
    media: { type: "video", src: ROCKET_VIDEO },
  },
  {
    key: "robot-soldiers",
    eyebrow: "VIRAL · 4K SCI-FI",
    title: "Robots\nin formation",
    accent: "marching in",
    sub: "Glowing visors · cinematic haze",
    body: "A squad of robot soldiers advances toward the lens — the sci-fi shot everyone's been recreating.",
    cta: "Watch the March",
    media: { type: "video", src: ROBOT_SOLDIER_VIDEO },
  },
  {
    key: "tiktok",
    eyebrow: "TRENDING · 4K DANCE",
    title: "The viral\ndance, nailed",
    accent: "silly & fun",
    sub: "Locked camera · full-body energy",
    body: "A creator hits the trending dance — the kind of clip that racks up millions overnight.",
    cta: "Join the Trend",
    media: { type: "video", src: TIKTOK_VIDEO },
  },
  {
    key: "robot-youtuber",
    eyebrow: "TRENDING · 4K CREATOR",
    title: "A robot\nrunning the channel",
    accent: "now streaming",
    sub: "Ring light · talking to camera",
    body: "A humanoid robot content creator films its own show — the AI-influencer format taking over feeds.",
    cta: "Tune In",
    media: { type: "video", src: ROBOT_YOUTUBER_VIDEO },
  },
  {
    key: "neon-city",
    eyebrow: "VIRAL · 4K FLYTHROUGH",
    title: "Through the\nneon city",
    accent: "at full speed",
    sub: "FPV drone · holographic skyline",
    body: "A screaming FPV flythrough of a futuristic skyline — the cinematic loop that lives on every explore page.",
    cta: "Take the Ride",
    media: { type: "video", src: NEON_CITY_VIDEO },
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
];

const LIQUID_BASE = {
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

const LIQUID_VARIANTS = [
  { ...LIQUID_BASE, overlay: "recycle" },
  { ...LIQUID_BASE, overlay: "agentic" },
  { ...LIQUID_BASE, overlay: "studio" },
  { ...LIQUID_BASE, overlay: "decision" },
  { ...LIQUID_BASE, overlay: "creators" },
];

const SEQUENCE = PHASES.flatMap((p, i) =>
  i < PHASES.length - 1 ? [p, LIQUID_VARIANTS[i % LIQUID_VARIANTS.length]] : [p]
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

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(255,51,68,0.12) 0%, rgba(255,85,119,0.06) 40%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, #050505 75%)" }} />
      </div>

      {/* Screen */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <div className="relative w-[min(90vw,540px)] aspect-[9/16]">
          {/* Screen media */}
          <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={phase.key}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
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
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <Image src={phase.media.src} alt="Kaizora Screen" fittingType="fill" className="w-full h-full" />
                )}
                {phase.key === "liquid" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
                    {phase.overlay === "agentic" ? (
                      <>
                        <span className="text-[#ff3344] font-display font-bold text-4xl sm:text-5xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>Agentic</span>
                        <span className="text-[#ff3344] font-display font-bold text-4xl sm:text-5xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>Marketplace</span>
                      </>
                    ) : phase.overlay === "studio" ? (
                      <>
                        <span className="text-[#ff3344] font-display font-bold text-4xl sm:text-5xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>Remix</span>
                        <span className="text-[#ff3344] font-display font-bold text-4xl sm:text-5xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>Studio</span>
                      </>
                    ) : phase.overlay === "decision" ? (
                      <>
                        <span className="text-[#ff3344] font-display font-bold text-4xl sm:text-5xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>Decision</span>
                        <span className="text-[#ff3344] font-display font-bold text-4xl sm:text-5xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>Layer</span>
                      </>
                    ) : phase.overlay === "creators" ? (
                      <>
                        <span className="text-[#ff3344] font-display font-bold text-2xl sm:text-3xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>For AI Content Creators</span>
                        <span className="text-[#ff3344] font-display font-bold text-2xl sm:text-3xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>By AI Content Creators</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[#ff3344] font-display font-bold text-3xl sm:text-4xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>Recycle.</span>
                        <span className="text-[#ff3344] font-display font-bold text-3xl sm:text-4xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>Remix.</span>
                        <span className="text-[#ff3344] font-display font-bold text-3xl sm:text-4xl tracking-tight" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>Resell.</span>
                        <span className="mt-3 text-[#ff3344]/85 text-[11px] tracking-[0.3em] uppercase" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}>AI Generated Content</span>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Phase dots */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
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
                  <span className={`absolute inset-0 rounded-full ${index === target ? "bg-[#ff3344]" : "bg-white/25"}`} />
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
              <p className="text-[11px] sm:text-xs tracking-[0.35em] text-zinc-400 mb-5 uppercase">{phase.eyebrow}</p>
              <h1 className="font-display font-bold leading-[1.02] tracking-[-0.04em] text-4xl sm:text-6xl lg:text-7xl text-white whitespace-pre-line">
                {phase.title}{" "}
                <span className="text-gradient-cyan">{phase.accent}</span>
              </h1>
              <p className="mt-6 text-lg font-semibold text-[#ff3344]">{phase.sub}</p>
              <p className="mt-2 text-base text-zinc-300">{phase.body}</p>
              <button className="mt-9 inline-flex items-center gap-2 rounded-full px-8 py-4 bg-[#ff3344] text-white font-semibold text-sm hover:bg-[#ff5577] transition group">
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