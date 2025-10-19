"use client"

import { useState } from "react"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { BackgroundEffect } from "@/components/background-effect"

type Tab = "home" | "about" | "skills" | "projects"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("home")

  const tabs = [
    { id: "home" as Tab, label: "Home", icon: "/icons-home-48.png" },
    { id: "about" as Tab, label: "About", icon: "/icons-retro-tv-48.png" },
    { id: "skills" as Tab, label: "Skills", icon: "/icons-code-48.png" },
    { id: "projects" as Tab, label: "Projects", icon: "/icons-portfolio-48.png" },
  ]

  return (
    <>
      <CustomCursor />
      <BackgroundEffect />

      <div className="min-h-screen relative" style={{ backgroundColor: "#fff5f7" }}> {/* light pink background */}
        {/* Navigation */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border"
          style={{
            background: "color-mix(in srgb, var(--color-popover) 8%, transparent)",
            // fallback for browsers that don't support color-mix
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 py-3">
            <div className="relative flex items-center justify-center" style={{ minHeight: 56 }}>

              <div className="relative flex gap-6 items-center justify-center w-full max-w-2xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full transition-transform duration-150 ease-out px-5 py-2 text-sm md:text-base font-medium uppercase tracking-wide shadow-[0_6px_0_rgba(0,0,0,0.12)] flex items-center justify-center space-x-2 focus:outline-none"
                      ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-foreground"
                      }
                    `}
                    style={
                      activeTab === tab.id
                        ? { boxShadow: '0 6px 0 rgba(180,20,80,0.18)', transform: 'translateY(-2px)' }
                        : { boxShadow: '0 6px 0 rgba(0,0,0,0.08)' }
                    }
                  >
                    <img src={tab.icon} alt={`${tab.label} icon`} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                    <span className="leading-none">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            {activeTab === "home" && <HeroSection onViewProjects={() => setActiveTab("projects")} />}
            {activeTab === "about" && <AboutSection />}
            {activeTab === "skills" && <SkillsSection />}
            {activeTab === "projects" && <ProjectsSection />}
          </div>
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-background/80 border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>© 2025 Hope</p>
              <div className="flex gap-4">
                <a href="https://github.com/fugac3" className="hover:text-primary transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/hope-pk-25-000in/" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:k.hope.ing@gmail.com" className="hover:text-primary transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
