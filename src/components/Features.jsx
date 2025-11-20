import { Shield, Globe, Zap, LineChart } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Zero-trust security',
    desc: 'Private networking, policy-as-code, and continuous compliance baked in.',
  },
  {
    icon: Globe,
    title: 'Global edge',
    desc: 'Anycast networking across 300+ locations for ultra-low latency.',
  },
  {
    icon: Zap,
    title: 'Fast by default',
    desc: 'Autoscaling compute, instant rollbacks, and Git-native deploys.',
  },
  {
    icon: LineChart,
    title: 'Unified observability',
    desc: 'Logs, traces, and metrics in one place with AI-driven insights.',
  },
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Everything you need to run at cloud scale</h2>
          <p className="mt-4 text-blue-100/80">A modern platform that abstracts the complexity of multi-cloud so your team can ship faster and sleep better.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 ring-1 ring-white/20">
                <Icon className="text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
    </section>
  )
}

export default Features
