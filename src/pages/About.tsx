import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/Team";
import { Timeline } from "@/components/Timeline";
import { Target, Eye, Heart, Sparkles, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Kami mencintai apa yang kami kerjakan. Setiap proyek adalah kesempatan untuk menciptakan kenangan yang tak terlupakan.",
  },
  {
    icon: Sparkles,
    title: "Kreativitas",
    description: "Inovasi adalah DNA kami. Kami selalu mencari cara baru untuk menghadirkan visual yang memukau dan berbeda.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description: "Kami percaya hasil terbaik lahir dari kerja sama. Tim kami bekerja erat dengan setiap klien untuk mewujudkan visi mereka.",
  },
  {
    icon: Award,
    title: "Kualitas",
    description: "Tidak ada kompromi untuk kualitas. Setiap detail diperhatikan untuk menghasilkan karya yang premium.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center section-padding pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(220_90%_55%/0.1)_0%,transparent_50%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tentang Kami
          </motion.p>
          
          <motion.h1
            className="heading-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Lebih Dari Sekadar
            <br />
            <span className="text-gradient-accent">Creative Studio</span>
          </motion.h1>
          
          <motion.p
            className="body-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kami adalah tim kreatif yang berdedikasi untuk mengabadikan momen-momen 
            berharga dalam perjalanan pendidikan. Dari Jember untuk Indonesia.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
                Cerita Kami
              </p>
              <h2 className="heading-lg mb-6">
                Bermula dari <span className="text-gradient-accent">Passion</span>
              </h2>
              <div className="space-y-4 body-md">
                <p>
                  nanoidn lahir dari sebuah keyakinan sederhana: setiap momen di masa 
                  sekolah layak untuk diabadikan dengan cara yang istimewa. Berawal dari 
                  Jember, kami memulai perjalanan ini dengan satu kamera dan mimpi besar.
                </p>
                <p>
                  Kami melihat bahwa buku tahunan dan dokumentasi sekolah seringkali 
                  dibuat seadanya. Padahal, momen-momen tersebut adalah kenangan yang 
                  akan dikenang seumur hidup. Dari situlah kami bertekad untuk mengubah 
                  standar industri.
                </p>
                <p>
                  Kini, nanoidn telah berkembang menjadi creative studio yang melayani 
                  berbagai sekolah di Indonesia dengan layanan premium mulai dari 
                  yearbook eksklusif, film angkatan sinematik, hingga teknologi 
                  Augmented Reality.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</p>
                    <p className="text-sm text-muted-foreground">Sekolah Partner</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-accent mb-2">10K+</p>
                    <p className="text-sm text-muted-foreground">Siswa Terlayani</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-accent mb-2">5+</p>
                    <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</p>
                    <p className="text-sm text-muted-foreground">Kepuasan Klien</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi</h3>
              <p className="body-md">
                Menjadi creative studio terdepan di Indonesia dalam menghadirkan 
                dokumentasi pendidikan yang inovatif, bermakna, dan berkesan untuk 
                setiap generasi.
              </p>
            </motion.div>
            
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi</h3>
              <ul className="body-md space-y-2">
                <li>• Menghadirkan layanan dokumentasi berkualitas premium</li>
                <li>• Berinovasi dengan teknologi terkini seperti AR & Digital Platform</li>
                <li>• Membangun hubungan jangka panjang dengan setiap klien</li>
                <li>• Mengembangkan talenta kreatif lokal</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
              Nilai-Nilai Kami
            </p>
            <h2 className="heading-lg">
              Apa yang <span className="text-gradient-accent">Menggerakkan</span> Kami
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-card rounded-2xl p-6 text-center hover-glow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Team */}
      <Team />

      <Footer />
    </div>
  );
}
