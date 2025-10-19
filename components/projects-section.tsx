"use client"

import { useEffect, useState } from "react"

const projects = [
  {
    title: "PodPal - Podcast App",
    description:
      "PodPal makes discovering and managing podcasts simple. Built with React, it lets users browse shows, explore genres, and organize favourites,all in one smooth, responsive app with a built-in demo audio experience.",
    image: "/podpal.png",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    link: "https://podpal.netlify.app/",
    github: "https://github.com/fugac3/HOPKER554_FTO2401_B_Hope-Kerengera_DJS11.git",
    colour: "primary",
  },
  {
    title: "Kanban Task Management App",
    description: "Agile Board is a responsive Kanban task management app built with vanilla JavaScript. Users can create, edit, and move tasks between columns, toggle light/dark themes, and enjoy full data persistence using local storage.",
    image: "/task_management_app.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://agiletaskapp.netlify.app/",
    github: "https://github.com/fugac3/HOPKER554_FTO2401_A2_Hope-Kerengera_JSL11",
    colour: "secondary",
  },
  {
    title: "Add To Cart App",
    description: "Simple Add To Cart App is a simple shopping cart app that lets users add and remove products in real time. Built with HTML, CSS, and JavaScript, it uses Firebase for storing and syncing added items across sessions.",
    image: "/add_to_cart.png",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://add-to-cart-hope-k.netlify.app/",
    github: "",
    colour: "accent",
  },
  {
    title: "Frugal Finds - Clothing App",
    description: "Frugal Finds, built with Wix, is a simple and stylish platform for buying and selling affordable second-hand clothing. Users can upload quality pre-loved pieces or discover unique thrifted finds, making sustainable fashion accessible to everyone.",
    image: "/frugal_finds.png",
    tags: ["Wix"],
    link: "https://hope2002hp.wixsite.com/frugal-finds",
    github: "",
    colour: "primary",
  },
  {
    title: "Home Goods Store",
    description: "A home goods store app built on Wix, where users can easily browse and shop everything from decor and furniture to appliances and kitchenware.",
    image: "/home_goods_store.png",
    tags: ["Wix"],
    link: "https://hope2002hp.wixsite.com/tutorial5-krnpat003",
    github: "",
    colour: "secondary",
  },
    {
    title: "Robot World",
    description: "Robot World is a collaborative Java team project where we built a client/server system to simulate a dynamic world of robots. The server manages the world, obstacles, and robot interactions, while clients launch and control robots through a custom messaging protocol. I gained hands-on experience with Java networking, concurrency, and data serialization while working on this project",
    image: "/robots.jpg",
    tags: ["Java", "JSON", "Socket Programming", "OOP"],
    link: "",
    github: "",
    colour: "secondary",
  }
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`
      transition-all duration-1000 transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
    >
      <h2 className="text-4xl font-bold mb-8 text-balance">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`
              group bg-card rounded-2xl overflow-hidden shadow-md border border-border
              transition-all duration-300 hover:scale-[1.01]
              cursor-pointer
            `}
            style={{
              animation: isVisible ? `slideIn 0.6s ease-out ${index * 150}ms forwards` : "none",
              opacity: 0,
            }}
          >
            {/* Project Image */}
            <div className="relative h-40 overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-muted text-foreground text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:gap-2 transition-all duration-300"
                >
                  View Project
                  <span>→</span>
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary font-medium text-sm transition-colors duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
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
