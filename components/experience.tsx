export default function Experience() {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "Intelligent Software Solutions",
      period: "Sep 2025 – Dec 2025",
      description: "Working on multiple projects including ERP systems and healthcare platforms",
      projects: [
        {
          title: "Oulu ERP System",
          tech: ["Next.js", "TypeScript", "PostgreSQL"],
          details: [
            "Developed and enhanced multiple frontend components across multiple modules",
            "Identified critical issues such as incorrect auto-generated codes and data mappings",
            "Collaborated with QA team for test case documentation and system stability",
          ],
        },
        {
          title: "Arwia Healthcare Booking Platform",
          tech: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
          details: [
            "Developed a mobile-first booking platform for health & wellness services",
            "Implemented user booking flows, provider schedule management, and secure authentication",
            "Built secure, efficient API endpoints for core booking features",
          ],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Professional Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                <p className="text-lg text-primary font-semibold">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <div className="space-y-6">
                {exp.projects.map((project, pidx) => (
                  <div key={pidx} className="bg-muted/30 p-6 rounded-lg border border-border">
                    <h4 className="text-xl font-bold text-foreground mb-2">{project.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.details.map((detail, didx) => (
                        <li key={didx} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
