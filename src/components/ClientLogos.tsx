import { motion } from "framer-motion";

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
    logo: "/src/assets/logos/smkpatbwislogo1.png",
    location: "Jakarta",
  },
];

export function ClientLogos() {
  // Duplicate array for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="section-padding overflow-hidden">
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

        {/* Infinite Marquee - Row 1 (Left to Right) */}
        <div className="relative mb-6">
          <div className="flex gap-12 items-center animate-marquee">
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 group"
              >
                {/* Logo Only - No Card, No Text */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-300 filter brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Marquee - Row 2 (Right to Left) */}
        <div className="relative mb-6">
          <div className="flex gap-12 items-center animate-marquee-reverse">
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (client, index) => (
                <div
                  key={`reverse-${client.id}-${index}`}
                  className="flex-shrink-0 group"
                >
                  {/* Logo Only */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto object-contain opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-300 filter brightness-0 invert"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Infinite Marquee - Row 3 (Left to Right) */}
        <div className="relative">
          <div className="flex gap-12 items-center animate-marquee">
            {duplicatedLogos.map((client, index) => (
              <div
                key={`third-${client.id}-${index}`}
                className="flex-shrink-0 group"
              >
                {/* Logo Only */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-300 filter brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="/digital-yearbook"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card/50 backdrop-blur-xl border border-foreground/10 text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Lihat Semua Portfolio
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

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }

        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
