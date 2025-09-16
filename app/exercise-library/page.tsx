function Card({ title, desc, src }: { title: string; desc: string; src: string }) {
  return (
    <div className="rounded-brand border border-stroke bg-card p-5">
      <video controls preload="metadata" className="mb-3 w-full rounded-[8px]">
        <source src={src} type="video/mp4" />
      </video>
      <h3 className="text-[18px] font-extrabold">{title}</h3>
      <p className="text-[#c9c9c7]">{desc}</p>
    </div>
  )
}

export default function Library() {
  return (
    <main className="mx-auto max-w-[1152px] px-6 py-10">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Exercise Library</h1>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Hip Circles" desc="Mobilize hips before rucks & long covers." src="/exercises/hip-circles.mp4" />
        <Card title="RDL (Dumbbell)" desc="Posterior-chain strength for uneven ground." src="/exercises/rdl-db.mp4" />
        <Card title="Step-Ups" desc="Upland-specific climbing capacity." src="/exercises/step-ups.mp4" />
      </div>
    </main>
  )
}