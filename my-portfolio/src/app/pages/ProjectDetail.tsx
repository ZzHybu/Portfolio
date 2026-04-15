import { useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projects = [
  /*{
    id: "AimRPG - Game Design and Development",
    title: "AimRPG - Skill-Based Aim-RPG",
    
    description: "A skill-based RPG developed in Unity (C#) that blends classic character progression with FPS aim-trainer mechanics in a turn-based combat system.",
    
    content: "Developed in Unity (C#), 'AimRPG' features a unique combat system that combines classic character progression with the core mechanics of FPS aim trainers. Instead of relying on traditional menu commands, players must prove their reflexes and precision in disciplines like GridShot, Tracking, and FlickShots to defeat ghosts and dodge incoming attacks. The combat is heavily skill-driven: damage output is directly influenced by the player's aim performance, while a strategic type system makes certain aim styles more effective against specific ghost types (Shadow, Flame, Ecto). During dynamic defense phases, players must hit 'protection zone' targets; the damage they take scales based on how many targets they miss. On the technical side, I engineered a dynamic target spawn system with strict collision and boundary checks, implemented a modular battle manager for seamless phase transitions, and created a flexible damage formula that perfectly balances raw player skill with traditional RPG stats.",
    
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080&auto=format&fit=crop", 
    
    tags: ["Unity", "C#", "Game Design", "Gameplay Programming", "RPG"],
    link: "",
    github: "",
    date: "Ongoing",
    role: "Game Designer & Developer",
    gallery: []
  },*/
  
  {
    id: "Environment design in Unity",
    title: "Environment Design in Unity",
    
    description: "A work-in-progress Unity environment focused on mastering technical art and custom visual effects using Shader Graph.",
    
    content: "This project serves as one of my first major deep dives into Unity, specifically focusing on the intersection of 3D environment design and technical art. As an ongoing learning experience, I am actively following advanced technical tutorials to master Unity's Shader Graph. So far, I have successfully built custom node-based materials from scratch, including a dynamic grass shader and a stylized water shader. This hands-on approach is allowing me to understand the logic behind real-time rendering and visual effects, helping me create more immersive, dynamic 3D environments.",
    
    image: "/games/shader.png", 
    
    tags: ["Unity", "Environment Design", "3D Art", "Game Development", "Shader Graph"],
    link: "",
    github: "",
    date: "Ongoing",
    role: "Environment Designer",
    gallery: [
      "/games/gif1_shader.gif",
      "/games/gif2_shader.gif",
    ]
  },

  {
    id: "OpenGL",
    title: "OpenGL Rendering Engine",
    
    description: "A custom 3D rendering project built in Java and OpenGL, featuring from-scratch matrix mathematics, custom GLSL shaders, and an integrated .obj model parser.",
    
    content: "Developed as part of a university Computer Graphics module, this project explores the low-level mathematical and programmatic foundations of 3D rendering. Built using Java and LWJGL within an academic framework, I was responsible for implementing the core rendering pipeline from scratch. On the mathematical side, I engineered a custom 4x4 Matrix class to manually calculate translation, rotation, scaling, and perspective projection. On the graphics side, I wrote custom Vertex and Fragment shaders in GLSL, progressing from basic Gouraud shading to a fully implemented Phong illumination model. I also built a dedicated texture shader to handle dynamic resolution swapping and Mipmap filtering. The project culminated in writing a custom `.obj` file parser to extract vertex, normal, and UV data to buffer (VAO/VBO) and render complex 3D models alongside procedurally generated primitives.",

    image: "/opengl/ellen.gif", 
    tags: ["OpenGL", "Java", "LWJGL", "3D Math", "GLSL", "Computer Graphics"],
    link: "",
    github: "https://github.com/ZzHybu/CG_Project",
    date: "February 2026",
    role: "Graphics Programmer",
    gallery: [
      "/opengl/egadd.gif",
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
    title: "Egg Cooker - Scratch Showcase Demo",
    
    description: "A competitive, 2-player Scratch game inspired by Overcooked, developed as an inspiring showcase demo to motivate kids at a summer coding camp.",

    content: "Developed in collaboration with Jasmin Bindemann and other colleagues, 'Egg Cooker' is a fast-paced, 2-player cooking game inspired by the chaotic fun of Overcooked. Players compete head-to-head in a bustling egg restaurant, racing against the clock to serve customers and rack up the most points. This project was specifically created as a motivational showcase for a children's summer coding camp. Rather than being a step-by-step tutorial, the game served as an inspiring benchmark of what the students could achieve by the end of the program. It successfully sparked their excitement for computer science by showing them the complex, highly interactive mechanics they could build themselves using visual scripting.",
    
    image: "/EggCooker/Egg_Cooker.png",
    
    tags: ["Scratch", "Game Design", "Visual Scripting", "Game Mechanics"],
    link: "https://scratch.mit.edu/projects/1209316655/",
    github: "",
    date: "August 2025",
    role: "Programmer & Game Designer",
    gallery: []
  },

  {
    id: "TeamTry (TryReact) - Banner and profile picture design",
    title: "TeamTry (TryReact) Branding",
    
    description: "What began as a proactive passion project was officially adopted as the channel branding for 'TryReact', the reaction channel of major creator Trymacs (850k+ Subscribers).",
    
    content: "In November 2020, I initiated a passion project to design a fresh banner and profile picture for 'TryReact', the dedicated reaction channel for the massive German YouTube creator, Trymacs. My goal was to create a recognizable visual identity that captured the energetic vibe of the channel. After completing the design, I shared the artwork online and tagged the official Trymacs account and his management team. The bold typography and clean composition caught their attention immediately, and his manager reached out directly to ask if they could officially adopt it for the channel. The branding was highly successful and is still actively used today, reaching an audience of over 850,000 subscribers. This project highlights the power of proactive community engagement and creating high-quality, targeted design work.",
    
    image: "/TeamTry-Project/TeamTry-Banner.png",
    tags: ["Branding", "Social Media Design", "Digital Art", "Typography"],
    link: "https://www.youtube.com/@TryReact",
    github: "",
    date: "November 2020",
    role: "Graphic Designer",
    gallery: [
      "/TeamTry-Project/TeamTry-Banner.png",
      "/TeamTry-Project/TeamTry.png",
    ]
  },

    {
    id: "Valorant Contest Design Winner 2021",
    title: "VALORANT DACH: Creative Clash Winner",
    description: "The official winning entry for the VALORANT DACH 'Creative Clash' contest, featuring a custom Killjoy scene designed to celebrate the game's 1st Anniversary.",
    content: "In June 2021, I participated in the official 'Creative Clash' design contest hosted by VALORANT DACH (@VALORANTde). The creative brief challenged artists to take official artwork of the agent Killjoy and integrate her into a fitting or humorous new setting. To celebrate a major milestone for the community, I designed a scene themed around VALORANT's 1st Anniversary. I focused on building a festive, cohesive atmosphere that stayed true to Killjoy's tech-savvy personality while matching the game's vibrant, edgy art style. My final animated entry was officially selected as the contest winner by the regional team. A huge honor that highlights my ability to adapt and expand upon established, high-profile gaming IPs.",
    image: "/Valorant Contest/0314.gif",
    tags: ["Digital Art", "Graphic Design"],
    link: "https://x.com/VALORANTde/status/1405844376929062913?s=20",
    github: "",
    date: "June 2021",
    role: "Grafik Designer",
    gallery: []
  },

];

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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