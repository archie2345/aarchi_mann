"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const subtitleY = useTransform(scrollYProgress, [0, 0.5], [0, -40])
  const linksY = useTransform(scrollYProgress, [0, 0.5], [0, -60])

  const headingWords = ["Hey,", "I'm", "Aarchi"]
  const subWords = [
    "a",
    "computing",
    "student",
    ",",
    "software",
    "developer",
    "&",
    "cybersecurity",
    "enthusiast",
  ]

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 pt-32 lg:px-10"
    >
      {/* Floating grid lines decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-0 h-full w-px bg-border/40"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <motion.div
          className="absolute left-2/4 top-0 h-full w-px bg-border/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <motion.div
          className="absolute left-3/4 top-0 h-full w-px bg-border/40"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Tag line */}
        <motion.p
          className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Software Developer / Sydney
        </motion.p>

        {/* Main heading with word-by-word reveal */}
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="origin-bottom-left"
        >
          <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            <span className="flex flex-wrap items-baseline gap-x-5">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block"
                  style={{ perspective: "600px" }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            style={{ y: subtitleY }}
            className="mt-4 font-serif text-2xl leading-relaxed tracking-tight text-muted-foreground sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <span className="flex flex-wrap gap-x-3">
              {subWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i + headingWords.length}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.p>
        </motion.div>

        {/* Links with slide in */}
        <motion.div
          style={{ y: linksY }}
          className="mt-12 flex items-center gap-8"
        >
          {[
            {
              label: "Email",
              href: "mailto:aarchi.mann@sydney.edu.au",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/aarchi-mann-609921237",
              external: true,
            },
            {
              label: "GitHub",
              href: "https://github.com/archie2345/aarchi_mann",
              external: true,
            },
          ].map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.15, duration: 0.6 }}
              className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                {"->"}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
