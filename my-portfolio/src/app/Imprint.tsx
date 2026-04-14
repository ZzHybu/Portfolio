import { motion } from "motion/react";

export function Imprint() {
  return (
    <div className="min-h-screen bg-[#171614] text-white pt-32 pb-20 font-['Montserrat']">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-['MADE_Soulmaze'] uppercase tracking-tighter mb-12 border-b border-[#ADB9FF]/20 pb-4">
          Imprint
        </h1>

        <section className="space-y-8 text-slate-300">
          <div>
            <h2 className="text-[#ADB9FF] font-semibold uppercase text-sm tracking-widest mb-2">Information according to § 5 DDG</h2>
            <p className="text-lg">Tran An Brandl</p>
            <p>Berliner Allee 134</p>
            <p>13088, Berlin</p>
            <p>Germany</p>
          </div>

          <div>
            <h2 className="text-[#ADB9FF] font-semibold uppercase text-sm tracking-widest mb-2">Contact</h2>
            <p>Phone: +49 176 81103145</p>
            <p>Email: trananbrandl@gmail.com</p>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-white mb-4 text-xl font-['MADE_Soulmaze'] uppercase tracking-tight">Disclaimer</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong>Liability for Content:</strong> The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.
              </p>
              <p>
                <strong>Liability for Links:</strong> Our site contains links to external third-party websites. We have no influence on the contents of those websites and cannot assume any liability for them.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}