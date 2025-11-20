import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-blue-100 ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
            Introducing the next wave of cloud infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.8 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
            Build, scale, and secure your cloud with confidence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-2xl">
            Nimbus Cloud combines compute, networking, and observability into a single, developer‑first platform. Deploy globally in minutes with enterprise‑grade security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="group inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-medium transition hover:opacity-90">
              Start free
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white ring-1 ring-white/30 hover:bg-white/10 transition">
              Book a demo
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  )
}

export default Hero
