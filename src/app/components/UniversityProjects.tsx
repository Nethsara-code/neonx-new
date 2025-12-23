import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, FileText, Code, CheckCircle, Sparkles } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Full Development",
    description: "Complete software implementation with clean, documented code",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Comprehensive reports, user manuals, and technical documentation",
  },
  {
    icon: CheckCircle,
    title: "Testing & QA",
    description: "Thorough testing with detailed test cases and results",
  },
  {
    icon: GraduationCap,
    title: "Presentation Support",
    description: "Professional presentations and demo preparation",
  },
];

const techStacks = [
  "Python", "Java", "C++", "JavaScript", "React", "Node.js",
  "Django", "Flask", "Spring Boot", "Android", "iOS", "Flutter",
  "MySQL", "MongoDB", "PostgreSQL", "Firebase", "Machine Learning", "AI"
];

export function UniversityProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-violet-500/30 bg-violet-500/5 backdrop-blur-sm mb-4">
            <GraduationCap className="w-4 h-4 text-violet-400" />
            <span className="text-violet-400 tracking-wider text-sm">FOR STUDENTS</span>
          </div>
          <h2
            className="text-4xl md:text-6xl mb-6"
            style={{
              background: "linear-gradient(to right, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            University Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert assistance for final year projects, academic software development, and research implementations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-violet-400 mb-8">What We Provide</h3>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group flex gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-transparent border-l-2 border-violet-500/50 hover:border-pink-500/50 hover:bg-violet-500/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/30 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-shadow">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-xl text-white mb-2 group-hover:text-violet-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Project Types & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 backdrop-blur-sm">
              <Sparkles className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-2xl text-white mb-4">Perfect For</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Final Year Engineering Projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Computer Science Capstone Projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Research Implementation Projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Dissertation Software Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Academic Prototypes & MVPs</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-pink-500/30 backdrop-blur-sm">
              <h3 className="text-2xl text-white mb-4">Why Students Choose Us</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We understand the academic requirements and deadlines. Our team has successfully
                delivered 100+ university projects with excellent grades and feedback.
              </p>
              <p className="text-pink-400">
                ✨ Plagiarism-free code • Complete documentation • Timely delivery
              </p>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl text-violet-400 mb-8">Technologies We Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStacks.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="px-4 py-2 bg-black border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
