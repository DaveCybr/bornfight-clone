import { motion } from "framer-motion";
import { Users, Settings, Wallet, FileText } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Dedicated team",
    description:
      "When you know the problem but don't have the resources or expertise, Bornfight gets you a team of experts at your disposal. Instead of hiring new people, we provide an already experienced task force.",
    icon: Users,
  },
  {
    number: "02",
    title: "Operational Support",
    description:
      "Daily operations create brand new challenges every day — our management knows how to prepare you for what's ahead. This saves you time and valuable resources.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Financing & Investments",
    description:
      "Funding is always hard to come by, especially in early stages. Bornfight invests in your idea and connects you with the right people and finds capital to launch your startup to the next level.",
    icon: Wallet,
  },
  {
    number: "04",
    title: "Administrative Support",
    description:
      "Starting small means you have to take multiple roles at once. Bornfight takes care of the administration while you focus on your company and work on ideas that help turn your ideas into successful products.",
    icon: FileText,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Features() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            What we offer
          </p>
          <h2 className="heading-lg">More than just financing</h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.number}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-8 lg:p-10 hover-glow cursor-default"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="number-badge">{feature.number}</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-accent" />
                    <h3 className="heading-md">{feature.title}</h3>
                  </div>
                  <p className="body-md">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
