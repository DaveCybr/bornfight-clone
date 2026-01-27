import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Timeline } from "@/components/Timeline";
import { Team } from "@/components/Team";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { PhotoSession } from "@/components/PhotoSession";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <PhotoSession />
      <Stats />
      <Timeline />
      <Process />
      <Team />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
