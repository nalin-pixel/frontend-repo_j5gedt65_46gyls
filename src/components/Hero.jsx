import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <p className="text-indigo-400 tracking-wide uppercase text-xs font-semibold mb-4">Personal Website</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Minimal. Futuristic. You.
          </h1>
          <p className="mt-6 text-zinc-300 max-w-xl">
            I build clean, responsive experiences with a focus on performance and accessibility. Explore my work and get in touch.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white transition shadow-lg shadow-indigo-500/20">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
