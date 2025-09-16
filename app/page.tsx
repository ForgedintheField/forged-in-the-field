// app/page.tsx
import Link from "next/link";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProgramGrid from "@/components/ProgramGrid";
import PricingCTA from "@/components/PricingCTA";
import LeadCapture from "@/components/LeadCapture";

export default function Home() {
  return (
    <>
      <Hero />

      {/* This block replaces your old <Container> */}
      <main className="py-16">
        <div className="mx-auto w-full max-w-[1152px] px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Forged in the Field
          </h1>
          <p className="mt-4 text-lg opacity-80">
            Upland hunter fitness HQ — field-ready strength, durability, and recovery.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/programs"
              className="rounded bg-brand-accent px-5 py-3 text-white font-semibold hover:opacity-90"
            >
              Explore Programs
            </Link>
            <Link
              href="/membership"
              className="rounded border px-5 py-3 font-semibold hover:bg-gray-50"
            >
              Join Membership
            </Link>
            <Link
              href="/exercise-library"
              className="rounded border px-5 py-3 font-semibold hover:bg-gray-50"
            >
              Exercise Library
            </Link>
          </div>
        </div>
      </main>

      <SocialProof />
      <ProgramGrid />
      <PricingCTA />
      <LeadCapture />
    </>
  );
}