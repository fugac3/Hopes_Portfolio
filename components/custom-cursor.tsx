"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main cursor - yellow torch core, blended */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`
            rounded-full transition-all duration-200
            ${isHovering ? "w-16 h-16 opacity-60" : "w-8 h-8 opacity-80"}
          `}
          style={{
            background: "radial-gradient(circle, #fff5f7 0%, #ffd1dc 40%, #ffb6c1 80%, transparent 100%)",
            boxShadow: isHovering
              ? "0 6px 18px rgba(255,182,193,0.25)"
              : "0 4px 10px rgba(255,182,193,0.15)",
            filter: isHovering ? "blur(2px)" : "none",
            mixBlendMode: 'lighten',
          }}
        />
      </div>

      {/* Removed trailing glow - keep only subtle shadow on main cursor */}
    </>
  )
}
