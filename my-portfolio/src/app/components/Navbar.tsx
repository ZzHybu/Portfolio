import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white hover:text-slate-300 transition-colors">
    <path d="M19 3.16667V6.33333M19 31.6667V34.8333M7.80583 7.80583L10.0383 10.0383M27.9617 27.9617L30.1942 30.1942M3.16667 19H6.33333M31.6667 19H34.8333M10.0383 27.9617L7.80583 30.1942M30.1942 7.80583L27.9617 10.0383M25.3333 19C25.3333 22.4978 22.4978 25.3333 19 25.3333C15.5022 25.3333 12.6667 22.4978 12.6667 19C12.6667 15.5022 15.5022 12.6667 19 12.6667C22.4978 12.6667 25.3333 15.5022 25.3333 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#171614]/70 backdrop-blur-md text-white py-4">
      
      {/* THE FADING BLUE LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#adb9ff]/50 to-transparent" />

      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
           <div className="h-10 w-auto">
            <img src="/logo.png" alt="TranAnDZN Logo" className="h-full w-auto object-contain" />
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-8 py-2 text-sm font-medium border border-[#adb9ff] rounded-full text-white hover:bg-[#adb9ff]/10 transition-colors cursor-pointer block"
            >
              {link.name}
            </a>
          ))}
          
          <div className="ml-4 border-l border-slate-700 pl-6 h-8 flex items-center">
             <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="p-1 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
              >
                <SunIcon />
              </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
             <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="p-1 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
              >
                <SunIcon />
              </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#222225]/50 bg-[#171614]/90 backdrop-blur-md">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-[#222225] hover:text-white font-['Montserrat']"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}