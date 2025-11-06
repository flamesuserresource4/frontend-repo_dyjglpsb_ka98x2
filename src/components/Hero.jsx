import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-8 md:pt-12 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for freelance projects
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Your Name</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
              I design and build modern, interactive web experiences. I blend clean UI with playful 3D to craft memorable products.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2.5 text-white font-medium shadow-sm hover:bg-gray-800">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-800 font-medium hover:bg-gray-50">
                Contact Me
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:you@example.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
