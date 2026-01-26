import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    name: "VALIDATE",
    items: [
      "Pre-seed investment",
      "Due diligence",
      "Product ideation",
      "Idea evaluation",
      "Competitor & market analysis",
      "Customer interviews",
    ],
  },
  {
    name: "PROTOTYPE",
    items: [
      "Product discovery",
      "Customer profile development",
      "Marketing strategy creation",
      "Prototyping",
      "Financial planning",
    ],
  },
  {
    name: "BUILD",
    items: [
      "MVP development & iteration",
      "Sales activities",
      "Go-to-market implementation",
      "UX/UI testing",
      "Branding",
      "Seed investment",
    ],
  },
  {
    name: "GROW",
    items: [
      "Product development",
      "Strategy & goal setting",
      "Business development",
      "Growth marketing",
      "Team expansion",
    ],
  },
  {
    name: "SCALE",
    items: [
      "Sales & Marketing scaling",
      "Moving up-market",
      "New products",
      "Hiring at scale",
      "Culture building",
    ],
  },
];

export function Process() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            How we work
          </p>
          <h2 className="heading-lg mb-6">Our venture building process</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Using our expertise, we detect every project's needs and define an 
            optimal process that can adapt to your business.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step indicator */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <span className="text-accent font-bold">{index + 1}</span>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-bold text-accent mb-4">{step.name}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg group">
            Let's meet
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
