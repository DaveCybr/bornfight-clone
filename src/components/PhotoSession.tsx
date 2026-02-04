import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const photoTypes = [
  {
    title: "Individual Studio",
    image:
      "https://nanoyearbook.com/wp-content/uploads/2025/08/9.-INDIVIDU-SESSION-com.jpg",
  },
  {
    title: "Group Studio Set",
    image: "https://nanoyearbook.com/wp-content/uploads/2025/08/5-com.jpg",
  },
  {
    title: "Individual Outdoor",
    image:
      "https://nanoyearbook.com/wp-content/uploads/2025/08/11.-OUTDOOR-PERSONAL-com.jpg",
  },
  {
    title: "Group Outdoor",
    image:
      "https://nanoyearbook.com/wp-content/uploads/2025/08/10.-OUTDOOR-SESSION-com.jpg",
  },
];

export function PhotoSession() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground italic text-base mb-4">
            Sesi Foto Profesional
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Photo
              <br />
              <span className="text-gradient-accent">Session</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Dari foto formal hingga konsep kreatif, semua dirancang agar setiap
              kenangan tampil menawan di buku tahunan.
            </p>
          </div>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photoTypes.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <Camera className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-accent font-medium">
                      Photo Session
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-accent/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
