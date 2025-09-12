import Link from 'next/link'
export default function Hero() {
  return (
    <section className="bg-earth-100/60">
      <div className="container py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl tracking-tight text-earth-900">
          Upland hunter fitness,<br/>built for the dog handler.
        </h1>
        <p className="mt-5 max-w-2xl text-earth-700">
          Field-Strong Membership gives you minimalist training, in-season maintenance, and strength tracks for the miles you actually walk.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/membership" className="inline-block px-5 py-3 rounded bg-pine-600 text-white">Join Field-Strong ($29/mo)</Link>
          <Link href="/programs" className="inline-block px-5 py-3 rounded border border-earth-300">See Programs</Link>
        </div>
      </div>
    </section>
  )
}
