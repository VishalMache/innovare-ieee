import { HeroSection } from "@/components/sections/HeroSection";
import { LogosStrip } from "@/components/sections/LogosStrip";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Timeline } from "@/components/sections/Timeline";
import { Team } from "@/components/sections/Team";
import { JoinUs } from "@/components/sections/JoinUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogosStrip />
      <WhoWeAre />
      <StatsCounter />
      <ProjectShowcase />
      <Timeline />
      <Team />
      <JoinUs />
    </>
  );
}
