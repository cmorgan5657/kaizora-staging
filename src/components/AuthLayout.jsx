import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CINEMATIC_VIDEO =
  "https://media.base44.com/videos/public/6a6984ae3df2ae3b9c071a1c/321c6a8a4_Kling_Style_Clip.mp4";

function BrandMark() {
  return (
    <Link to="/" className="inline-flex items-center gap-2 group">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#D90429] to-[#ff3344]">
        <span className="text-white font-bold text-lg">K</span>
      </div>
      <span className="text-[#ff3344] font-bold tracking-[0.2em] text-sm">KAIZORA</span>
    </Link>
  );
}

export default function AuthLayout({ icon: Icon, title, subtitle, footer, children }) {
  return (
    <div className="relative min-h-screen flex bg-[#16161c] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-1/4 w-[50vw] h-[50vw] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #ff3344, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #ff5577, transparent 70%)" }}
        />
      </div>

      {/* Left cinematic panel */}
      <div className="hidden lg:flex relative w-1/2 items-center justify-center overflow-hidden border-r border-white/5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          src={CINEMATIC_VIDEO}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(22,22,28,0.65), rgba(22,22,28,0.92))" }}
        />
        <div className="relative z-10 px-16 max-w-md">
          <BrandMark />
          <h2 className="mt-12 font-display font-bold text-4xl leading-[1.05] tracking-tight">
            Recycle. Remix.
            <br />
            <span className="text-gradient-cyan">Resell.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-base leading-relaxed">
            The world's premier agentic marketplace for AI-generated content — built by AI content creators, for AI content creators.
          </p>
          <div className="mt-10 flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-zinc-500">
            <span className="h-px w-8 bg-[#ff3344]/60" />
            For visionary creators
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden mb-8 flex justify-center">
            <BrandMark />
          </div>

          <div className="text-center mb-8">
            {Icon && (
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#ff3344]/15 border border-[#ff3344]/30 mb-4">
                <Icon className="w-5 h-5 text-[#ff3344]" aria-hidden="true" />
              </div>
            )}
            <h1 className="text-2xl font-bold tracking-tight text-white">{title}</h1>
            {subtitle && <p className="text-zinc-400 mt-2 text-sm">{subtitle}</p>}
          </div>

          <div className="glass-strong rounded-2xl p-6 sm:p-8">{children}</div>

          {footer && <p className="text-center text-sm text-zinc-400 mt-6">{footer}</p>}
        </motion.div>
      </div>
    </div>
  );
}