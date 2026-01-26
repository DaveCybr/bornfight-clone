import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Milestone {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const milestones: Milestone[] = [
  {
    year: "2009",
    title: "Degordian Founded",
    description:
      "Tomislav Grubišić co-founds Degordian — social media agency that becomes one of the largest regional digital agencies.",
    highlight: true,
  },
  {
    year: "2010",
    title: "First Major Client",
    description:
      "Secured partnership with leading regional brands, establishing our reputation for digital excellence.",
  },
  {
    year: "2011",
    title: "Team Expansion",
    description:
      "Grew to 25+ team members, expanding capabilities in design, development, and strategy.",
  },
  {
    year: "2012",
    title: "International Recognition",
    description:
      "Won multiple international awards for digital campaigns and innovative solutions.",
  },
  {
    year: "2013",
    title: "Mediatoolkit Launch",
    description:
      "Launched Mediatoolkit, our first SaaS product for media monitoring that would later become Determ.",
    highlight: true,
  },
  {
    year: "2015",
    title: "Bornfight Established",
    description:
      "Founded Bornfight as a dedicated product development company, focusing on building scalable digital products.",
    highlight: true,
  },
  {
    year: "2016",
    title: "Venture Model Begins",
    description:
      "Transitioned to venture building model, combining expertise in product, design, and business development.",
  },
  {
    year: "2018",
    title: "First Venture Exit",
    description:
      "Achieved our first successful venture exit, validating our co-founding approach.",
    highlight: true,
  },
  {
    year: "2019",
    title: "100+ Team Members",
    description:
      "Reached 100+ talented professionals across development, design, and business operations.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description:
      "Expanded operations globally, working with founders and companies across Europe and North America.",
  },
  {
    year: "2022",
    title: "SWEN & Tabu Launch",
    description:
      "Launched multiple new ventures including SWEN and Tabu, cementing our position as a leading venture builder.",
    highlight: true,
  },
  {
    year: "2022",
    title: "Elevien Acquired",
    description:
      "Elevien acquired by a major tech company, marking our largest exit to date.",
    highlight: true,
  },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, milestones.length - 1));
    setActiveIndex(clampedIndex);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / milestones.length;
      container.scrollTo({
        left:
          itemWidth * clampedIndex - container.clientWidth / 2 + itemWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  return (
    <section className="section-padding bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Our Journey
          </p>
          <h2 className="heading-lg">History Of Our Success</h2>
        </motion.div>

        {/* Year selector */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="border-foreground/20 bg-transparent hover:bg-foreground hover:text-background disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-1 px-4 overflow-x-auto max-w-[80vw] scrollbar-hide">
            {milestones.map((milestone, index) => (
              <button
                key={`${milestone.year}-${index}`}
                onClick={() => scrollToIndex(index)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeIndex === index
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {milestone.year}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={activeIndex === milestones.length - 1}
            className="border-foreground/20 bg-transparent hover:bg-foreground hover:text-background disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Timeline slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={`${milestone.year}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 w-80 snap-center cursor-pointer transition-all duration-300 ${
                activeIndex === index ? "scale-100" : "scale-95 opacity-60"
              }`}
            >
              <div
                className={`glass-card rounded-2xl p-8 h-full border-2 transition-colors ${
                  activeIndex === index ? "border-accent" : "border-transparent"
                } ${milestone.highlight ? "bg-accent/5" : ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-3xl font-bold ${
                      milestone.highlight ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {milestone.year}
                  </span>
                  {milestone.highlight && (
                    <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                      Key Milestone
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            {milestones.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-8 bg-accent"
                    : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
