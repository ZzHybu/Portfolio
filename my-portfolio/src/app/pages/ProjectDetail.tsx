import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projects = [
  {
    id: "night-gfx",
    title: "Night GFX",
    description: "A retro-futuristic digital art piece...",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080&auto=format&fit=crop", // <-- PLACEHOLDER URL
    tags: ["Graphic Design", "Digital Art", "Photoshop", "Illustrator"],
  },
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment processing, and admin dashboard. This project demonstrates complex state management using Redux and seamless integration with Stripe for payments. The backend is built with Node.js and Express, ensuring robust API performance.",
    image: "https://images.unsplash.com/photo-1585123607190-72ec2979a269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzE1MzYwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    link: "#",
    github: "#",
    date: "2023",
    role: "Full Stack Developer"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative project management tool helping teams organize tasks and boost productivity. Features include drag-and-drop task boards, real-time updates via WebSockets, and detailed analytics for team performance tracking.",
    image: "https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbW9ja3VwfGVufDF8fHx8MTc3MTUzNjA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Socket.io", "Prisma"],
    link: "#",
    github: "#",
    date: "2024",
    role: "Frontend Lead"
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
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg mb-12 border border-[#ADB9FF]/20">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-['MADE_Soulmaze','Arial_Black',sans-serif] uppercase">{project.title}</h1>
              <div className="prose prose-lg prose-invert max-w-none text-slate-300 font-['Montserrat']">
                <p>{project.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl border border-[#ADB9FF]/20 bg-[#171614] p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 font-['Montserrat'] text-white">Project Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-5 w-5 text-[#5367df]" />
                    <span className="text-slate-300 font-['Montserrat']">{project.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <User className="h-5 w-5 text-[#5367df]" />
                    <span className="text-slate-300 font-['Montserrat']">{project.role}</span>
                  </div>
                </div>
                
                <div className="my-6 h-px bg-[#ADB9FF]/20" />
                
                <h3 className="text-lg font-semibold mb-4 font-['Montserrat'] text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-[#222225] border border-[#ADB9FF]/20 px-2.5 py-0.5 text-xs font-medium text-slate-300 font-['Montserrat']">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="my-6 h-px bg-[#ADB9FF]/20" />

                <div className="space-y-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center rounded-md bg-[#5367df] px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-[#4353b5] transition-colors font-['Montserrat']"
                  >
                    View Live <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#2a2a2e] transition-colors font-['Montserrat']"
                  >
                    View Code <Github className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
