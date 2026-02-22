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
              <h2 className="text-3xla tracking-tighter sm:text-4xl md:text-5xl font-['MADE_Soulmaze','Arial_Black',sans-serif] uppercase">Get In Touch</h2>
              <p className="max-w-[600px] text-slate-300 md:text-xl font-['Montserrat']">
                Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form or reach out via email.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5367df]/20">
                  <Mail className="h-6 w-6 text-[#5367df]" />
                </div>
                <div>
                  <h3 className="font-medium font-['Montserrat']">Email</h3>
                  <a href="mailto:hello@alexdev.com" className="text-slate-400 hover:text-[#5367df] transition-colors font-['Montserrat']">
                    hello@alexdev.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5367df]/20">
                  <MessageSquare className="h-6 w-6 text-[#5367df]" />
                </div>
                <div>
                  <h3 className="font-medium font-['Montserrat']">Socials</h3>
                  <p className="text-slate-400 font-['Montserrat']">
                    @alexdev on Twitter, GitHub, LinkedIn
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
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none font-['Montserrat'] text-slate-300">Name</label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5367df] text-white font-['Montserrat']"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none font-['Montserrat'] text-slate-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5367df] text-white font-['Montserrat']"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium leading-none font-['Montserrat'] text-slate-300">Subject</label>
                <input
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5367df] text-white font-['Montserrat']"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none font-['Montserrat'] text-slate-300">Message</label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-[#ADB9FF]/20 bg-[#222225] px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5367df] text-white font-['Montserrat']"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#5367df] px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#4353b5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5367df] font-['Montserrat']"
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
