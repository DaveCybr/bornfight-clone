import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(220_90%_55%/0.18)_0%,transparent_60%)]" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-lg mb-6">
          Ready to build
          <br />
          <span className="text-gradient-accent">something great?</span>
        </h2>
        <p className="body-lg mb-10 max-w-2xl mx-auto">
          We're always looking for ambitious founders with great ideas. Let's
          discuss how we can help you build the next big thing.
        </p>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg group">
          Start with us
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </section>
  );
}
