"use client"

import { motion } from "framer-motion"

export default function About() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/SAROATH-JAHAN-CV.pdf"
    link.download = "SAROATH-JAHAN-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const highlights = [
    { icon: "🎯", title: "Problem Solving", desc: "Analytical approach to complex technical challenges" },
    { icon: "✨", title: "Clean Code", desc: "Maintainable, well-structured, and documented code" },
    { icon: "🤝", title: "Collaboration", desc: "Effective communication in Agile team environments" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-foreground"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Highly motivated Computer Science undergraduate with hands-on experience in designing, developing, and
              testing software applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Skilled in Java, JavaScript, Python, React, Next.js, Node.js, and SQL, with a strong foundation in data
              structures, algorithms, and full-stack development principles.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced in building responsive UIs, developing secure APIs, working with databases, and collaborating
              in Agile environments. Passionate about writing clean, maintainable code and contributing to scalable,
              user-focused software solutions.
            </p>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
