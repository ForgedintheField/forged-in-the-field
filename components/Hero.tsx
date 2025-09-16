"use client"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative grid min-h-[78vh] items-end pb-16">
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[.45] contrast-[1.05]"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        {/* Put your short MP4 at /public/hero.mp4 — ~10–15s, 1080p */}
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_80%,rgba(0,0,0,0)_0%,rgba(0,0,0,.6)_60%,rgba(0,0,0,.85)_100%)]" />

      {/* Content */}
      <div className="relative z-[1] mx-auto w-full max-w-[1152px] px-6">
        <span className="inline-flex items-center rounded-full bg-[rgba(200,154,107,.12)] px-3 py-1 text-sm font-semibold uppercase tracking-widest text-accent2">
          Upland Hunter Fitness
        </span>

        <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
          Field-ready strength, durability &amp; recovery
        </h1>

        <p className="mt-3 max-w-[58ch] text-[18px] text-[#d8d8d6]">
          Build the engine and resilience for long covers, uneven ground, and hard seasons. Programs built for handlers—Minimalist or Strength track.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/membership" className="inline-flex items-center justify-center rounded-brand bg-accent px-4 py-3 font-semibold text-white shadow-brand">
            Join Membership
          </Link>
          <Link href="/programs" className="inline-flex items-center justify-center rounded-brand border border-accent2 px-4 py-3 font-semibold text-text">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  )
}