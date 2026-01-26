import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Ventures",
    links: ["SWEN", "Tabu", "Elevien", "Determ"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const socialLinks = ["LinkedIn", "Twitter", "Instagram"];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
            <div className="col-span-2 md:col-span-1">
              <motion.a
                href="#"
                className="text-2xl font-bold tracking-tight inline-block mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                nanoidn
              </motion.a>
              <p className="text-sm text-muted-foreground">
                Building ventures that make an impact.
              </p>
            </div>

            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h4 className="font-semibold mb-4 text-sm">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bornfight. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
