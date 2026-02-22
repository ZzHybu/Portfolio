import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#222225] text-white transition-colors duration-300 font-['Montserrat']">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
