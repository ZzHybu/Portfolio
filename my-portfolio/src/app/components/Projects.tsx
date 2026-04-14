import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
    /*{
    id: "AimRPG - Game Design and Development",
    title: "AimRPG - Skill-Based Aim-RPG",
    description: "A skill-based RPG developed in Unity (C#) that blends classic character progression with FPS aim-trainer mechanics in a turn-based combat system.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080&auto=format&fit=crop",
    tags: ["Unity", "C#", "Game Design", "Gameplay Programming", "RPG"],
    link: "",
    github: "",
  },*/

  {
    id: "Environment design in Unity",
    title: "Environment Design in Unity",
    description: "A work-in-progress beach environment in Unity, focused on mastering technical art and building custom water and grass materials using Shader Graph.",
    image: "/games/shader.png",
    tags: ["Unity", "Environment Design", "3D Art", "Game Development", "Shader Graph"],
    link: "",
    github: "",
  },

  {
    id: "OpenGL",
    title: "OpenGL",
    description: "A work-in-progress beach environment in Unity, focused on mastering technical art and building custom water and grass materials using Shader Graph.",
    image: "/games/shader.png",
    tags: ["Unity", "Environment Design", "3D Art", "Game Development", "Shader Graph"],
    link: "",
    github: "",
  },

  {
    id: "Maya Modelling - Coffee Machine",
    title: "Maya Modelling - Coffee Machine",
    description: "A detailed 3D model of a coffee machine created for my university '3D Design' module. Modeled entirely in Autodesk Maya and custom-textured using high-quality materials from Poly Haven.",
    image: "/projects/final_scene.jpg", 
    tags: ["Autodesk Maya", "3D Modeling", "Arnold", "Texturing", "3 Point Lighting"],
    link: "",
    github: "",
  },

  {
    id: "Scratch Game - Egg Cooker",
    title: "Egg Cooker - Scratch Showcase Demo",
    description: "A competitive, 2-player Scratch game inspired by Overcooked, developed as an inspiring showcase demo to motivate kids at a summer coding camp.",
    image: "/EggCooker/Egg_Cooker.png",
    tags: ["Scratch", "Game Design", "Visual Scripting", "Game Mechanics"],
    link: "https://scratch.mit.edu/projects/1209316655/",
    github: "",
  },

  {
    id: "TeamTry (TryReact) - Banner and profile picture design",
    title: "TeamTry (TryReact) Branding",
    description: "What began as a proactive passion project was officially adopted as the channel branding for 'TryReact', the reaction channel of major creator Trymacs (850k+ Subscribers).",
    image: "/TeamTry-Project/TeamTry-Banner.png",
    tags: ["Branding", "Social Media Design", "Digital Art", "Typography"],
    link: "https://www.youtube.com/@TryReact",
    github: ""
  },

  {
    id: "Valorant Contest Design Winner 2021",
    title: "VALORANT DACH: Creative Clash Winner",
    description: "The official winning entry for the VALORANT DACH 'Creative Clash' contest, featuring a custom Killjoy scene designed to celebrate the game's 1st Anniversary.",
    image: "/Valorant Contest/KJ-Wallpaper.png",
    tags: ["Digital Art", "Graphic Design"],
    link: "https://x.com/VALORANTde/status/1405844376929062913?s=20",
    github: ""
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#222225] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-['MADE_Soulmaze','Arial_Black',sans-serif] uppercase">Featured Projects</h2>
          <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed font-['Montserrat']">
            Here are some of the projects I've worked on recently.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#ADB9FF]/20 bg-[#171614] shadow-sm transition-all hover:shadow-md hover:border-[#5367df]/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold font-['Montserrat']">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2 font-['Montserrat']">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[#222225] border border-[#ADB9FF]/30 px-2.5 py-0.5 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* 👇 Added mt-auto to push the footer to the bottom, ensuring cards look even */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-[#5367df] hover:underline font-['Montserrat']"
                  >
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <div className="flex gap-4">
                    {/* 👇 Conditional rendering: Only render if project.github exists and isn't empty */}
                    {project.github && project.github !== "" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {/* 👇 Conditional rendering: Only render if project.link exists and isn't empty */}
                    {project.link && project.link !== "" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}