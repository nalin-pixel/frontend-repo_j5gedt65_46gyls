export default function About() {
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_10%_0%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        <p className="mt-4 text-zinc-300 leading-relaxed">
          Im a front-end engineer who loves crafting smooth, modern interfaces in dark mode. My work blends accessibility, performance, and delightful motion.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { label: 'Focus', value: 'Design systems, UX, and micro-interactions' },
            { label: 'Stack', value: 'React, Tailwind, FastAPI, MongoDB' },
            { label: 'Location', value: 'Remote / Worldwide' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-zinc-900/40 p-6">
              <div className="text-xs uppercase tracking-wide text-zinc-400">{item.label}</div>
              <div className="mt-2 text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
