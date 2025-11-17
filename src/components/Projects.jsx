import { Code2, Globe, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Futuristic Dashboard',
    description: 'A sleek, dark-mode analytics dashboard with real-time charts and modular widgets.',
    link: '#',
    icon: <Globe size={18} />,
    tags: ['React', 'Tailwind', 'API']
  },
  {
    title: '3D Portfolio',
    description: 'Interactive personal portfolio featuring 3D scenes and smooth transitions.',
    link: '#',
    icon: <Sparkles size={18} />,
    tags: ['Spline', 'Framer Motion']
  },
  {
    title: 'Dev Utilities',
    description: 'A collection of tiny tools that solve everyday developer problems.',
    link: '#',
    icon: <Code2 size={18} />,
    tags: ['TypeScript', 'Node']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-zinc-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(67,56,202,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-zinc-400">A peek into things Ive designed and built recently.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-white/10 bg-zinc-900/40 p-6 hover:border-indigo-500/40 hover:bg-zinc-900/60 transition relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition"/>
              <div className="flex items-center gap-3 text-indigo-400">
                {p.icon}
                <span className="text-xs uppercase tracking-wide">Project</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
