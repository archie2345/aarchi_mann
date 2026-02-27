const experiences = [
  {
    role: "Events Associate",
    org: "Google Developers Group, USyd",
    period: "Oct 2025 - Present",
    note: "Planning and executing Google-related events for the university community.",
  },
  {
    role: "Casual Academic",
    org: "University of Sydney",
    period: "Feb - Jul 2025",
    note: "Tutored INFO2222 (Usability & Security) for 45 students.",
  },
  {
    role: "Intern",
    org: "Ericsson, Noida",
    period: "Jan - Feb 2025",
    note: "Hands-on experience in telecommunications and networking.",
  },
]

const education = [
  {
    degree: "Bachelor of Advanced Computing",
    school: "University of Sydney",
    period: "2022 - Present",
    note: "Software Development Major / WAM 77",
  },
]

const certifications = [
  {
    title: "IBM AI Engineering Professional Certificate",
    issuer: "IBM / Coursera",
    period: "Feb 2026",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/68KLS35VJEI9",
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 lg:grid-cols-5">
          {/* Experience column */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Experience
            </p>

            <div className="mt-8 space-y-0">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="border-t border-border py-6 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-[13px] text-muted-foreground">
                        {exp.org}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {exp.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs column */}
          <div className="space-y-14 lg:col-span-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Education
              </p>
              <div className="mt-8 space-y-0">
                {education.map((ed, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-medium text-foreground">
                      {ed.degree}
                    </h3>
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      {ed.school}
                    </p>
                    <p className="text-xs text-muted-foreground">{ed.period}</p>
                    <p className="mt-2 text-[13px] text-muted-foreground">
                      {ed.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Certifications
              </p>
              <div className="mt-8 space-y-0">
                {certifications.map((cert, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-medium text-foreground">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline underline-offset-4"
                        >
                          {cert.title}
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h3>
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {cert.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
