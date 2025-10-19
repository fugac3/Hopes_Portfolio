// ============================================================================
// SKILLS SECTION -
// ============================================================================

"use client"

import { useEffect, useState } from "react"

const technicalSkills = [
  "Systems Analysis",
  "UML Modeling (As-Is & To-Be)",
  "System Design & Development",
  "UX (User Experience) and UI (User Interface) Design",
  "Project Management",
  "Problem-Solving",
  "Team Collaboration",
  "Data Engineering and Data Analysis",
]

const toolsAndTechnologies = {
  "Web Development": ["HTML5 and CSS3", "JavaScript", "React", "TypeScript"],
  "Programming Languages": ["Python", "Java", "C#", "Dart"],
  "Data & Database": ["SQL", "Tableau"],
  "Development Tools": ["Git", "Microsoft 365", "Google Suite", "Figma", "Wix"],
}

// COMPONENT
export function SkillsSection() {
  // STATE - For animations
  const [isVisible, setIsVisible] = useState(false)
  // Controls fade-in animation for cards

  // EFFECTS - Trigger animations when component appears
  useEffect(() => {
    setIsVisible(true)
  }, [])
  // When component appears, set isVisible to true
  // triggers fade-in animations for all cards

  // RENDER

  return (
    <div
      className={`
      transition-all duration-1000 transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
    >
      <h2 className="text-4xl font-bold mb-8 text-balance">
        Skills & Expertise
      </h2>

      {/* TECHNICAL SKILLS CARD - Core competencies */}

      <div className="bg-card rounded-3xl p-8 shadow-lg border border-border mb-8 hover:glow-secondary transition-all duration-300">
        {/* CSS
          bg-card: card background color
          rounded-3xl: large rounded corners
          p-8: padding 32px all sides
          shadow-lg: large drop shadow
          border border-border: subtle border
          mb-8: margin-bottom 32px (space before next section)
          hover:glow-secondary: glows with secondary color on hover
          transition-all duration-300: smooth transitions
        */}

        <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {technicalSkills.map((skill, index) => (
            // Loop through each skill in the technicalSkills array

            <div
              key={skill}

              className="group relative bg-muted/50 rounded-xl p-4 border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg"

              style={{
                animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 50}ms forwards` : "none",
                opacity: 0,
              }}
              // Custom animation that fades in and slides up
              // Each card animates 50ms after the previous one (cascading effect)
              // opacity: 0: start invisible (animation makes it visible)
            >
              <div className="flex items-center gap-3">

                <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />

                <span className="text-foreground font-medium text-sm leading-relaxed">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================== */}
      {/* TOOLS & TECHNOLOGIES CARD - Organized by category */}
      {/* ================================================================== */}

      <div className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:glow-accent transition-all duration-300">
        {/* hover:glow-accent: glows with accent color on hover */}

        <h3 className="text-2xl font-semibold mb-6 text-foreground">Tools & Technologies</h3>

        <div className="space-y-6">
          {/* space-y-6: 24px vertical space between each category */}

          {Object.entries(toolsAndTechnologies).map(([category, skills], categoryIndex) => (

            <div
              key={category}
              // key={category}: React needs unique key for each category

              style={{
                animation: isVisible
                  ? `fadeInUp 0.5s ease-out ${(technicalSkills.length + categoryIndex) * 50}ms forwards`
                  : "none",
                opacity: 0,
              }}
              // Animation starts after all technical skills have animated
              // (technicalSkills.length + categoryIndex) ensures categories animate after skills
            >
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">{category}</h4>

              <div className="flex flex-wrap gap-2">

                {skills.map((skill) => (
                  // Loop through each skill in this category

                  <div
                    key={skill}
                    // key={skill}: React needs unique key

                    className="px-4 py-2 bg-muted rounded-full text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:glow-primary transition-all duration-300 hover:scale-105 cursor-pointer border border-border/30"
                  >
                    {skill}
                    {/* {skill} displays "HTML5 and CSS3", "JavaScript", etc. */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM ANIMATION - fadeInUp keyframes */}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}