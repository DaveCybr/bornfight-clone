import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Homepage", href: "#" },
  { name: "Careers", href: "#careers" },
  { name: "Blog", href: "#blog" },
];

const ventures = [
  { name: "SWEN", href: "#" },
  { name: "Tabu", href: "#" },
  { name: "Elevien", href: "#" },
  { name: "Determ", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            bornfight
          </motion.a>

          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button
                variant="outline"
                className="hidden md:flex border-foreground/20 bg-transparent hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Start with us
              </Button>
            </motion.div>

            <motion.button
              onClick={() => setIsOpen(true)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            <div className="h-full flex flex-col px-6 md:px-12 py-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold tracking-tight">bornfight</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-center gap-12 md:gap-24">
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-4xl md:text-6xl font-bold hover:text-accent transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="space-y-4">
                  <motion.p
                    className="text-sm text-muted-foreground uppercase tracking-widest mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Venture Portfolio
                  </motion.p>
                  {ventures.map((venture, index) => (
                    <motion.a
                      key={venture.name}
                      href={venture.href}
                      className="block text-xl md:text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                    >
                      {venture.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
                  Start with us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
