import Container from "@/components/Container";
import Link from "next/link";

export default function Programs() {
  return (
    <main className="py-16">
      <Container>
        <h1>Programs</h1>
        <p className="mt-2 opacity-80">
          Start with Foundations, build Strength, or maintain In-Season readiness.
        </p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          <li className="rounded border p-6 hover:bg-gray-50">
            <h3 className="text-xl font-semibold">Handler’s Durability — Foundations (Minimalist)</h3>
            <p className="mt-2 opacity-80">No/low equipment, mobility + conditioning for the field.</p>
            <Link href="/programs/foundations-minimalist" className="mt-4 inline-block underline">View →</Link>
          </li>
          <li className="rounded border p-6 hover:bg-gray-50">
            <h3 className="text-xl font-semibold">Handler’s Durability — Strength Track</h3>
            <p className="mt-2 opacity-80">Dumbbells-based strength for tougher covers & longer days.</p>
            <Link href="/programs/foundations-strength" className="mt-4 inline-block underline">View →</Link>
          </li>
          <li className="rounded border p-6 hover:bg-gray-50">
            <h3 className="text-xl font-semibold">In-Season Maintenance & Recovery</h3>
            <p className="mt-2 opacity-80">Stay sharp all season without overreaching.</p>
            <Link href="/programs/in-season" className="mt-4 inline-block underline">View →</Link>
          </li>
        </ul>
      </Container>
    </main>
  );
}