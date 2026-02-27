"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Defensive System Review",
    description:
      "Comprehensive security audit of a web application VM using pen testing tools to identify vulnerabilities and recommend fixes.",
    tags: ["Security", "Pen Testing", "Linux"],
    year: "2025",
    color: "bg-[#e8e0d6]",
  },
  {
    title: "Android Security Analysis",
    description:
      "Reverse engineering on eight Android APKs to capture security flags, analyzing application binaries for vulnerabilities.",
    tags: ["Android", "Reverse Engineering", "Security"],
    year: "2025",
    color: "bg-[#ddd8d0]",
  },
  {
    title: "Sustainable Mobile App",
    description:
      "Cross-platform React Native application aligned with UN Sustainable Development Goals, focused on real-world impact.",
    tags: ["React Native", "Cross-Platform", "Mobile"],
    year: "2025",
    color: "bg-[#e2ddd5]",
  },
  {
    title: "Image Annotation Deployment",
    description:
      "Full-stack application integrating a serverless architecture for backend tasks using AWS services.",
    tags: ["AWS", "Serverless", "Cloud"],
    year: "2025",
    color: "bg-[#d8d3cb]",
  },
  {
    title: "3D Printer Support Generators",
    description:
      "Capstone project with Asiga to optimize support placement for STL and SLC files in 3D printing workflows.",
    tags: ["Python", "Vedo", "3D Printing"],
    year: "2024",
    color: "bg-[#e5dfd7]",
  },
]

const moreProjects = [
  {
    title: "Secure Chat Room",
    description: "End-to-end encrypted chat room deployed on Vercel using Firebase for real-time communication.",
    tags: ["Encryption", "Firebase", "Vercel"],
    year: "2024",
  },
  {
    title: "Pac-Man Game",
    description: "Pac-Man game in Java applying software design patterns including Factory, Strategy, and Observer.",
    tags: ["Java", "Design Patterns"],
    year: "2024",
  },
  {
    title: "Multi-Type Linked List",
    description: "Linked list supporting multiple data types with functionalities for creation, modification, and nesting.",
    tags: ["C", "Data Structures"],
    year: "2024",
  },
  {
    title: "File Sharing Website",
    description: "File-sharing website integrating SQLite for persistent storage and user management.",
    tags: ["SQLite", "Web Dev"],
    year: "2023",
  },
  {
    title: "Chat Forum Moderator",
    description: "Python program to validate user entries and censor inappropriate phrases using pattern matching.",
    tags: ["Python", "NLP"],
    year: "2023",
  },
  {
    title: "14x14 Chess Program",
    description: "Extended chess game using Java and Processing for graphics, managed with Gradle build system.",
    tags: ["Java", "Processing"],
    year: "2023",
  },
  {
    title: "Robot Maze Navigation",
    description: "Robot programmed with sensors to autonomously navigate through a complex maze environment.",
    tags: ["Arduino", "Robotics"],
    year: "2022",
  },
]

export function ProjectCards() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="work" className="px-6 pb-24 pt-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] lg:p-10",
                project.color,
                i === 0 && "md:col-span-2 md:min-h-[380px]"
              )}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <div className="mt-auto pt-12">
                <h3 className="font-serif text-2xl tracking-tight text-foreground lg:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showMore && (
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {moreProjects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col justify-between rounded-2xl bg-secondary p-8 transition-all duration-500 hover:scale-[1.02] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <div className="mt-auto pt-12">
                  <h3 className="font-serif text-2xl tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="group/btn inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-[13px] text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground"
          >
            {showMore ? "Show less" : "View more noteable projects"}
            <ChevronDown
              size={14}
              className={cn(
                "transition-transform duration-300",
                showMore && "rotate-180"
              )}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
