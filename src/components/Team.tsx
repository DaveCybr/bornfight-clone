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
    id: "tomislav",
    name: "Tomislav Grubišić",
    role: "CEO & Co-founder",
    image: ceoImage,
    isCofounder: true,
    story:
      "In 2009, I co-founded Degordian, a social media agency that grew to become one of the largest regional digital agencies. That journey taught me everything about building companies from scratch — the highs, the lows, and everything in between.",
    quote:
      "Building ventures isn't just about the money. It's about finding the right people, giving them the tools they need, and watching them create something amazing.",
    linkedIn: "#",
    twitter: "#",
    bio: "Serial entrepreneur with 15+ years of experience in building and scaling digital companies. Led multiple successful exits and currently oversees Bornfight's venture portfolio.",
  },
  {
    id: "ana",
    name: "Ana Kovačević",
    role: "CTO & Co-founder",
    image: ctoImage,
    isCofounder: true,
    story:
      "My path to co-founding Bornfight started in the trenches of software development. I spent years building products for startups and enterprises alike, learning what makes technology truly transformative.",
    quote:
      "Great technology is invisible — it just works. Our job is to build the infrastructure that lets founders focus on their vision, not their tech stack.",
    linkedIn: "#",
    twitter: "#",
    bio: "Technology leader with deep expertise in scalable architectures and product development. Passionate about mentoring technical founders and building world-class engineering teams.",
  },
  {
    id: "marko",
    name: "Marko Horvat",
    role: "COO",
    image: cooImage,
    isCofounder: false,
    linkedIn: "#",
    bio: "Operations expert who ensures our ventures run smoothly from day one. Specializes in building efficient processes and helping startups scale their operations sustainably.",
  },
  {
    id: "petra",
    name: "Petra Novak",
    role: "Head of Ventures",
    image: headVenturesImage,
    isCofounder: false,
    linkedIn: "#",
    bio: "Investment professional with a keen eye for promising founders and innovative ideas. Leads our deal flow, due diligence, and portfolio support efforts.",
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
          <h2 className="heading-lg mb-6">Meet the people behind Bornfight</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Entrepreneurs, operators, and builders who've been in your shoes. 
            We bring decades of combined experience to every venture we support.
          </p>
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
