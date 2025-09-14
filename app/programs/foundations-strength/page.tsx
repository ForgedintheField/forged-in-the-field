import Container from "@/components/Container";
import Link from "next/link";

export default function FoundationsStrength() {
  return (
    <main className="py-16">
      <Container>
        <h1>Handler’s Durability — Strength Track</h1>
        <p className="mt-2 opacity-80">
          Dumbbells + bodyweight to build resilient legs, back, and grip for the field.
        </p>

        <div className="mt-6 space-y-2">
          <p>• Weeks 1–4: hinge/squat/push/pull + ruck pairing</p>
          <p>• Field-specific accessory work (step-ups, carries)</p>
          <p>• Recovery templates for busy in-season weeks</p>
        </div>

        <Link href="/membership" className="mt-8 inline-block rounded bg-brand-accent px-5 py-3 text-white font-semibold hover:opacity-90">
          Get Access in Membership
        </Link>
      </Container>
    </main>
  );
}