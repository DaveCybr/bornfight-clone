import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

const floatingImages = [
  {
    src: "https://nanoyearbook.com/wp-content/uploads/2025/08/9.-INDIVIDU-SESSION-com.jpg",
    position: { top: "12%", left: "5%" },
    rotate: -12,
    delay: 0.3,
  },
  {
    src: "https://nanoyearbook.com/wp-content/uploads/2025/08/5-com.jpg",
    position: { top: "8%", right: "8%" },
    rotate: 10,
    delay: 0.45,
  },
  {
    src: "https://nanoyearbook.com/wp-content/uploads/2025/08/11.-OUTDOOR-PERSONAL-com.jpg",
    position: { bottom: "20%", left: "3%" },
    rotate: 8,
    delay: 0.6,
  },
  {
    src: "https://nanoyearbook.com/wp-content/uploads/2025/08/10.-OUTDOOR-SESSION-com.jpg",
    position: { bottom: "15%", right: "5%" },
    rotate: -8,
    delay: 0.75,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient-bg flex items-center justify-center overflow-hidden">
      {/* Floating Images */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute w-28 md:w-40 lg:w-52"
            style={{
              ...img.position,
            }}
            initial={{ opacity: 0, y: 60, rotate: img.rotate }}
            animate={{ opacity: 1, y: 0, rotate: img.rotate }}
            transition={{
              duration: 0.9,
              delay: img.delay,
              ease: "easeOut",
            }}
          >
            <div
              className="bg-card p-1.5 md:p-2 shadow-2xl"
              style={{
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)",
              }}
            >
              <img
                src={img.src}
                alt="Photo session"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background subtle image overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={heroImage}
          alt="Team"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 py-32 md:py-40 max-w-6xl mx-auto">
        {/* Tagline */}
        <motion.p
          className="text-muted-foreground italic text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Abadikan momen terbaik,
          <br />
          <span className="text-foreground">dalam cerita visual</span>
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="font-display heading-xl text-foreground mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          Nano Creative
          <br />
          <span className="text-gradient-accent">Studio</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="body-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Lebih dari sekadar buku kenangan. Tim kreatif profesional untuk
          mendokumentasikan perjalanan sekolah Anda dalam bentuk visual yang
          berkesan dan sinematik.
        </motion.p>

        {/* Stats & CTA */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {/* Stats */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-card"
                >
                  <img
                    src={floatingImages[i - 1]?.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-medium">
                +
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground text-lg">231+</p>
              <p className="text-xs text-muted-foreground">Sekolah & Kampus</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/628888477774"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all hover:shadow-[0_0_40px_-10px_hsl(40_30%_95%_/_0.5)]"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/digital-yearbook"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-card transition-all"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
