import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/60 bg-white/70 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-lg tracking-tight">
          <span className="text-gray-900">your</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">.portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-gray-900">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm text-white hover:bg-gray-800">
            Hire Me
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-3 grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm text-white">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
