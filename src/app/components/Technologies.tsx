import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Django", "Flask", "Java", "Spring Boot"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "Android", "iOS", "Kotlin", "Swift"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis", "Cassandra"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "AI & ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Computer Vision", "NLP"],
    gradient: "from-emerald-500 to-cyan-500",
  },
];

export function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 2px, transparent 2px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 tracking-wider text-sm">OUR TECH STACK</span>
          </div>
          <h2
            className="text-4xl md:text-6xl mb-6"
            style={{
              background: "linear-gradient(to right, #06b6d4, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Technologies We Use
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging the latest and most powerful tools to build exceptional software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              <div className="relative h-full p-8 bg-black/60 backdrop-blur-sm border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-500">
                {/* Category Header */}
                <div className="mb-6">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${tech.gradient} mb-2`}>
                    <h3 className="text-white tracking-wider">{tech.category}</h3>
                  </div>
                  <div className={`h-1 w-full bg-gradient-to-r ${tech.gradient} opacity-50`} />
                </div>

                {/* Technology Items */}
                <div className="space-y-3">
                  {tech.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${tech.gradient} group-hover/item:shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-shadow`} />
                      <span className="text-gray-300 group-hover/item:text-cyan-400 transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Corner Accents */}
                <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            And many more cutting-edge technologies tailored to your project needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
