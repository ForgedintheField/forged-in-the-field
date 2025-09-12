import Link from 'next/link'
const programs = [
  { slug:'foundations-minimalist', title:'Handler Durability Foundations', subtitle:'No equipment required — just your pack and the field.', features:['Bodyweight + ruck only','4-week block + ongoing drops','Field Log & accountability']},
  { slug:'foundations-strength', title:'Handler Durability Strength Track', subtitle:'Add dumbbells to progress strength & capacity.', features:['Ruck + DB work','4-week block + ongoing drops','Progression rules & logging']},
  { slug:'in-season', title:'Field-Ready: In-Season Maintenance', subtitle:'Stay sharp, recover faster, hunt more days.', features:['3 short sessions/week','Post-hunt recovery flows','Mobility + durability focus']}
]
export default function ProgramGrid() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Programs inside Field-Strong</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map(p => (
          <article key={p.slug} className="rounded-lg border border-amber-900/20 bg-white p-5 flex flex-col">
            <h3 className="text-xl font-medium">{p.title}</h3>
            <p className="text-earth-700 mt-1">{p.subtitle}</p>
            <ul className="mt-4 space-y-1 text-sm">
              {p.features.map((f,i)=>(<li key={i}>• {f}</li>))}
            </ul>
            <div className="mt-auto pt-4">
              <Link href={`/programs/${p.slug}`} className="inline-block px-4 py-2 rounded bg-pine-600 text-white">View</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
