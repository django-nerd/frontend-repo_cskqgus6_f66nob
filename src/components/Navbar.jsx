import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 shadow-[0_0_40px_rgba(59,130,246,0.5)]"></div>
          <span className="text-white font-semibold tracking-tight text-lg">Nimbus Cloud</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-blue-100/80">
          <a href="#features" className="hover:text-white transition-colors">Platform</a>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="text-blue-100/80 hover:text-white transition-colors">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">Start free</button>
        </div>
        <button className="md:hidden text-white/80" aria-label="Open menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
