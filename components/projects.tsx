"use client"

import { motion, easeOut } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "UCraft.lk - Custom Product Marketplace",
      period: "Oct 2024 – Mar 2025",
      type: "Group Project",
      tech: ["Flutter", "Node.js", "Firebase", "Docker", "Kubernetes"],
      description: "A full-stack marketplace serving 100+ users with real-time functionality.",
      highlights: [
        "Integrated real-time database & authentication, boosting user activity by 30%",
        "Deployed scalable containers with Docker & Kubernetes achieving 99% uptime",
        "Full-stack marketplace with real-time features",
      ],
      github: "https://github.com/Nadun-Kaveesha/UCRAFT.LK",
      liveLink: null,
    },
    {
      title: "Animated Website",
      period: "Nov 2025",
      type: "Personal Project",
      tech: ["React.js", "Tailwind CSS", "GSAP"],
      description: "Fully responsive animated website with scroll-based and clip-path animations.",
      highlights: [
        "Built fully responsive design with React.js and Tailwind CSS",
        "Added 3D hover effects and video transitions to enhance UI/UX",
        "Designed reusable components and optimized front-end performance",
      ],
      github: "https://github.com/Saroath/animated-website",
      liveLink: "https://animated-website-saroath.vercel.app",
    },
    {
      title: "E-commerce Website",
      period: "June 2025",
      type: "Personal Project",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      description: "Complete e-commerce platform with product listing and shopping cart.",
      highlights: [
        "Built product listing, authentication, and shopping cart workflows",
        "Optimized SQL queries and implemented caching strategies",
        "Enhanced UI/UX improving customer engagement by 50%",
      ],
      github: "https://github.com/Saroath/HTML-CSS-JS-Project/tree/master",
      liveLink: null,
    },
    {
      title: "Bookstore RESTful API",
      period: "Feb 2025 – Mar 2025",
      type: "Academic Project",
      tech: ["Java", "JAX-RS", "JSON", "Postman"],
      description: "REST API with full CRUD operations managing 500+ book records.",
      highlights: [
        "Developed comprehensive REST API with efficient resource handling",
        "Validated API functionality and compliance via Postman testing",
        "Managed 500+ book records with JSON requests/responses",
      ],
      github: "https://github.com/Saroath/Java_Projects",
      liveLink: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-foreground"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                borderColor: "hsl(var(--primary))",
              }}
              className="bg-background p-6 rounded-lg border border-border transition-colors space-y-4"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                <div className="flex justify-between items-start gap-2 text-sm">
                  <p className="text-muted-foreground">{project.period}</p>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded whitespace-nowrap">
                    {project.type}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 pt-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-primary/20 text-primary rounded-lg font-semibold hover:bg-primary/30 transition-colors text-center text-sm"
                  >
                    GitHub
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center text-sm"
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
