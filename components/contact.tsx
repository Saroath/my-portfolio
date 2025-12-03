export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:saroathjahan8@gmail.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/saroathjahan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Saroath"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
