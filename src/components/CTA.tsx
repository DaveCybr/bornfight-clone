import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="section-padding hero-gradient-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground italic text-lg mb-6">
          Ready to create something amazing?
        </p>

        <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          Let's Build
          <br />
          <span className="text-gradient-accent">Something Great</span>
        </h2>

        <p className="body-lg mb-12 max-w-2xl mx-auto">
          Kami selalu siap membantu sekolah Anda mengabadikan momen berharga.
          Mari diskusikan bagaimana kami bisa mewujudkan visi Anda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/628888477774"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all hover:shadow-[0_0_50px_-10px_hsl(40_30%_95%_/_0.6)]"
          >
            <span>Start with us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/digital-yearbook"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border text-foreground font-medium hover:bg-card transition-all"
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
