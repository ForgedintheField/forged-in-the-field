// app/membership/page.tsx
import Link from "next/link";

export default function Membership() {
  return (
    <>
      {/* Full-bleed hero stripe (optional) */}
      <section className="bg-accent text-white py-12">
        <div className="mx-auto w-full max-w-[1152px] px-6">
          <h1 className="text-4xl font-extrabold">Field Strong — $29/mo</h1>
          <p className="mt-2 text-lg/7 opacity-95">
            Weekly Minimalist + Strength programming, recovery flows, and private community.
          </p>
          <div className="mt-4 flex gap-3">
            {/* TODO: swap href for your live checkout link */}
            <Link
              href="https://your-checkout-link.example"
              className="rounded-brand bg-black/20 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-black/30"
            >
              Join now
            </Link>
            <Link
              href="/exercise-library"
              className="rounded-brand bg-white/15 px-5 py-3 font-semibold text-white hover:bg-white/25"
            >
              Preview exercises
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="py-16">
        <div className="mx-auto w-full max-w-[1152px] px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-brand border border-stroke bg-card p-5">
              <h3 className="font-extrabold">Weekly training plans</h3>
              <p className="mt-1 text-[#c9c9c7]">
                Minimalist + Strength tracks with progressions, deloads, and field-specific cues.
              </p>
            </div>
            <div className="rounded-brand border border-stroke bg-card p-5">
              <h3 className="font-extrabold">Exercise Library</h3>
              <p className="mt-1 text-[#c9c9c7]">Short videos + coaching notes for every movement.</p>
            </div>
            <div className="rounded-brand border border-stroke bg-card p-5">
              <h3 className="font-extrabold">Community &amp; Office Hours</h3>
              <p className="mt-1 text-[#c9c9c7]">Q&amp;A, form checks, and in-season adjustments.</p>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            {/* TODO: swap href for your live checkout link */}
            <Link
              className="rounded-brand bg-accent px-4 py-3 font-semibold text-white shadow-brand"
              href="https://your-checkout-link.example"
            >
              Join now
            </Link>
            <Link
              className="rounded-brand border border-accent2 px-4 py-3 font-semibold text-text"
              href="/exercise-library"
            >
              Preview exercises
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}