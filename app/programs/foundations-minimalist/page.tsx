import Container from "@/components/Container";
import Link from "next/link";

export default function FoundationsMinimalist() {
  return (
    <main className="py-16">
      <Container>
        <h1>Handler’s Durability — Foundations (Minimalist)</h1>
        <p className="mt-2 opacity-80">
          Zero/low equipment plan to build hip/ankle mobility, posture, and field stamina.
        </p>

        <div className="mt-6 space-y-2">
          <p>• Weeks 1–4: mobility + base conditioning</p>
          <p>• Weekly ruck/conditioner aligned to upland terrain</p>
          <p>• Warm-up & recovery protocols included</p>
        </div>

        <Link href="/membership" className="mt-8 inline-block rounded bg-brand-accent px-5 py-3 text-white font-semibold hover:opacity-90">
          Get Access in Membership
        </Link>
      </Container>
    </main>
  );
}