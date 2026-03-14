import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projects = [
  {
    id: "Environment design in Unity",
    title: "Environment design in Unity",
    description: "Work in Progress...",
    content: "...",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080&auto=format&fit=crop", 
    tags: ["Unity", "Environment Design", "3D Art", "Game Development","Shader"],
    link: "",
    github: "",
    date: "...",
    role: "Environment Designer",
    gallery: [

    ]
  },

    {
    id: "AimRPG - Game Design and Development",
    title: "AimRPG - Game Design and Development",
    description: "Work in Progress...",
    content: "...",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080&auto=format&fit=crop", 
    tags: ["Unity", "2D Art", "Game Development"],
    link: "",
    github: "",
    date: "...",
    role: "Game Designer",
    gallery: [

    ]
  },

  {
    id: "Maya Modelling - Coffee Machine",
    title: "Maya Modelling - Coffee Machine",
    description: "A detailed 3D model of a coffee machine created for my university '3D Design' module. Modeled entirely in Autodesk Maya and custom-textured using high-quality materials from Poly Haven.",
    content: "For this university module, I chose to model a Tescoma espresso machine. I utilized AI to generate clear front and side views to use as image planes for accurate proportions. The modeling process started with blocking out the base shapes from bottom to top. A major challenge was the drip grate; I modeled a generated grid pattern and used Boolean difference operations to cut out the holes. Maintaining clean topology for subdivision surfaces required careful manual corrections using the Multi Cut Tool to keep the hard surface edges sharp. Finally, I handled the texturing using Arnold's aiStandard Surface-shader for the chrome and plastic materials, and applied a marble texture to the cups to achieve a high-quality look.",
    image: "/projects/final_scene.jpg",
    tags: ["Autodesk Maya", "3D Modeling", "Arnold", "Texturing", "3 Point Lighting"],
    link: "",
    github: "",
    date: "February 2026",
    role: "3D Artist",
    gallery: [
      "/projects/final_scene.jpg",
      "/projects/Screenshot_3.png",
      "/projects/Screenshot_2.png",
    ]
  },

  {
    id: "Scratch Game - Egg Cooker",
    title: "Scratch Game - Egg Cooker",
    description: "...",
    content: "...",
    image: "/EggCooker/Egg_Cooker.png",
    tags: ["Sketch", "Game Design", "UI/UX", "Drawing"],
    link: "https://scratch.mit.edu/projects/1209316655/",
    github: "",
    date: "August 2025",
    role: "Programmer & Game Designer",
    gallery: [] 
  },

  {
    id: "TeamTry (TryReact) - Banner and profile picture design",
    title: "TeamTry (TryReact) - Banner and profile picture design",
    description: "...",
    content: "...",
    image: "/TeamTry-Project/TeamTry-Banner.png",
    tags: ["Sketch", "Game Design", "UI/UX", "Drawing"],
    link: "https://www.youtube.com/@TryReact",
    github: "",
    date: "August 2025",
    role: "Programmer & Game Designer",
    gallery: [
      "/TeamTry-Project/TeamTry-Banner.png",
      "/TeamTry-Project/TeamTry.png",
    ] 
  },

    {
    id: "Valorant Contest Design Winner 2021",
    title: "Valorant Contest Design Winner 2021",
    description: "...",
    content: "...",
    image: "/Valorant Contest/0314.gif",
    tags: ["Sketch", "Game Design", "UI/UX", "Drawing"],
    link: "https://x.com/VALORANTde/status/1405844376929062913?s=20",
    github: "",
    date: "August 2025",
    role: "Programmer & Game Designer",
    gallery: [] 
  },

];

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] bg-[#222225] text-white">
        <h2 className="text-2xl font-bold font-['Montserrat']">Project not found</h2>
        <Link to="/" className="mt-4 text-[#5367df] hover:underline font-['Montserrat']">Back to Home</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pb-20 pt-10 bg-[#222225] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white mb-8 transition-colors font-['Montserrat']">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg mb-12 border border-[#ADB9FF]/20">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-4xl tracking-tight sm:text-5xl font-['MADE_Soulmaze','Arial_Black',sans-serif] uppercase">{project.title}</h1>
              
              <div className="prose prose-lg prose-invert max-w-none text-slate-300 font-['Montserrat']">
                <p className="font-bold text-white">{project.description}</p>
                
                {/* 👇 Added a subtle line divider! */}
                {project.content && (
                  <>
                    <div className="my-8 h-px w-full bg-[#ADB9FF]/20" />
                    <p>{project.content}</p>
                  </>
                )}
              </div>

              {/* 👇 DYNAMIC GALLERY SECTION */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-12 space-y-4">
                  <h3 className="text-2xl font-bold font-['Montserrat'] text-white mb-6">Gallery</h3>
                  
                  {/* 2 IMAGE LAYOUT: 1 column mobile, 2 columns desktop */}
                  {project.gallery.length === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.gallery.map((img, idx) => (
                        <div key={idx} className="relative aspect-video overflow-hidden rounded-xl border border-[#ADB9FF]/20">
                          <ImageWithFallback src={img} alt={`${project.title} gallery ${idx + 1}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 3 IMAGE LAYOUT: 1 large on top, 2 small on bottom for desktop (stacked on mobile) */}
                  {project.gallery.length === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.gallery.map((img, idx) => (
                        <div 
                          key={idx} 
                          // The first image spans both columns on desktop!
                          className={`relative aspect-video overflow-hidden rounded-xl border border-[#ADB9FF]/20 ${idx === 0 ? 'md:col-span-2' : ''}`}
                        >
                          <ImageWithFallback src={img} alt={`${project.title} gallery ${idx + 1}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Fallback for any other number of images (4, 5, etc) */}
                  {project.gallery.length !== 2 && project.gallery.length !== 3 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.gallery.map((img, idx) => (
                        <div key={idx} className="relative aspect-video overflow-hidden rounded-xl border border-[#ADB9FF]/20">
                          <ImageWithFallback src={img} alt={`${project.title} gallery ${idx + 1}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {/* 👆 END OF GALLERY SECTION */}

            </div>

            {/* Right Sidebar (Project Info, Technologies, Links) */}
            <div className="space-y-8">
              <div className="rounded-xl border border-[#ADB9FF]/20 bg-[#171614] p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 font-['Montserrat'] text-white">Project Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-5 w-5 text-[#5367df]" />
                    <span className="text-slate-300 font-['Montserrat']">{project.date || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <User className="h-5 w-5 text-[#5367df]" />
                    <span className="text-slate-300 font-['Montserrat']">{project.role || "Creator"}</span>
                  </div>
                </div>
                
                <div className="my-6 h-px bg-[#ADB9FF]/20" />
                
                <h3 className="text-lg font-semibold mb-4 font-['Montserrat'] text-white">Technologies & Techniques</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-[#222225] border border-[#ADB9FF]/20 px-2.5 py-0.5 text-xs font-medium text-slate-300 font-['Montserrat']">
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.link || project.github) && (
                  <>
                    <div className="my-6 h-px bg-[#ADB9FF]/20" />
                    <div className="space-y-3">
                      {project.link && project.link !== "" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex w-full items-center justify-center rounded-md bg-[#5367df] px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-[#4353b5] transition-colors font-['Montserrat']"
                        >
                          View Live <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      )}
                      
                      {project.github && project.github !== "" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex w-full items-center justify-center rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#2a2a2e] transition-colors font-['Montserrat']"
                        >
                          View Code <Github className="ml-2 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}