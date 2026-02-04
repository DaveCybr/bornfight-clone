import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Homepage", href: "/" },
  { name: "About", href: "/about" },
  { name: "Digital Yearbook", href: "/digital-yearbook" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <motion.a
            href="/"
            className="font-display text-2xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            nano<span className="text-accent">idn</span>
          </motion.a>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://wa.me/628888477774"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hubungi Kami
            </motion.a>

            <motion.button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 p-2 hover:bg-card rounded-lg transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-sm font-medium hidden sm:inline">Menu</span>
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-full flex flex-col px-6 md:px-12 py-6 max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold tracking-tight">
                  nano<span className="text-accent">idn</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium">Close</span>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="space-y-4 md:space-y-6 w-full">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group block font-display text-5xl md:text-7xl lg:text-8xl font-bold hover:text-accent transition-colors"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <span className="inline-flex items-center gap-4">
                        {link.name}
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                      </span>
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="https://wa.me/628888477774"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsOpen(false)}
                >
                  <span>Hubungi Kami</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Footer */}
              <motion.div
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="mb-1">
                  Komp. Royal City Icon J25 Kaliwates, Kab. Jember
                </p>
                <p>admin@nano.co.id • +62 8888 4 7777 4</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
