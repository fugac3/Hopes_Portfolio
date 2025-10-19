"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type HeroSectionProps = {
  onViewProjects: () => void;
}

export function HeroSection({ onViewProjects }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`
      min-h-[70vh] flex flex-col items-center justify-center text-center
      transition-all duration-1000 transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
    >
      {/* Profile Image */}
      <div className="mb-8 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img src="/linkedin_hope.jpg" alt="Hope Kerengera" className="object-cover w-full h-full scale-100 transform group-hover:scale-150 transition-transform duration-500"
 />
        </div>
      </div>

      {/* Name & Title */}
<h1 className="text-6xl font-bold mb-4 text-balance">
  <span className="bg-gradient-to-r from-primary via-[#aacde8] to-[#93c9b7] bg-clip-text text-transparent">
    Hope Kerengera
  </span>
</h1>

      <p className="text-2xl text-muted-foreground mb-8 font-bold">Software Developer</p>

      {/* Tagline */}
      <p className="text-lg text-foreground/80 max-w-2xl mb-12 leading-relaxed">
        “Bridging creativity and logic in software development”
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <button 
          onClick={onViewProjects}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:glow-primary transition-all duration-300 hover:scale-105"
        >
          View Projects
        </button>
        
        {/* Contact Button with Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-8 py-3 bg-muted text-foreground rounded-full font-medium hover:bg-secondary hover:glow-secondary transition-all duration-300 hover:scale-105">
              Get in Touch
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl mb-4">Let's Connect!</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6">
              <a
                href="mailto:k.hope.ing@gmail.com"
                className="flex items-center gap-3 p-4 bg-card hover:bg-muted rounded-lg transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium">Email</span>
                  <span className="text-sm text-muted-foreground">k.hope.ing@gmail.com</span>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/hope-pk-25-000in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card hover:bg-muted rounded-lg transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium">LinkedIn</span>
                  <span className="text-sm text-muted-foreground">Connect with me</span>
                </div>
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
    </div>
  )
}
