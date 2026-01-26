import { motion } from "framer-motion";
import { BookOpen, Calendar, Camera, Video } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Buku Tahunan Digital & Cetak",
    description:
      "Desain buku tahunan yang modern dan personal untuk setiap angkatan. Kami menggabungkan kreativitas dengan storytelling untuk menciptakan kenangan yang tak terlupakan dalam format digital maupun cetak berkualitas premium.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Video Sinematik Angkatan",
    description:
      "Tim videografer profesional kami menciptakan video dokumenter dengan pendekatan sinematik. Setiap frame dirancang untuk menangkap emosi, persahabatan, dan momen-momen berharga sepanjang perjalanan sekolah.",
    icon: Video,
  },
  {
    number: "03",
    title: "Sesi Foto Profesional",
    description:
      "Foto individual dan kelompok dengan konsep kreatif dan lighting profesional. Kami memastikan setiap siswa tampil percaya diri dan natural dalam setiap jepretan kamera.",
    icon: Camera,
  },
  {
    number: "04",
    title: "Dokumentasi Event Sekolah",
    description:
      "Dari wisuda, pentas seni, hingga acara perpisahan - kami mendokumentasikan setiap momen penting dengan detail. Hasil dokumentasi siap untuk digunakan dalam buku tahunan atau media sosial sekolah.",
    icon: Calendar,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Features() {
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
            What we offer
          </p>
          <h2 className="heading-lg">Turn Moments Into Memories</h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.number}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-8 lg:p-10 hover-glow cursor-default"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="number-badge">{feature.number}</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-accent" />
                    <h3 className="heading-md">{feature.title}</h3>
                  </div>
                  <p className="body-md">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
