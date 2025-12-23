import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MessageCircle, Send, Sparkles } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
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
            <span className="text-pink-400 tracking-wider text-sm">GET IN TOUCH</span>
          </div>
          <h2
            className="text-4xl md:text-6xl mb-6"
            style={{
              background: "linear-gradient(to right, #ec4899, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Build Something Neon
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your project? Get in touch and let's create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Have a question or want to work together? Feel free to reach out through any of
                these channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-transparent border-l-2 border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all duration-300">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Email</h4>
                  <a href="mailto:info@neonx.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    info@neonx.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Send us an email anytime</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-transparent border-l-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-purple-400 hover:text-purple-300 transition-colors">
                    +1 (234) 567-890
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri 9am-6pm</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-transparent border-l-2 border-pink-500/50 hover:border-pink-500 hover:bg-pink-500/5 transition-all duration-300">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow">
                  <MessageCircle className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">WhatsApp</h4>
                  <a href="https://wa.me/1234567890" className="text-pink-400 hover:text-pink-300 transition-colors">
                    +1 (234) 567-890
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Quick response guaranteed</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <h4 className="text-xl text-cyan-400 mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-black/50 border-2 border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-black/50 border-2 border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                />
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 bg-black/50 border-2 border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                />
              </div>

              <div className="relative group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-black/50 border-2 border-gray-800 text-white focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  <option value="" className="bg-black">Select a Service</option>
                  <option value="business-software" className="bg-black">Business Software</option>
                  <option value="website" className="bg-black">Website Development</option>
                  <option value="web-app" className="bg-black">Web Application</option>
                  <option value="mobile-app" className="bg-black">Mobile Application</option>
                  <option value="university" className="bg-black">University Project</option>
                  <option value="custom" className="bg-black">Custom Solution</option>
                </select>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  className="w-full px-6 py-4 bg-black/50 border-2 border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-wider">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}