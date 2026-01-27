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
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Sesi Foto Profesional
          </p>
          <h2 className="heading-lg mb-6">Photo Session</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Dari foto formal hingga konsep kreatif, semua dirancang agar setiap
            kenangan tampil menawan di buku tahunan.
          </p>
        </motion.div>

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
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay - darker for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-5 h-5 text-accent" />
                    <span className="text-xs uppercase tracking-widest text-accent font-medium">
                      Photo Session
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Subtle glow on hover - NO BLUR */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(59,130,246,0.15)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
