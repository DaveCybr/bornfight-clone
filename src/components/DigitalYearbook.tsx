import { motion } from "framer-motion";
import { useState } from "react";
import { Search, ExternalLink, MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useYearbooks } from "@/hooks/useYearbooks";

export function DigitalYearbook() {
  const { yearbooks, loading } = useYearbooks();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  // Get unique years
  const years = Array.from(new Set(yearbooks.map((p) => p.year))).sort(
    (a, b) => b - a,
  );

  // Filter projects
  const filteredProjects = yearbooks.filter((project) => {
    const matchesSearch =
      project.school_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === "all" || project.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  // Get first 3 yearbooks for hero floating images
  const heroImages = yearbooks.slice(0, 5);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section - Agntix Style */}
        <section className="relative min-h-screen hero-gradient-bg flex items-center justify-center">
          {/* Floating Images */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {heroImages.map((project, index) => {
              const positions = [
                { top: "15%", left: "8%", rotate: -12, scale: 0.9 },
                { top: "10%", right: "10%", rotate: 8, scale: 0.85 },
                { bottom: "25%", left: "5%", rotate: 6, scale: 0.75 },
                { bottom: "15%", right: "8%", rotate: -8, scale: 0.8 },
                { top: "45%", right: "3%", rotate: 15, scale: 0.7 },
              ];
              const pos = positions[index];

              return (
                <motion.div
                  key={project.id}
                  className="absolute w-32 md:w-48 lg:w-56"
                  style={{
                    top: pos.top,
                    bottom: pos.bottom,
                    left: pos.left,
                    right: pos.right,
                  }}
                  initial={{ opacity: 0, y: 50, rotate: pos.rotate }}
                  animate={{ opacity: 1, y: 0, rotate: pos.rotate }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + index * 0.15,
                    ease: "easeOut"
                  }}
                >
                  <div 
                    className="bg-card p-2 shadow-2xl"
                    style={{
                      transform: `scale(${pos.scale})`,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    <img
                      src={project.thumbnail_url}
                      alt={project.school_name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4 py-32 md:py-40">
            {/* Tagline */}
            <motion.p
              className="text-muted-foreground italic text-lg md:text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Kenangan yang tak terlupakan,
              <br />
              <span className="text-foreground">terabadikan selamanya</span>
            </motion.p>

            {/* Main Title */}
            <motion.h1
              className="font-display heading-xl text-foreground mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Digital<br />Yearbook
            </motion.h1>

            {/* Stats & CTA */}
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Stats */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {heroImages.slice(0, 3).map((project, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                    >
                      <img
                        src={project.thumbnail_url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-medium">
                    +
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">231+</p>
                  <p className="text-xs text-muted-foreground">Sekolah & Kampus</p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all"
              >
                <span>Explore Yearbooks</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Marquee Text */}
        <section className="py-8 overflow-hidden border-y border-border/30 bg-card/30">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-3xl md:text-5xl font-display font-bold text-muted-foreground/20">
                Yearbook • Memories • Graduation • Stories • Alumni •
              </span>
            ))}
          </motion.div>
        </section>

        {/* Filter Section */}
        <section className="py-16 px-5" id="portfolio">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari nama sekolah..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>

              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) =>
                  setSelectedYear(
                    e.target.value === "all"
                      ? "all"
                      : parseInt(e.target.value),
                  )
                }
                className="px-6 py-4 rounded-full bg-card border border-border text-foreground focus:outline-none focus:border-accent transition-colors cursor-pointer"
              >
                <option value="all">Semua Tahun</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid - Agntix Style */}
        <section className="px-5 pb-24">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                <p className="text-muted-foreground text-lg mt-4">Memuat data...</p>
              </motion.div>
            ) : filteredProjects.length === 0 ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-muted-foreground text-lg">
                  Tidak ada yearbook yang ditemukan
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.a
                    key={project.id}
                    href={project.ebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group block"
                  >
                    {/* Card Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_60px_-15px_hsl(18_90%_55%_/_0.3)]">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={project.thumbnail_url}
                          alt={project.school_name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                        
                        {/* Tags */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                            Yearbook
                          </span>
                          <span className="px-3 py-1 rounded-full bg-accent/80 backdrop-blur-sm text-xs font-medium text-accent-foreground">
                            {project.year}
                          </span>
                        </div>

                        {/* View Button */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                          <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                            <ExternalLink className="w-5 h-5 text-background" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
                          {project.school_name}
                        </h3>
                        {project.location && (
                          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding hero-gradient-bg">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground italic text-lg mb-4">
                Ready to create something amazing?
              </p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Ingin Sekolah Anda
                <br />
                <span className="text-gradient-accent">Tampil di Sini?</span>
              </h2>
              <p className="body-lg mb-10 max-w-2xl mx-auto">
                Bergabunglah dengan 231+ sekolah yang telah mempercayai NANO
                untuk mengabadikan kenangan angkatan mereka.
              </p>
              <button
                onClick={() =>
                  window.open("https://wa.me/628888477774", "_blank")
                }
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all hover:shadow-[0_0_40px_-10px_hsl(40_30%_95%_/_0.5)]"
              >
                <span>Hubungi Kami</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
