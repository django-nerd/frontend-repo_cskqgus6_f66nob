import { ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-fuchsia-600 p-1">
          <div className="rounded-3xl bg-slate-900 px-8 py-12 sm:px-12 sm:py-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Ready to experience cloud without the chaos?</h3>
                <p className="mt-3 text-blue-100/90">Start free with $300 in platform credits. No credit card required.</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 font-medium shadow hover:opacity-90 transition">
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
