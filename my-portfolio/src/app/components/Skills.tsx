import { motion } from "motion/react";
import { Code, Layout, PenTool, MonitorPlay, Globe, Users } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const skills = [
  {
    category: "Software Engineering",
    icon: Code,
    items: ["Java", "Python", "C#", "PostgreSQL", "Object-Oriented Programming"],
  },
  {
    category: "Media & Interactive",
    icon: MonitorPlay,
    items: ["Unity", "Maya", "Blender", "Cinema 4D", "3D Modeling", "Vegas Pro", "CapCut", "Animation"],
  },
  {
    category: "Web Development",
    icon: Layout,
    items: ["JavaScript", "HTML", "CSS", "UI/UX", "Interactive Storytelling"],
  },
  {
    category: "Creative Design",
    icon: PenTool,
    items: ["Figma", "Photoshop", "Affinity", "Procreate", "Graphic Design", "Digital Art"],
  },
  {
    category: "Core Strengths",
    icon: Users,
    items: ["Team-oriented", "Organized", "Creative Thinker", "Mentoring"],
  },
  {
    category: "Languages",
    icon: Globe,
    items: ["German (Native)", "English (B2)", "Vietnamese (Native/Bilingual)", "Spanish (Basic)"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#222225] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-['MADE_Soulmaze','Arial_Black',sans-serif] uppercase">
            Skills & Expertise
          </h2>
          <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed font-['Montserrat']">
            A comprehensive look at the technologies, creative tools, and skills I work with.
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
              className="relative min-h-[14rem] list-none rounded-[1.25rem] border-[0.75px] border-[#ADB9FF]/20 p-2 md:rounded-[1.5rem] md:p-3"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[#ADB9FF]/20 bg-[#171614] p-6 shadow-sm transition-colors hover:border-[#5367df]/50">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}