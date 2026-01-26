import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    name: "TANDA TANGAN MOU",
    items: [
      "Penandatanganan MoU",
      "Kesepakatan resmi",
      "Dasar kerjasama",
      "Legal agreement",
    ],
  },
  {
    name: "GROUP & KICK OFF",
    items: [
      "Pembuatan group komunikasi",
      "Kick Off Meeting",
      "Koordinasi tim sekolah",
      "Menyamakan visi",
      "Timeline project",
    ],
  },
  {
    name: "BRAINSTORMING",
    items: [
      "Diskusi konsep kreatif",
      "Penentuan tema desain",
      "Kebutuhan khusus angkatan",
      "Konsep buku tahunan",
    ],
  },
  {
    name: "FOTO, VIDEO & EVENT",
    items: [
      "Sesi foto profesional",
      "Sesi video shooting",
      "Dokumentasi event sekolah",
      "Coverage kegiatan khusus",
    ],
  },
  {
    name: "EDITING & DESIGN",
    items: [
      "Editing foto/video",
      "Penyusunan design layout",
      "Sesuai konsep",
      "Quality control",
    ],
  },
  {
    name: "REVISI & FINALISASI",
    items: [
      "Review layout",
      "Proses revisi",
      "Approval sekolah",
      "Final approval",
    ],
  },
  {
    name: "PRODUKSI CETAK",
    items: [
      "Cetak kualitas premium",
      "Finishing berkualitas",
      "Quality assurance",
      "Packaging aman",
    ],
  },
  {
    name: "PENGIRIMAN & GARANSI",
    items: [
      "Pengiriman ke sekolah",
      "Tepat waktu",
      "Garansi 10 hari",
      "After-sales support",
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
            Alur Kerja Kami
          </p>
          <h2 className="heading-lg mb-6">Workflow Process</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Workflow kami jelas dan transparan. Semua progress bisa dipantau
            sekolah secara real time. Proses mudah, hasil maksimal.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for first row (steps 1-4) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mb-12">
            {processSteps.slice(0, 4).map((step, index) => (
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
                  <span className="text-accent font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-base font-bold text-accent mb-4 leading-tight">
                    {step.name}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
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

        <div className="relative">
          {/* Connection line for second row (steps 5-8) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {processSteps.slice(4, 8).map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                className="relative"
              >
                {/* Step indicator */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <span className="text-accent font-bold text-sm">
                    {String(index + 5).padStart(2, "0")}
                  </span>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-base font-bold text-accent mb-4 leading-tight">
                    {step.name}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
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
            Mulai Diskusi Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
