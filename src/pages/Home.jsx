import React from "react";
import MagneticNav from "@/components/kaizora/MagneticNav";
import OrbitalHero from "@/components/kaizora/OrbitalHero";
import AgentOracle from "@/components/kaizora/AgentOracle";
import RemixStudio from "@/components/kaizora/RemixStudio";
import PulseHub from "@/components/kaizora/PulseHub";
import KaizoraFooter from "@/components/kaizora/KaizoraFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FBFBFB] text-[#0D172A] overflow-x-hidden">
      {/* Constellation + ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] rounded-full opacity-[0.10]" style={{ background: "radial-gradient(circle, #0056D2, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, #0D172A, transparent 70%)" }} />
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