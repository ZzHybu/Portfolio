import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-[#222225] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl lg:aspect-square border border-[#ADB9FF]/20">
               <ImageWithFallback
                src="https://images.unsplash.com/photo-1770159116807-9b2a7bb82294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTUzNjA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl tracking-tighter sm:text-4xl font-['MADE_Soulmaze','Arial_Black',sans-serif] uppercase">About Me</h2>
            <p className="text-slate-300 leading-relaxed font-['Montserrat']">
              I'm a Graphic Designer and currently a student at HTW (Hochschule für Technik und Wirtschaft) majoring in Media and Computing. My journey combines creative design with technical expertise.
            </p>
            <p className="text-slate-300 leading-relaxed font-['Montserrat']">
              I specialize in graphic design, digital art, and web development, exploring the intersection of media and technology. I believe in creating visual experiences that tell a story.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-medium font-['Montserrat']">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#5367df]" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#5367df]" />
                <span>Detail Oriented</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#5367df]" />
                <span>Continuous Learner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#5367df]" />
                <span>Team Player</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
