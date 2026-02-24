import { motion } from "motion/react";

// Expanded to 14 items to create a massive, screen-filling wall
const projects = [
  { id: 1, size: "col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80" },
  { id: 2, size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=400&q=80" },
  { id: 3, size: "col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80" },
  { id: 4, size: "col-span-2 row-span-1", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
  { id: 5, size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80" },
  { id: 6, size: "col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" },
  { id: 7, size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80" },
  { id: 8, size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=400&q=80" },
  { id: 9, size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=400&q=80" },
  { id: 10, size: "col-span-2 row-span-1", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
  { id: 11, size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80" },
  { id: 12, size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80" },
];

export function FeaturedSection() {
  return (
    // 1. overflow-hidden hides the edges when the grid forces itself to be wider than the phone
    <section className="relative w-full overflow-hidden bg-transparent pt-10 pb-32">
      
      {/* 2. Flex-center keeps the collage centered, even when it bleeds off the left/right edges */}
      <div className="flex justify-center w-full px-2">
        
        {/* 3. min-w-[1200px] forces it to stay large on phones. grid-flow-dense fills the empty holes! */}
        <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 auto-rows-[160px] md:auto-rows-[200px] gap-2 md:gap-3 grid-flow-dense min-w-[1000px] md:min-w-[1400px] w-full max-w-[1800px]">
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: (index % 6) * 0.05, duration: 0.5 }} 
              className={`group relative overflow-hidden rounded-2xl bg-[#171614] cursor-pointer ${project.size}`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.img} 
                  alt={`Project ${project.id}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Individual Card Dark Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171614] via-[#171614]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* NEW: Glossy Glass Border Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300 group-hover:border-white/30" />
            </motion.div>
          ))}

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 md:h-96 bg-gradient-to-t from-[#171614] via-[#171614]/90 via-40% to-transparent pointer-events-none z-10" />
    </section>
  );
}