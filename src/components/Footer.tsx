import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const footerLinks = [
  {
    title: "Layanan",
    links: ["Exclusive Yearbook", "Film Angkatan", "Drone Shoot", "Event Coverage"],
  },
  {
    title: "Platform",
    links: ["Digital Yearbook", "Augmented Reality", "Nano Hub Creative"],
  },
  {
    title: "Perusahaan",
    links: ["Tentang Kami", "Portfolio", "Tim Kami", "Hubungi Kami"],
  },
];

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/nanoidn" },
  { name: "TikTok", url: "https://tiktok.com/@nanoidn" },
  { name: "WhatsApp", url: "https://wa.me/628888477774" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Brand & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="font-display text-3xl md:text-4xl font-bold inline-block mb-6"
              >
                nano<span className="text-accent">idn</span>
              </a>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Abadikan momen terbaik dalam cerita visual. Lebih dari sekadar
                buku kenangan.
              </p>
              <a
                href="https://wa.me/628888477774"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
              >
                <span>Hubungi Kami</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.1 }}
                >
                  <h4 className="font-semibold mb-4 text-sm text-foreground">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} nanoidn. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Komp. Royal City Icon J25, Kaliwates, Kab. Jember
              </p>
            </div>
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
