import { motion } from "framer-motion";
import { useState } from "react";

interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  location: string;
}

// Data logo sekolah - update dengan logo real
const clientLogos: ClientLogo[] = [
  {
    id: "1",
    name: "MAN Bondowoso 1",
    logo: "/src/assets/logos/manbologo1.png",
    location: "Bondowoso",
  },
  {
    id: "2",
    name: "MAN Jember (Manjesal)",
    logo: "/src/assets/logos/manjesalogo1.png",
    location: "Jember",
  },
  {
    id: "3",
    name: "SMAN Sapen Satu",
    logo: "/src/assets/logos/skensapaslogo1.png",
    location: "Yogyakarta",
  },
  {
    id: "4",
    name: "SMA Darul A'mal",
    logo: "/src/assets/logos/smadalogo1.png",
    location: "Jakarta",
  },
  {
    id: "5",
    name: "SMA Data (Darul Ta'lim)",
    logo: "/src/assets/logos/smadatalogo1.png",
    location: "Jember",
  },
  {
    id: "6",
    name: "SMA Kendal Mulia 1",
    logo: "/src/assets/logos/smakendalmjlogo1.png",
    location: "Kendal",
  },
  {
    id: "7",
    name: "SMA Kencana Bogor",
    logo: "/src/assets/logos/smakensabologo.png",
    location: "Bogor",
  },
  {
    id: "8",
    name: "SMA Muhammadiyah 1 Genteng",
    logo: "/src/assets/logos/smamuhagentenglogo1.png",
    location: "Banyuwangi",
  },
  {
    id: "9",
    name: "SMAN Jaluko 1",
    logo: "/src/assets/logos/smanjalogo1.png",
    location: "Jambi",
  },
  {
    id: "10",
    name: "SMA Pgri Tulum 1",
    logo: "/src/assets/logos/smapgrilumlgo1.png",
    location: "Jawa Timur",
  },
  {
    id: "11",
    name: "SMA Talogo 1",
    logo: "/src/assets/logos/smatalogo1.png",
    location: "Jawa Timur",
  },
  {
    id: "12",
    name: "SMK Patra Buwislogo 1",
    logo: "/src/assets/logos/smkpatbwslogo1.png",
    location: "Jakarta",
  },
];

export function ClientLogosGrid() {
  const [showAll, setShowAll] = useState(false);

  // Show only 12 initially, or all if showAll is true
  const displayedLogos = showAll ? clientLogos : clientLogos.slice(0, 12);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Dipercaya Oleh
          </p>
          <h2 className="heading-lg mb-4">231+ Sekolah Mempercayai NANO</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Dari berbagai kota di Indonesia, sekolah-sekolah terkemuka telah
            mempercayakan kenangan mereka kepada kami.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {displayedLogos.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="glass-card p-6 h-[200px] flex flex-col items-center justify-center hover-glow transition-all duration-300">
                {/* Logo Container */}
                <div className=" mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      // Fallback to text if image fails
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove(
                        "hidden",
                      );
                    }}
                  />
                  {/* Fallback text */}
                  <div className="hidden text-center">
                    <p className="text-xs font-bold text-foreground/50 leading-tight">
                      {client.name}
                    </p>
                  </div>
                </div>

                {/* School Name - 3 Lines with Smaller Text */}
                <p className="text-xs font-medium text-center line-clamp-3 group-hover:text-accent transition-colors leading-snug px-2">
                  {client.name}
                </p>
                <p className="text-[10px] text-muted-foreground mt-1">
                  {client.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {clientLogos.length > 12 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card/50 backdrop-blur-xl border border-foreground/10 text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
            >
              {showAll ? (
                <>
                  Lihat Lebih Sedikit
                  <svg
                    className="w-5 h-5 transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  Lihat Semua ({clientLogos.length} Sekolah)
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* View Portfolio Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/digital-yearbook"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Lihat Portfolio Digital Yearbook
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
