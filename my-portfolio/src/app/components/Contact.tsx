import { motion } from "motion/react";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#222225] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-['MADE_Soulmaze','Arial_Black',sans-serif] uppercase">
                Get In Touch
              </h2>
              <p className="max-w-[600px] text-lg md:text-xl font-normal text-slate-300 font-['Montserrat']">
                Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form or reach out via email.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5367df]/20">
                  <Mail className="h-6 w-6 text-[#5367df]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-base font-normal font-['Montserrat']">Email</h3>
                  <a href="mailto:trananbrandl@gmail.com" className="text-lg md:text-sm font-normal text-slate-400 hover:text-[#5367df] transition-colors font-['Montserrat']">
                    trananbrandl@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5367df]/20">
                  <MessageSquare className="h-6 w-6 text-[#5367df]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-base font-normal font-['Montserrat']">Socials</h3>
                  <p className="text-lg md:text-sm font-normal text-slate-400 font-['Montserrat']">
                    Tran An Brandl on LinkedIn
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-[#ADB9FF]/20 bg-[#171614] p-6 shadow-sm"
          >
            <form action="https://formspree.io/f/xojkvvkb" method="POST" className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-base md:text-sm font-normal leading-none font-['Montserrat'] text-slate-300">Name</label>
                  <input
                    id="name"
                    name="name" // 👈 ADDED name attribute
                    className="flex h-12 md:h-10 w-full rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-3 py-2 text-base md:text-sm font-normal placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5367df] text-white font-['Montserrat']"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base md:text-sm font-normal leading-none font-['Montserrat'] text-slate-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email" // 👈 ADDED name attribute
                    className="flex h-12 md:h-10 w-full rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-3 py-2 text-base md:text-sm font-normal placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5367df] text-white font-['Montserrat']"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-base md:text-sm font-normal leading-none font-['Montserrat'] text-slate-300">Subject</label>
                <input
                  id="subject"
                  name="subject" // 👈 ADDED name attribute
                  className="flex h-12 md:h-10 w-full rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-3 py-2 text-base md:text-sm font-normal placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5367df] text-white font-['Montserrat']"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-base md:text-sm font-normal leading-none font-['Montserrat'] text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message" // 👈 ADDED name attribute
                  className="flex min-h-[140px] md:min-h-[120px] w-full rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-3 py-2 text-base md:text-sm font-normal placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5367df] text-white font-['Montserrat']"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#5367df] px-8 py-4 md:py-3 text-base md:text-sm font-normal text-white shadow transition-colors hover:bg-[#4353b5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5367df] font-['Montserrat']"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}