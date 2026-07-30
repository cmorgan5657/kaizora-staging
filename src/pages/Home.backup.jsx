import React from "react";
import MagneticNav from "@/components/kaizora/MagneticNav";
import OrbitalHero from "@/components/kaizora/OrbitalHero";
import ValueProps from "@/components/kaizora/ValueProps";
import BrowseContent from "@/components/kaizora/BrowseContent";
import AudienceSplit from "@/components/kaizora/AudienceSplit";
import DecisionLayer from "@/components/kaizora/DecisionLayer";
import HowItWorks from "@/components/kaizora/HowItWorks";
import FeaturedDrops from "@/components/kaizora/FeaturedDrops";
import KaizoraFooter from "@/components/kaizora/KaizoraFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#16161c] text-white overflow-x-hidden">
      {/* Global ambient gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, #ff3344, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #ff5577, transparent 70%)" }} />
      </div>
      <div className="relative z-10">
        <MagneticNav />
        <main>
          <OrbitalHero />
          <ValueProps />
          <BrowseContent />
          <AudienceSplit />
          <DecisionLayer />
          <HowItWorks />
          <FeaturedDrops />
        </main>
        <KaizoraFooter />
      </div>
    </div>
  );
}