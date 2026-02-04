import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ventures = [
  {
    name: "DRONE SHOOT",
    description: "Aerial photography & videography untuk perspektif unik",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
  },
  {
    name: "AUGMENTED REALITY",
    description: "Pengalaman AR interaktif yang memukau",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    name: "EXCLUSIVE YEARBOOK",
    description: "Buku tahunan premium dengan desain custom",
    category: "Publishing",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
  },
  {
    name: "FILM ANGKATAN",
    description: "Film dokumenter sinematik penuh emosi",
    category: "Videography",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
  },
];

export function Portfolio() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-muted-foreground italic text-base mb-4">
              Our Services
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Production
              <br />
              <span className="text-gradient-accent">Service</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Kami menghadirkan berbagai layanan kreatif untuk mengabadikan setiap
            momen berharga dengan kualitas terbaik.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {ventures.map((venture, index) => (
            <motion.a
              key={venture.name}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={venture.image}
                alt={venture.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {venture.category}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-background" />
                  </div>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {venture.name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {venture.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
