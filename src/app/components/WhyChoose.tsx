import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Zap, Code, Clock, DollarSign, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Custom Solutions",
    description: "Every project is tailored to your specific requirements and business goals.",
  },
  {
    icon: Code,
    title: "Modern Technology",
    description: "We use the latest frameworks and tools to build cutting-edge applications.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates without compromising on quality or functionality.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects on schedule, every time.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled developers with years of experience across various technologies.",
  },
  {
    icon: Sparkles,
    title: "Student-Friendly",
    description: "Special support for university projects with documentation and presentations.",
  },
];

export function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]"
        animate={{
          x: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]"
        animate={{
          x: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-pink-500/30 bg-pink-500/5 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 tracking-wider text-sm">WHY CHOOSE US</span>
          </div>
          <h2
            className="text-4xl md:text-6xl mb-6"
            style={{
              background: "linear-gradient(to right, #ec4899, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose NEONX
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're committed to delivering excellence in every project we undertake
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-cyan-500/0 group-hover:from-pink-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                
                <div className="relative">
                  {/* Icon Container */}
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow duration-300">
                    <Icon className="w-6 h-6 text-pink-400" />
                  </div>

                  <h3 className="text-xl text-white mb-2 group-hover:text-pink-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500/0 group-hover:border-pink-500/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
