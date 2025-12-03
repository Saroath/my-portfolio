"use client"

import { motion } from "framer-motion"
import TypingAnimation from "./typing-animation"

export default function Hero() {
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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center space-y-6" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="space-y-2" variants={itemVariants}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Welcome to my portfolio</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground text-balance">Saroath Jahan</h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TypingAnimation
              words={["Undergraduate", "Full-Stack Developer", "Java Enthusiast", "Web Designer", "Problem Solver"]}
              typingSpeed={80}
              deletingSpeed={40}
              delayBetweenWords={2000}
            />
          </motion.div>

          <motion.p
            className="text-base text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed"
            variants={itemVariants}
          >Building modern, fast, and user-friendly web experiences with clean code and thoughtful design.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4" variants={itemVariants}>
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/Saroath"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              View GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
