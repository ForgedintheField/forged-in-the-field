import Container from "@/components/Container";
import Link from "next/link";

export default function InSeason() {
  return (
    <main className="py-16">
      <Container>
        <h1>In-Season Maintenance & Recovery</h1>
        <p className="mt-2 opacity-80">
          Micro-dose strength, durability, and recovery so you hunt more and ache less.
        </p>

        <div className="mt-6 space-y-2">
          <p>• 2 short sessions/week + optional mobility primer</p>
          <p>• Post-hunt recovery flows (10–15 min)</p>
          <p>• Terrain-aware conditioning: hills, sand, CRP</p>
        </div>

        <Link href="/membership" className="mt-8 inline-block rounded bg-brand-accent px-5 py-3 text-white font-semibold hover:opacity-90">
          Join Membership
        </Link>
      </Container>
    </main>
  );
}