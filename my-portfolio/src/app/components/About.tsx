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
                src="me.jpg"
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
            <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-['MADE_Soulmaze','Arial_Black',sans-serif] uppercase">About Me</h2>
            
            <p className="text-slate-300 leading-relaxed font-['Montserrat']">
              There's no day without a to-do list for me. I am currently studying International Media and Computing at{" "}
              {/* 👇 Removed underline classes here */}
              <a 
                href="https://www.htw-berlin.de/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#ADB9FF] font-medium hover:text-white transition-colors"
              >
                HTW Berlin
              </a>
              , building on a strong foundation from{" "}
              {/* 👇 Removed underline classes here */}
              <a 
                href="https://www.max-bill-schule.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#ADB9FF] font-medium hover:text-white transition-colors"
              >
                OSZ Max-Bill-Schule
              </a>
              , a school known for its focus on media and design. As a computer science student, I am structured, creative, and passionate about leading teams in group projects. I enjoy teamwork because I believe great goals can only be achieved together.
            </p>
            
            <div className="border-l-4 border-[#5367df] bg-[#5367df]/10 p-5 rounded-r-xl my-6">
              <p className="text-white leading-relaxed font-['Montserrat'] font-medium">
                I am currently in my 4th semester and heavily involved in an exciting university project: "Mixed-reality training reimagined: Intelligent stress adaptation in real time." We are using virtual reality to simulate specific situations, while an AI system analyzes the user’s stress levels in real time and adapts the environment to create a responsive, personalized training experience. I will be showcasing this work at the IMI-Showtime presentation event on July 31st. More details and insights to come!
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed font-['Montserrat']">
              Beyond my studies, I am proud to be a Course Leader for{" "}
              {/* 👇 Removed underline classes here */}
              <a 
                href="https://www.tech4girls.de/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#ADB9FF] font-medium hover:text-white transition-colors"
              >
                Tech4Girls
              </a>
              , where I teach young children the basics of computer science with the goal of reducing the gender gap in tech. I always welcome challenges as opportunities to grow and improve my skills.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-medium font-['Montserrat']">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#5367df]" />
                <span>Creative Thinker</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#5367df]" />
                <span>Highly Structured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#5367df]" />
                <span>Challenge Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#5367df]" />
                <span>Team-Oriented</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}