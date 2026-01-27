import { motion } from "framer-motion";
import { useState } from "react";
import { Search, ExternalLink, Calendar, School } from "lucide-react";
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
    schoolName: "SMA Negeri 1 Jember",
    year: 2026,
    thumbnail:
      "https://nanoyearbook.com/wp-content/uploads/2025/08/9.-INDIVIDU-SESSION-com.jpg",
    ebookUrl: "#",
    location: "Jember, Jawa Timur",
  },
  {
    id: "2",
    schoolName: "SMA Negeri 5 Jember",
    year: 2026,
    thumbnail:
      "https://nanoyearbook.com/wp-content/uploads/2025/08/11.-OUTDOOR-PERSONAL-com.jpg",
    ebookUrl: "#",
    location: "Jember, Jawa Timur",
  },
  {
    id: "3",
    schoolName: "SMAN 2 Bondowoso",
    year: 2026,
    thumbnail: "https://nanoyearbook.com/wp-content/uploads/2025/08/5-com.jpg",
    ebookUrl: "#",
    location: "Bondowoso, Jawa Timur",
  },
  {
    id: "4",
    schoolName: "SMK Petra 4 Sidoarjo",
    year: 2025,
    thumbnail:
      "https://nanoyearbook.com/wp-content/uploads/2025/08/10.-OUTDOOR-SESSION-com.jpg",
    ebookUrl: "#",
    location: "Sidoarjo, Jawa Timur",
  },
  {
    id: "5",
    schoolName: "SMA Negeri 1 Bondowoso",
    year: 2025,
    thumbnail:
      "https://nanoyearbook.com/wp-content/uploads/2025/08/9.-INDIVIDU-SESSION-com.jpg",
    ebookUrl: "#",
    location: "Bondowoso, Jawa Timur",
  },
  {
    id: "6",
    schoolName: "SMA Negeri 3 Jember",
    year: 2025,
    thumbnail:
      "https://nanoyearbook.com/wp-content/uploads/2025/08/11.-OUTDOOR-PERSONAL-com.jpg",
    ebookUrl: "#",
    location: "Jember, Jawa Timur",
  },
  {
    id: "7",
    schoolName: "SMK Negeri 1 Jember",
    year: 2024,
    thumbnail: "https://nanoyearbook.com/wp-content/uploads/2025/08/5-com.jpg",
    ebookUrl: "#",
    location: "Jember, Jawa Timur",
  },
  {
    id: "8",
    schoolName: "SMA Muhammadiyah 3 Jember",
    year: 2024,
    thumbnail:
      "https://nanoyearbook.com/wp-content/uploads/2025/08/10.-OUTDOOR-SESSION-com.jpg",
    ebookUrl: "#",
    location: "Jember, Jawa Timur",
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
        <section className="section md:pt-40">
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
              <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Cari nama sekolah atau lokasi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-card/50 backdrop-blur-xl border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
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
                  className="px-3 py-3 rounded-xl bg-card/50 backdrop-blur-xl border border-foreground/10 text-foreground focus:outline-none focus:border-accent transition-colors cursor-pointer"
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

        {/* Projects Grid */}
        <section className="sectio pt-0">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length === 0 ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <School className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  Tidak ada yearbook yang ditemukan
                </p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group"
                  >
                    <a
                      href={project.ebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="glass-card overflow-hidden hover-glow transition-all duration-300">
                        {/* Thumbnail */}
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={project.thumbnail}
                            alt={project.schoolName}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                          {/* Year Badge */}
                          <div className="absolute top-4 right-4 glass-card px-3 py-1 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="text-sm font-bold">
                              {project.year}
                            </span>
                          </div>

                          {/* View Button - Appears on Hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="glass-card px-6 py-3 flex items-center gap-2">
                              <span className="font-medium">
                                Lihat Yearbook
                              </span>
                              <ExternalLink className="w-4 h-4 text-accent" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors line-clamp-2">
                            {project.schoolName}
                          </h3>
                          {project.location && (
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <School className="w-3.5 h-3.5" />
                              {project.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-12 text-center"
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
                untuk mengabadikan kenangan angkatan mereka dalam bentuk digital
                yearbook yang memukau.
              </p>
              <button
                onClick={() =>
                  window.open("https://wa.me/628888477774", "_blank")
                }
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                Hubungi Kami Sekarang
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
