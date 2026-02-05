 import { motion } from "framer-motion";
 import { Wrench, Clock, Mail } from "lucide-react";
 import { useMaintenanceMode } from "@/hooks/useMaintenanceMode";
 
 const Maintenance = () => {
   const { maintenanceMessage } = useMaintenanceMode();
   return (
     <div className="min-h-screen bg-background hero-gradient-bg flex items-center justify-center px-6">
       <div className="max-w-2xl text-center">
         {/* Animated Icon */}
         <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 border border-accent/30"
         >
           <Wrench className="w-12 h-12 text-accent animate-pulse" />
         </motion.div>
 
         {/* Main Heading */}
         <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="font-display text-5xl md:text-7xl font-bold mb-6"
         >
           Sedang dalam{" "}
           <span className="text-gradient-accent">Pemeliharaan</span>
         </motion.h1>
 
         {/* Subtitle */}
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="text-lg md:text-xl text-muted-foreground mb-12 max-w-lg mx-auto"
         >
           {maintenanceMessage || "Kami sedang melakukan peningkatan untuk memberikan pengalaman yang lebih baik. Silakan kembali dalam beberapa saat."}
         </motion.p>
 
         {/* Info Cards */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
         >
           <div className="glass-card rounded-2xl p-6 text-left hover-glow">
             <Clock className="w-8 h-8 text-accent mb-3" />
             <h3 className="font-semibold text-foreground mb-1">Estimasi Waktu</h3>
             <p className="text-sm text-muted-foreground">
               Kami akan segera kembali online
             </p>
           </div>
           <div className="glass-card rounded-2xl p-6 text-left hover-glow">
             <Mail className="w-8 h-8 text-accent mb-3" />
             <h3 className="font-semibold text-foreground mb-1">Hubungi Kami</h3>
             <p className="text-sm text-muted-foreground">
               admin@nano.co.id
             </p>
           </div>
         </motion.div>
 
         {/* CTA */}
         <motion.a
           href="https://wa.me/628888477774"
           target="_blank"
           rel="noopener noreferrer"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all hover-glow"
         >
           Hubungi via WhatsApp
         </motion.a>
 
         {/* Brand */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.7 }}
           className="mt-16"
         >
           <span className="font-display text-2xl font-bold">
             nano<span className="text-accent">idn</span>
           </span>
         </motion.div>
       </div>
     </div>
   );
 };
 
 export default Maintenance;