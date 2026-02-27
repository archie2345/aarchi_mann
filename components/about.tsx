export function About() {
  const skills = [
    "C", "C++", "Java", "Python", "SQL", "JavaScript", "HTML/CSS",
    "React", "Node.js", "React Native", "Next.js",
    "AWS", "Firebase", "Vercel", "Git", "Jenkins", "Arduino",
  ]

  return (
    <section id="about" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              About
            </p>
            <h2 className="mt-6 font-serif text-3xl leading-snug tracking-tight text-foreground sm:text-4xl">
              {"I'm"} a computing student at the University of Sydney with a
              passion for building secure, user-centric software.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              My work spans cybersecurity, AI engineering, and full-stack
              development. I enjoy the intersection of security and usability
              - building applications that are robust under the hood and
              intuitive on the surface.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Toolkit
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
