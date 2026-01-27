import { motion } from "framer-motion";
import { useState } from "react";
import { Search, ExternalLink, MapPin } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface YearbookProject {
  id: string;
  schoolName: string;
  year: number;
  thumbnail: string;
  ebookUrl: string;
  location?: string;
}

// Data sekolah - sesuaikan dengan data NANO yang sebenarnya
const yearbookProjects: YearbookProject[] = [
  {
    id: "1",
    schoolName: "SMAN 1 Rambipuji",
    year: 2026,
    thumbnail: "src/assets/ebook/10.-SMAN-1-RAMBIPUJI-scaled.jpg",
    ebookUrl: "#",
    location: "Jember, Jawa Timur",
  },
  {
    id: "2",
    schoolName: "SMP Al-Furqon Jember",
    year: 2026,
    thumbnail: "/src/assets/ebook/10.-SMP-AL-FURQON-JEMBER.jpg",
    ebookUrl: "#",
    location: "Jember, Jawa Timur",
  },
  {
    id: "3",
    schoolName: "SMAN 1 Bululawang",
    year: 2026,
    thumbnail: "/src/assets/ebook/19.-SMAN-1-BULULAWANG.jpg",
    ebookUrl: "#",
    location: "Malang, Jawa Timur",
  },
  {
    id: "4",
    schoolName: "SMK Telkom Sidoarjo",
    year: 2026,
    thumbnail: "/src/assets/ebook/21.-SMK-TELKOM-SIDOARJO.jpg",
    ebookUrl: "#",
    location: "Sidoarjo, Jawa Timur",
  },
  {
    id: "5",
    schoolName: "SMA MTA Surakarta",
    year: 2026,
    thumbnail: "/src/assets/ebook/SMAMIO-2-scaled.jpg",
    ebookUrl: "#",
    location: "Surakarta, Jawa Tengah",
  },
  {
    id: "6",
    schoolName: "Pocket Book Mockup",
    year: 2026,
    thumbnail: "/src/assets/ebook/06_Pocket_Book_Mockup-scaled.jpg",
    ebookUrl: "#",
    location: "Indonesia",
  },
];

export function DigitalYearbook() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  // Get unique years
  const years = Array.from(new Set(yearbookProjects.map((p) => p.year))).sort(
    (a, b) => b - a,
  );

  // Filter projects
  const filteredProjects = yearbookProjects.filter((project) => {
    const matchesSearch =
      project.schoolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === "all" || project.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-padding md:pt-40">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
                Portfolio Kami
              </p>
              <h1 className="heading-lg mb-6">Digital Yearbook</h1>
              <p className="body-lg max-w-3xl mx-auto mb-12">
                Jelajahi koleksi buku tahunan digital dari berbagai sekolah yang
                telah mempercayai NANO untuk mengabadikan kenangan mereka.
              </p>

              {/* Search & Filter Bar */}
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Cari nama sekolah..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-card/50 backdrop-blur-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
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
                  className="px-4 py-3 rounded-xl bg-card/50 backdrop-blur-xl border border-border text-foreground focus:outline-none focus:border-accent transition-colors cursor-pointer"
                >
                  <option value="all">Semua Tahun</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid - Clean Minimalist Style */}
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length === 0 ? (
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.a
                    key={project.id}
                    href={project.ebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group block"
                  >
                    {/* Book Cover Card */}
                    <div className="relative">
                      {/* Book Cover Image */}
                      <div
                        className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] group-hover:-translate-y-2"
                        style={{
                          boxShadow:
                            "0 10px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                        }}
                      >
                        <img
                          src={project.thumbnail}
                          alt={project.schoolName}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Subtle Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* View Button - Appears on Hover */}
                        <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                            <span>Lihat Ebook</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Year Badge */}
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-bold text-foreground">
                          {project.year}
                        </div>
                      </div>
                    </div>

                    {/* School Info - Below Card */}
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                        {project.schoolName}
                      </h3>
                      {project.location && (
                        <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </p>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-12 text-center rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-4">
                Ingin Sekolah Anda Tampil di Sini?
              </h2>
              <p className="body-lg mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan 231+ sekolah yang telah mempercayai NANO
                untuk mengabadikan kenangan angkatan mereka.
              </p>
              <button
                onClick={() =>
                  window.open("https://wa.me/628888477774", "_blank")
                }
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                Hubungi Kami
                <ExternalLink className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
