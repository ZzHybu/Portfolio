import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#ADB9FF]/20 bg-[#171614] py-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-[#5367df] transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-[#5367df] transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-[#5367df] transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-slate-400 hover:text-[#5367df] transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm text-slate-500 font-['Montserrat']">
          © {new Date().getFullYear()} Tran An Brandl. All rights reserved. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
