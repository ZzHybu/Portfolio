import { motion } from "motion/react";

// Expanded to 14 items to create a massive, screen-filling wall
const projects = [
  { id: 1, size: "col-span-2 row-span-2", img: `${import.meta.env.BASE_URL}featured/mc-banner.jpg`, imgClass: "scale-108" },
  { id: 2, size: "col-span-1 row-span-1", img: `${import.meta.env.BASE_URL}featured/1.png`, imgClass: "" },
  { id: 3, size: "col-span-1 row-span-2", img: `${import.meta.env.BASE_URL}featured/0.jpg`, imgClass: "" },
  { id: 4, size: "col-span-2 row-span-1", img: `${import.meta.env.BASE_URL}featured/nightgfx.png`, imgClass: "" },
  { id: 5, size: "col-span-1 row-span-1", img: `${import.meta.env.BASE_URL}featured/TeamTry.png`, imgClass: "" },
  { id: 6, size: "col-span-2 row-span-2", img: `${import.meta.env.BASE_URL}featured/KJ-Wallpaper.png`, imgClass: "" },
  { id: 7, size: "col-span-1 row-span-1", img: `${import.meta.env.BASE_URL}featured/final_scene.jpg`, imgClass: "" },
  { id: 8, size: "col-span-1 row-span-1", img: `${import.meta.env.BASE_URL}featured/animation.gif`, imgClass: "" },
  { id: 9, size: "col-span-1 row-span-1", img: `${import.meta.env.BASE_URL}featured/Thumbnail-Zelda-Domi.png`, imgClass: "" },
  { id: 10, size: "col-span-2 row-span-1", img: `${import.meta.env.BASE_URL}featured/Banner Krench Royale Season 10.png`, imgClass: "" },
  { id: 11, size: "col-span-1 row-span-1", img: `${import.meta.env.BASE_URL}featured/Egg_Cooker.png`, imgClass: "" },
  { id: 12, size: "col-span-1 row-span-1", img: `${import.meta.env.BASE_URL}featured/offline.jpg`, imgClass: "" },
];

export function FeaturedSection() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-10 pb-32">
      
      <div className="flex justify-center w-full px-2">
        
        <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 auto-rows-[160px] md:auto-rows-[200px] gap-2 md:gap-3 grid-flow-dense min-w-[1000px] md:min-w-[1400px] w-full max-w-[1800px]">
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: (index % 6) * 0.05, duration: 0.5 }} 
              className={`relative overflow-hidden rounded-2xl bg-[#171614] ${project.size}`}
            >
              <div className="absolute inset-0">
                <img 
                  src={project.img} 
                  alt={`Project ${project.id}`} 
                  className={`h-full w-full object-cover ${project.imgClass || ''}`}
                />
                
                {/* 👇 Added back the dark fade, but removed the hover animation! */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171614] via-[#171614]/20 to-transparent opacity-80" />
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 md:h-96 bg-gradient-to-t from-[#171614] via-[#171614]/90 via-40% to-transparent pointer-events-none z-10" />
    </section>
  );
}