import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: "night-gfx",
    title: "Night GFX",
    description: "A retro-futuristic digital art piece exploring synthwave aesthetics and vibrant color palettes.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080&auto=format&fit=crop", // <-- REPLACED WITH A PLACEHOLDER URL
    tags: ["Graphic Design", "Digital Art", "Photoshop", "Illustrator"],
    link: "#",
    github: "#",
  },
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1585123607190-72ec2979a269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzE1MzYwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative project management tool helping teams organize tasks and boost productivity.",
    image: "https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbW9ja3VwfGVufDF8fHx8MTc3MTUzNjA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A collaborative project management tool helping teams organize tasks and boost productivity.",
    image: "https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbW9ja3VwfGVufDF8fHx8MTc3MTUzNjA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
    {
    id: "4",
    title: "Task Management App",
    description: "A collaborative project management tool helping teams organize tasks and boost productivity.",
    image: "https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbW9ja3VwfGVufDF8fHx8MTc3MTUzNjA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "#",
    github: "#",
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
              className="group overflow-hidden rounded-xl border border-[#ADB9FF]/20 bg-[#171614] shadow-sm transition-all hover:shadow-md hover:border-[#5367df]/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
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
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-[#5367df] hover:underline font-['Montserrat']"
                  >
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
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
