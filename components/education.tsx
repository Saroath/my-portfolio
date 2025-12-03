export default function Education() {
  const education = [
    {
      degree: "B.Sc. (Hons) in Computer Science",
      institution: "Informatics Institute of Technology, Colombo",
      affiliation: "Affiliated with University of Westminster",
      period: "Sep 2023 – May 2027",
      current: true,
    },
    {
      degree: "G.C.E. Advanced Level",
      institution: "T/Zahira College, Trincomalee",
      period: "Jul 2019 – Dec 2020",
      current: false,
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Education</h2>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="flex gap-6 md:gap-8">
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full mt-1.5 ${edu.current ? "bg-primary" : "bg-muted"}`} />
                {idx < education.length - 1 && <div className="w-0.5 h-24 bg-border mt-2" />}
              </div>

              <div className="pb-6 flex-1">
                <div className="bg-muted p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    {edu.current && (
                      <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                  {edu.affiliation && <p className="text-sm text-muted-foreground mb-2">{edu.affiliation}</p>}
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
