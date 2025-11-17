import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Ill get back to you soon.')
    e.target.reset()
  }

  return (
    <section id="contact" className="relative bg-zinc-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_90%_0%,rgba(99,102,241,0.14),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-indigo-400">
          <Mail size={18} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        </div>
        <p className="mt-3 text-zinc-400">Have a project in mind or just want to say hi? Drop a message.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input type="text" required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="email" required placeholder="Email" className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea required placeholder="Message" rows="5" className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white hover:bg-indigo-400 transition">
            <Send size={16}/> Send
          </button>
          {status && <p className="text-sm text-emerald-400">{status}</p>}
        </form>
      </div>
    </section>
  )
}
