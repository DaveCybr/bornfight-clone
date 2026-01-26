import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Twitter, Quote } from "lucide-react";
import ceoImage from "@/assets/team/ceo.jpg";
import ctoImage from "@/assets/team/cto.jpg";
import cooImage from "@/assets/team/coo.jpg";
import headVenturesImage from "@/assets/team/head-ventures.jpg";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  isCofounder: boolean;
  story?: string;
  quote?: string;
  linkedIn?: string;
  twitter?: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "lynna",
    name: "Lynna Ayu M",
    role: "CEO and CO-Founder",
    image: "https://nanoyearbook.com/wp-content/uploads/2025/08/1-111111.png",
    isCofounder: true,
    story:
      "Memulai Nano Yearbook dengan visi menghadirkan dokumentasi sekolah yang tidak hanya menjadi koleksi, tapi juga pengalaman digital interaktif yang bisa dinikmati selamanya.",
    quote:
      "Setiap momen berharga layak diabadikan dengan cara yang istimewa. Kami ada untuk memastikan kenangan angkatan tidak hanya tersimpan, tapi terus hidup.",
    linkedIn: "#",
    twitter: "#",
    bio: "Pemimpin kreatif dengan pengalaman lebih dari 8 tahun di industri creative documentation. Membawa Nano Yearbook menjadi #1 Digital Yearbook di Indonesia dengan kepercayaan dari 231+ sekolah.",
  },
  {
    id: "rama",
    name: "Rama Hadyan F",
    role: "Marcom Manager",
    image: "https://nanoyearbook.com/wp-content/uploads/2025/08/2.png",
    isCofounder: false,
    linkedIn: "#",
    twitter: "#",
    bio: "Ahli marketing dan komunikasi yang memastikan brand Nano Yearbook sampai ke seluruh sekolah di Indonesia. Mengelola strategi komunikasi dan hubungan dengan mitra sekolah.",
  },
  // {
  //   id: "yusril",
  //   name: "Yusril Fahmi H",
  //   role: "Production Manager",
  //   image: "https://nanoyearbook.com/wp-content/uploads/2025/08/3.png",
  //   isCofounder: false,
  //   linkedIn: "#",
  //   twitter: "#",
  //   bio: "Mengelola seluruh proses produksi dari sesi foto, video, hingga pencetakan buku tahunan. Memastikan kualitas premium di setiap project dengan tim produksi profesional.",
  // },
  {
    id: "veny",
    name: "Veny Kurniawati",
    role: "Project Leader",
    image: "https://nanoyearbook.com/wp-content/uploads/2025/08/5.png",
    isCofounder: false,
    linkedIn: "#",
    bio: "Memimpin eksekusi project dari awal hingga akhir. Koordinasi dengan sekolah, tim kreatif, dan produksi untuk memastikan timeline dan hasil sesuai ekspektasi klien.",
  },
  {
    id: "iqbal",
    name: "Iqbal Amanta",
    role: "Creative Advisor",
    image: "https://nanoyearbook.com/wp-content/uploads/2025/08/4.png",
    isCofounder: false,
    linkedIn: "#",
    bio: "Penasihat kreatif yang membawa inovasi dan konsep fresh untuk setiap project. Memastikan setiap buku tahunan memiliki identitas unik dan berkesan.",
  },
  {
    id: "raras",
    name: "Raras Dwistian",
    role: "HR Dept.",
    image: "https://nanoyearbook.com/wp-content/uploads/2025/08/6.png",
    isCofounder: false,
    linkedIn: "#",
    bio: "Mengelola sumber daya manusia dan membangun tim yang solid. Memastikan setiap anggota tim berkembang dan berkontribusi maksimal untuk kesuksesan Nano Yearbook.",
  },
];

function TeamMemberCard({
  member,
  onClick,
}: {
  member: TeamMember;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl mb-5">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm text-accent">View profile →</span>
        </div>
        {member.isCofounder && (
          <div className="absolute top-4 right-4">
            <span className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-medium">
              Co-founder
            </span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
        {member.name}
      </h3>
      <p className="text-muted-foreground">{member.role}</p>
    </motion.div>
  );
}

function MemberModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative z-10 glass-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-secondary rounded-full transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="flex items-center gap-4">
              {member.linkedIn && (
                <a
                  href={member.linkedIn}
                  className="p-3 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  className="p-3 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {member.isCofounder && (
              <span className="text-accent text-sm uppercase tracking-widest mb-3">
                Co-founder Story
              </span>
            )}
            <h2 className="heading-md mb-2">{member.name}</h2>
            <p className="text-accent text-lg mb-6">{member.role}</p>

            <p className="body-md mb-6">{member.bio}</p>

            {member.story && (
              <div className="mb-6">
                <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-3">
                  My Journey
                </h4>
                <p className="body-md">{member.story}</p>
              </div>
            )}

            {member.quote && (
              <div className="glass-card rounded-xl p-6 mt-4">
                <Quote className="w-8 h-8 text-accent mb-3" />
                <p className="text-lg italic text-foreground/90">
                  "{member.quote}"
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const cofounders = teamMembers.filter((m) => m.isCofounder);
  const leadership = teamMembers.filter((m) => !m.isCofounder);

  return (
    <section className="section-padding" id="team">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Our Team
          </p>
          <h2 className="heading-lg mb-6">
            Meet The People Behind{" "}
            <span className="text-gradient-accent">nanoidn</span>
          </h2>
        </motion.div>

        {/* Co-founders Section */}
        <div className="mb-20">
          <motion.h3
            className="text-sm uppercase tracking-widest text-muted-foreground mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Co-founders
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
            {cofounders.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <motion.h3
            className="text-sm uppercase tracking-widest text-muted-foreground mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Leadership
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {leadership.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
