import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-zinc-500 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-zinc-600">Built with ♥ in dark mode.</p>
        </div>
      </footer>
    </div>
  )
}

export default App