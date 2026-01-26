import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ventures = [
  {
    name: "DRONE SHOOT",
    description: "Aerial photography & videography",
    category: "Photography",
  },
  {
    name: "AUGMENTED REALITY",
    description: "Interactive AR experiences",
    category: "Innovation",
  },
  {
    name: "EXCLUSIVE YEARBOOK",
    description: "Premium custom yearbooks",
    category: "Publishing",
  },
  {
    name: "FILM ANGKATAN",
    description: "Cinematic class films",
    category: "Videography",
  },
  {
    name: "NANO HUB CREATIVE",
    description: "Digital Yearbook Platform",
    category: "Technology",
  },
  {
    name: "EVENT COVERAGE",
    description: "Professional event documentation",
    category: "Media",
  },
];

export function Portfolio() {
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
            Our ventures
          </p>
          <h2 className="heading-lg">Production Service</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {ventures.map((venture, index) => (
            <motion.a
              key={venture.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-8 lg:p-10 hover-glow cursor-pointer block"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {venture.category}
                </span>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-accent transition-colors">
                {venture.name}
              </h3>
              <p className="body-md">{venture.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
