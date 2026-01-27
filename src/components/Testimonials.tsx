import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote:
      "Hasil foto dan video nya bagus banget! Tim NANO sangat profesional dan sabar menghadapi kami yang banyak request. Buku tahunan jadi kenangan yang tak terlupakan.",
    author: "Dimas Prasetyo",
    role: "Ketua OSIS",
    school: "SMA Negeri 5 Jember",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Pengalaman kerja sama dengan NANO sangat menyenangkan. Proses dari awal sampai akhir jelas dan transparan. Hasil cetaknya premium banget!",
    author: "Sarah Amelia",
    role: "Koordinator Buku Tahunan",
    school: "SMK Kristen Petra 4 Sidoarjo",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Tim NANO kreatif banget dalam memberikan konsep foto. Hasilnya melampaui ekspektasi kami. Recommended untuk sekolah yang mau buku tahunan berkualitas!",
    author: "Ahmad Fauzi",
    role: "Wakil Ketua Kelas",
    school: "SMA Negeri 1 Bondowoso",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Pelayanan sangat memuaskan! Revision unlimited sampai kami puas. Video sinematiknya bikin merinding, bener-bener capture moment graduation dengan sempurna.",
    author: "Rina Kartika",
    role: "Ketua Panitia Wisuda",
    school: "SMAN 2 Jember",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

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
            Testimoni Klien
          </p>
          <h2 className="heading-lg mb-6">Client's Reviews</h2>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="h-6 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-accent">4.9/5</div>
              <div className="text-xs text-muted-foreground">
                Based on Chat Testimony Group
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="glass-card rounded-3xl p-8 md:p-12"
              >
                <Quote className="w-12 h-12 text-accent mb-6" />

                <p className="text-xl md:text-2xl font-light text-foreground/90 mb-8 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xl font-bold">
                      {testimonials[activeIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role}
                    </div>
                    <div className="text-sm text-accent">
                      {testimonials[activeIndex].school}
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mt-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="rounded-full border-accent/20 bg-transparent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-accent/30 hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="rounded-full border-accent/20 bg-transparent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
