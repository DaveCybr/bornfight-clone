import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    name: "TANDA TANGAN MOU",
    items: ["Penandatanganan MoU", "Kesepakatan resmi", "Legal agreement"],
  },
  {
    name: "GROUP & KICK OFF",
    items: ["Pembuatan group komunikasi", "Kick Off Meeting", "Timeline project"],
  },
  {
    name: "BRAINSTORMING",
    items: ["Diskusi konsep kreatif", "Penentuan tema desain", "Konsep buku tahunan"],
  },
  {
    name: "FOTO, VIDEO & EVENT",
    items: ["Sesi foto profesional", "Sesi video shooting", "Dokumentasi event"],
  },
  {
    name: "EDITING & DESIGN",
    items: ["Editing foto/video", "Penyusunan design layout", "Quality control"],
  },
  {
    name: "REVISI & FINALISASI",
    items: ["Review layout", "Proses revisi", "Final approval"],
  },
  {
    name: "PRODUKSI CETAK",
    items: ["Cetak kualitas premium", "Finishing berkualitas", "Packaging aman"],
  },
  {
    name: "PENGIRIMAN & GARANSI",
    items: ["Pengiriman tepat waktu", "Garansi 10 hari", "After-sales support"],
  },
];

export function Process() {
  return (
    <section className="section-padding bg-card/30">
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
            Alur Kerja Kami
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Workflow
              <br />
              <span className="text-gradient-accent">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Workflow kami jelas dan transparan. Semua progress bisa dipantau
              sekolah secara real time.
            </p>
          </div>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              {/* Step Number */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-background border-2 border-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-background transition-colors">
                <span className="font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Card */}
              <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_40px_-15px_hsl(18_90%_55%_/_0.2)]">
                <h3 className="font-display text-base font-bold text-accent mb-4 leading-tight">
                  {step.name}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent/60 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://wa.me/628888477774"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all hover:shadow-[0_0_40px_-10px_hsl(40_30%_95%_/_0.5)]"
          >
            <span>Mulai Diskusi Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
