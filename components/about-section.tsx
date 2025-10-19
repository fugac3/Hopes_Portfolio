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
            Hi, I'm a BCom Information Systems graduate with a strong foundation in 
            software engineering and a deep interest in building thoughtful, practical, 
            user-centered digital solutions. I’m driven by using technology to solve 
            real-world problems, and I’ve explored that through full-stack web development,
            systems analysis, and backend programming.
          </p>

          <p className="text-foreground/80">
            I first got into web development through HTML, CSS, and JavaScript, and I 
            loved how it let me combine creativity with problem-solving. Later, learning 
            Python and Java opened up a deeper interest in backend programming and system 
            logic, giving me new ways to tackle challenges beyond the interface.
          </p>

          <p className="text-foreground/80">
            Through my time at the University of Cape Town, CodeSpace and WeThinkCode_, 
            I’ve developed a broad technical skill set and an adaptable mindset, giving 
            me the flexibility to work on everything from designing user experiences to 
            building the logic behind them. I’m excited by opportunities that challenge 
            me to keep learning, whether in frontend, backend, or somewhere in between, 
            especially in collaborative environments where ideas and curiosity are valued.
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
