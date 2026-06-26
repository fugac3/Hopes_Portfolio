"use client"

import { useEffect, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`
      max-w-3xl mx-auto
      transition-all duration-1000 transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
    >
      <h2 className="text-4xl font-bold mb-8 text-balance">
        About Me
      </h2>

      <div className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:glow-primary transition-all duration-300">
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground">
            Hi, I'm a UCT BCom Information Systems graduate with a strong foundation in software engineering, 
            data analysis, and systems thinking. I'm passionate about using technology to solve real-world 
            problems by building practical, reliable, and user-focused solutions.
          </p>

          <p className="text-foreground/80">
            Through my studies at the University of Cape Town, I developed a broad understanding of 
            how technology supports businesses, from systems analysis and design to software 
            development, databases, data analysis, and user experience. That foundation sparked my 
            interest in software engineering and gave me an appreciation for designing solutions that 
            are both technically sound and aligned with user and business needs.
          </p>

          <p className="text-foreground/80">
            Wanting to build on that interest, I attended CodeSpace to deepen my web development skills, 
            where I worked with HTML, CSS, JavaScript, React, and TypeScript. I later continued my 
            software engineering journey at WeThinkCode_, where I expanded into backend development with 
            Java and Python while working with databases, APIs, and larger software systems.
          </p>

          <p className="text-foreground/80">
            Alongside software engineering, I've developed a strong foundation in data analysis through 
            working with SQL, Python, Pandas, Tableau, Excel, and ETL processes to clean, analyse, and 
            visualise data. I enjoy uncovering patterns in data and turning them into meaningful 
            insights that support better decision-making.
          </p>

          <p className="text-foreground/80">
            Through my studies at the University of Cape Town, CodeSpace, and WeThinkCode_, I've gained 
            experience building full-stack applications, client-server systems, APIs, databases, 
            dashboards, and collaborative software projects using agile practices. These experiences 
            have strengthened not only my technical skills but also my ability to analyse problems, 
            learn quickly, and work effectively with others.
          </p>

          <p className="text-foreground/80">
            I'm excited by opportunities to continue learning across frontend, backend, and data while 
            contributing to teams where curiosity, collaboration, and meaningful impact are valued.
          </p>
        </div>

        {/* Fun Facts */}
        <div className="mt-8 pt-8 border-t border-border">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Things I love</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { emoji: "🎮☕", text: "Cozy games" },
              { emoji: "🎨", text: "Designing" },
              { emoji: "👗", text: "Thrifting" },
              { emoji: "🎞️", text: "Period dramas" },
            ].map((fact, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-muted rounded-2xl hover:bg-secondary/30 transition-colors duration-300"
              >
                <span className="text-2xl">{fact.emoji}</span>
                <span className="text-foreground/80">{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
