import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Globe, Smartphone, GraduationCap, Sparkles, Zap } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Custom Business Software",
    description: "Tailored enterprise solutions designed to streamline your business operations and boost productivity.",
    gradient: "from-cyan-500 to-blue-500",
    color: "cyan",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning, responsive websites built with modern frameworks that captivate your audience.",
    gradient: "from-purple-500 to-pink-500",
    color: "purple",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Powerful, scalable web applications with cutting-edge features and seamless user experiences.",
    gradient: "from-pink-500 to-rose-500",
    color: "pink",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native Android & iOS apps that deliver exceptional performance and user engagement.",
    gradient: "from-blue-500 to-cyan-500",
    color: "blue",
  },
  {
    icon: GraduationCap,
    title: "University Projects",
    description: "Academic software solutions for final year projects with full documentation and support.",
    gradient: "from-violet-500 to-purple-500",
    color: "violet",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Unique requirement-based software development tailored to your specific needs.",
    gradient: "from-emerald-500 to-cyan-500",
    color: "emerald",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 tracking-wider text-sm">OUR SERVICES</span>
          </div>
          <h2
            className="text-4xl md:text-6xl mb-6"
            style={{
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What We Offer
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive software development services powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Neon Glow Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
                
                {/* Card */}
                <div className="relative h-full p-8 bg-black/50 backdrop-blur-sm border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-500">
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} mb-6 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-shadow duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 transition-colors duration-500 pointer-events-none" />
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}