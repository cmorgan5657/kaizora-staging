import React from "react";
import MagneticNav from "@/components/kaizora/MagneticNav";
import OrbitalHero from "@/components/kaizora/OrbitalHero";
import AgentOracle from "@/components/kaizora/AgentOracle";
import RemixStudio from "@/components/kaizora/RemixStudio";
import PulseHub from "@/components/kaizora/PulseHub";
import KaizoraFooter from "@/components/kaizora/KaizoraFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Global ambient gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #00F0FF, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #FF00E5, transparent 70%)" }} />
      </div>
      <div className="relative z-10">
        <MagneticNav />
        <main>
          <OrbitalHero />
          <AgentOracle />
          <RemixStudio />
          <PulseHub />
        </main>
        <KaizoraFooter />
      </div>
    </div>
  );
}