import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 tracking-wider text-sm">ABOUT NEONX</span>
          </div>
          <h2 
            className="text-4xl md:text-6xl mb-6"
            style={{
              background: "linear-gradient(to right, #06b6d4, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Who We Are
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A cutting-edge software development company specializing in custom solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NjM1NjIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl text-cyan-400">What We Do</h3>
              <p className="text-gray-300 leading-relaxed">
                We develop requirement-based custom software solutions tailored to meet the unique needs
                of businesses, startups, and students. From concept to deployment, we bring your digital
                vision to life.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl text-purple-400">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses and students with modern, scalable technology solutions that drive
                growth and innovation. We focus on customer satisfaction and delivering projects on time.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl text-pink-400">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the leading software development partner for businesses and academic institutions,
                known for our innovative approach and commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
              <div className="text-center">
                <div className="text-3xl text-cyan-400 mb-2">100+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-purple-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-pink-400 mb-2">98%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}