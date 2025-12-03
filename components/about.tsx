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
            Computer Science undergraduate and aspiring Software Engineer with strong skills in Java, Python, JavaScript, React.js, Node.js, and SQL.
             I have hands-on experience building clean, responsive, and user-focused applications, and I enjoy working across both frontend and backend development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
            I’m confident in designing scalable system architectures, integrating RESTful APIs, optimizing database queries, and applying software engineering principles such as OOP, MVC, version control, and Agile practices.
            I’m currently strengthening my full-stack development skills using modern frameworks and tools, and working on projects that challenge my problem-solving and debugging abilities.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond coding, I enjoy journaling, exploring tech ideas, learning new technologies, and improving my languages speaking skills. 
            I also love watching tech content, creating side projects, and continuously pushing myself to grow as a developer.
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
