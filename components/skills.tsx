"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "PHP", "C#", "TypeScript"],
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "jQuery"],
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "NestJS", "REST APIs", "CRUD Operations"],
    },
    {
      title: "Databases",
      skills: ["SQL", "MySQL", "PostgreSQL", "Prisma ORM", "Firebase"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "Kubernetes", "Postman", "VSCode", "IntelliJ"],
    },
    {
      title: "Core Competencies",
      skills: ["Data Structures", "Algorithms", "OOP", "Full-Stack Development", "Problem Solving"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-foreground"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              whileHover={{
                scale: 1.02,
                borderColor: "hsl(var(--primary))",
              }}
              className="bg-background p-6 rounded-lg border border-border transition-colors"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
