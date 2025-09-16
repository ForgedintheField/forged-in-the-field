import Link from "next/link"

const items = [
  {
    title: "Handler’s Durability — Foundations (Minimalist)",
    body: "No/low equipment, mobility + conditioning for the field.",
    href: "/programs#foundations",
  },
  {
    title: "Handler’s Durability — Strength Track",
    body: "Dumbbells-based strength for tougher covers & longer days.",
    href: "/programs#strength",
  },
  {
    title: "In-Season Maintenance & Recovery",
    body: "Stay sharp all season without overreaching.",
    href: "/programs#in-season",
  },
]

export default function ProgramGrid() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-[1152px] px-6">
        <div className="uppercase tracking-widest font-bold text-accent2">Programs</div>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Build what the field demands</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-brand border border-stroke bg-card p-5">
              <h3 className="text-[20px] font-extrabold">{it.title}</h3>
              <p className="mt-1 text-[#c9c9c7]">{it.body}</p>
              <Link className="mt-3 inline-flex rounded-brand bg-accent px-4 py-2 font-semibold text-white shadow-brand" href={it.href}>
                View →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}