import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Process />
      <Team />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
