import { Menu, Github, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">
          <span className="text-indigo-400">/</span> Your Name
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <Mail size={16} /> Email
          </a>
        </div>
        <button
          className="md:hidden text-zinc-200 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="px-4 py-3 space-y-3 text-zinc-200">
            <a href="#about" className="block">About</a>
            <a href="#projects" className="block">Projects</a>
            <a href="#contact" className="block">Contact</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="block">GitHub</a>
            <a href="mailto:you@example.com" className="block">Email</a>
          </div>
        </div>
      )}
    </header>
  );
}
