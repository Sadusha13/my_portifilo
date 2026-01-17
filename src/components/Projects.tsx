import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hotel Management System",
    description: "A full-featured online Booking platform with User friendly Dashboard.",
    image: "Hotel.png",
    tags: ["Java", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Sadusha13/vista_veranda",
    demo: "http://localhost:8000/home.html",
  },
  
  {
    title: "Student Management System",
    description: "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
    image: "SMS.png",
    tags: ["HTML", "CSS", "TypeScript", "MongoDB"],
    github: "https://github.com/Sadusha13/PreSchool-web",
    demo: "http://127.0.0.1:8000/",
  },
  {
    title: "Smart Home IOT System",
    description: "IoT smart home system with real-time monitoring, automation, analytics, and dashboard visualization.",
    image:
      "IOT.jpg",
    tags: ["React", "Python", "Flask", "Chart.js"],
    github: "https://github.com/sadusha13",
    demo: "https://example.com",
  },
    {
    title: "Smart City Information Portal",
    description: " A Smart City Information Portal is a modern web-based front-end application that provides real-time city services information in one centralized dashboard.",
    image:
      "city.png",
    tags: ["React", "next.js", "Figma", "google-maps UI"],
    github: "https://github.com/Sadusha13/Smart-City-Information-Portal",
    demo: "http://localhost:3001/",
  }
  
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#020617] font-['Poppins']">
          Projects
        </h2>

        <p className="text-center text-[#64748B] mb-16 max-w-2xl mx-auto">
          A selection of recent work showcasing my skills in full-stack development and design
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#020617] mb-2 font-['Poppins']">
                  {project.title}
                </h3>

                <p className="text-sm text-[#64748B] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-[10px] border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                    onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>

                  <Button
                    size="sm"
                    className="flex-1 rounded-[10px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
                    onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
