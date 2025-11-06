import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A playful WebGL landing page integrating real-time physics and 3D models.',
    tech: ['React', 'Spline', 'Three.js', 'Tailwind'],
    live: '#',
    code: '#',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Analytics dashboard with role-based access and dark mode.',
    tech: ['React', 'FastAPI', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    title: 'Portfolio Generator',
    desc: 'CLI that scaffolds a portfolio with themeable components and CI.',
    tech: ['Node', 'TS', 'PNPM'],
    live: '#',
    code: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Selected Projects</h2>
            <p className="mt-2 text-gray-600">A few favorites showcasing UI craft and technical depth.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 hover:bg-gray-50">
            Let’s work together
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={p.live} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50" aria-label="Live">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href={p.code} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50" aria-label="Code">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2.5 py-1">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
