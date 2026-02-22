import { motion } from "motion/react";
import { Code, Database, Layout, Server, Smartphone, Globe, Terminal, Cpu } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "HTML5/CSS3"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Python", "FastAPI", "Go", "GraphQL"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    category: "DevOps",
    icon: Terminal,
    items: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Swift", "Android Studio"],
  },
  {
    category: "Design",
    icon: Globe,
    items: ["Figma", "UI/UX", "Adobe XD", "Responsive Design", "Photoshop", "Illustrator"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#222225] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-['MADE_Soulmaze','Arial_Black',sans-serif] uppercase">Skills & Expertise</h2>
          <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed font-['Montserrat']">
            A comprehensive look at the technologies and tools I work with.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-[#ADB9FF]/20 bg-[#171614] p-6 shadow-sm hover:border-[#5367df]/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg bg-[#5367df]/20 p-2">
                  <skill.icon className="h-6 w-6 text-[#5367df]" />
                </div>
                <h3 className="text-lg font-bold font-['Montserrat']">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md bg-[#222225] border border-[#ADB9FF]/10 px-2 py-1 text-xs font-medium text-slate-300 font-['Montserrat']"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
