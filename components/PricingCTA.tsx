import Link from "next/link"

export default function PricingCTA() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-[1152px] px-6">
        <div className="rounded-brand border border-stroke bg-card p-8 text-center">
          <div className="uppercase tracking-widest font-bold text-accent2">Membership</div>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Field Strong — $29/mo</h2>
          <p className="mx-auto mt-2 max-w-[60ch] text-[#d8d8d6]">
            Weekly Minimalist + Strength programming, in-season plan, recovery flows, and private community.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link className="inline-flex rounded-brand bg-accent px-4 py-3 font-semibold text-white shadow-brand" href="/membership">
              Join now
            </Link>
            <Link className="inline-flex rounded-brand border border-accent2 px-4 py-3 font-semibold text-text" href="/exercise-library">
              Browse exercises
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}