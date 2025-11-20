import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(217,70,239,0.12),transparent)]"></div>

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-blue-200/70">© {new Date().getFullYear()} Nimbus Cloud. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-blue-200/70">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
