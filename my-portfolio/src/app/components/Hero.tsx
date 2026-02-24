import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const DownloadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
    <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden py-10 lg:py-0 text-white">
      <div className="container px-4 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* NOW FIRST: The Picture Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-end relative"
          >
          <div className="relative aspect-square w-full max-w-[400px] lg:max-w-[500px] flex items-center justify-center">
            
            {/* 1. The Glass Border Wrapper */}
            <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-[#ADB9FF]/40 via-white/10 to-transparent">
              {/* 2. The Inner Container (Matches Background) */}
              <div className="rounded-full overflow-hidden bg-[#222225] w-full h-full relative z-10">
                <ImageWithFallback
                  src="/potrait.jpg" 
                  alt="Tran An Brandl"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* 3. The Glow behind the border */}
            <div className="absolute top-1/2 left-1/2 z-0 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADB9FF]/10 blur-2xl" />
          </div>
          </motion.div>

          {/* NOW SECOND: The Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center relative pl-8 lg:pl-12"
          >
            <div className="space-y-2 relative">
              <h2 
                className="text-4xl font-['MADE_Soulmaze','Arial_Black',sans-serif] tracking-tight sm:text-5xl uppercase mb-2"
                style={{ 
                  WebkitTextStroke: "0.5px #ffffff", 
                  color: "transparent" 
                }}
              >
                Hey I'm
              </h2>
              
              <h1 className="text-5xl font-['MADE_Soulmaze','Arial_Black',sans-serif] tracking-[-0.05em] sm:text-7xl xl:text-[6.5rem] leading-[0.9] text-white uppercase mb-6">
                TRAN AN<br />BRANDL
              </h1>
              
              <p className="max-w-[500px] text-lg text-slate-300 font-['Montserrat'] leading-relaxed mt-6">
                A Graphic Designer and Media & Computing student at HTW Berlin, passionate about creating intuitive, dynamic, and beautiful digital experiences.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                className="group inline-flex h-14 items-center justify-center rounded-full border border-[#ADB9FF]/20 bg-[#171614] px-8 text-lg font-medium font-['Montserrat'] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#5367df]/50 hover:bg-[#ADB9FF]/20 hover:shadow-xl"
              >
                Resume <DownloadIcon />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}