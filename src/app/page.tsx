import { HeroSection } from "@/components/sections/HeroSection";
import { LogosStrip } from "@/components/sections/LogosStrip";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Timeline } from "@/components/sections/Timeline";
import { WallOfFame } from "@/components/sections/WallOfFame";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { JoinUs } from "@/components/sections/JoinUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogosStrip />
      <StatsCounter />
      <WhoWeAre />
      <ProjectShowcase />
      <Timeline />
      <WallOfFame />
      <Team />
      <FAQ />
      <JoinUs />
    </>
  );
}
