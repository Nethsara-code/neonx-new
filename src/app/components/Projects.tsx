import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Sparkles, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP System",
    category: "Business Software",
    description: "Complete business management system with inventory, sales, and analytics modules.",
    image: "https://images.unsplash.com/photo-1642957323739-5632d8a2ff3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNvZnR3YXJlJTIwdGVhbXxlbnwxfHx8fDE3NjY0NTYzMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "Modern online shopping platform with payment gateway integration and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjY0NDg1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Application",
    description: "Patient management app with appointment booking and telemedicine features.",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjY0MTYxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Real Estate Portal",
    category: "Website",
    description: "Property listing website with advanced search filters and virtual tours.",
    image: "https://images.unsplash.com/photo-1739184523594-564cb9b61126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbmVvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY2NDU2MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Laravel", "MySQL", "Google Maps"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Educational LMS",
    category: "Web Application",
    description: "Learning management system with video courses, quizzes, and progress tracking.",
    image: "https://images.unsplash.com/photo-1688377051459-aebb99b42bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbmVvbnxlbnwxfHx8fDE3NjY0NDc3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "Django", "Python", "AWS"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Food Delivery App",
    category: "Mobile Application",
    description: "Multi-vendor food ordering app with real-time tracking and payment integration.",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NjM1NjIzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Node.js", "Socket.io", "Stripe"],
    gradient: "from-emerald-500 to-cyan-500",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" ref={ref} className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 tracking-wider text-sm">OUR PORTFOLIO</span>
          </div>
          <h2
            className="text-4xl md:text-6xl mb-6"
            style={{
              background: "linear-gradient(to right, #06b6d4, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest work across various industries and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden bg-black border border-gray-800 hover:border-cyan-500/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-sm">
                  {project.category}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-gray-900 border border-gray-800 text-gray-400 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm tracking-wider">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                style={{
                  boxShadow: hoveredIndex === index ? "0 0 50px rgba(6, 182, 212, 0.3)" : "none",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}