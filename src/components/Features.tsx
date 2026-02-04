import { motion } from "framer-motion";
import { BookOpen, Calendar, Camera, Video, ArrowUpRight } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Buku Tahunan Digital & Cetak",
    description:
      "Desain buku tahunan yang modern dan personal untuk setiap angkatan. Kreativitas bertemu storytelling untuk menciptakan kenangan tak terlupakan.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Video Sinematik Angkatan",
    description:
      "Tim videografer profesional menciptakan video dokumenter dengan pendekatan sinematik. Setiap frame menangkap emosi dan momen berharga.",
    icon: Video,
  },
  {
    number: "03",
    title: "Sesi Foto Profesional",
    description:
      "Foto individual dan kelompok dengan konsep kreatif dan lighting profesional. Setiap siswa tampil percaya diri dan natural.",
    icon: Camera,
  },
  {
    number: "04",
    title: "Dokumentasi Event Sekolah",
    description:
      "Dari wisuda hingga acara perpisahan - kami mendokumentasikan setiap momen penting dengan detail profesional.",
    icon: Calendar,
  },
];

export function Features() {
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
            Apa yang kami tawarkan
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Turn Moments
            <br />
            <span className="text-gradient-accent">Into Memories</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 lg:p-10 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_60px_-15px_hsl(18_90%_55%_/_0.2)]"
            >
              {/* Number Background */}
              <div className="absolute -top-6 -right-4 text-[8rem] font-display font-bold text-muted/5 leading-none select-none">
                {feature.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
