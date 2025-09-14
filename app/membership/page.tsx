import Container from "@/components/Container";
import Link from "next/link";

export default function Membership() {
  return (
    <main className="py-16">
      <Container>
        <h1>Field Strong Membership — $29/mo</h1>
        <p className="mt-2 opacity-80">
          Weekly programming (Minimalist + Strength), In-Season plan, recovery flows, and private community.
        </p>

        <ul className="mt-6 list-disc pl-6 space-y-1">
          <li>Weekly training plans & video cues</li>
          <li>Exercise Library access</li>
          <li>Community Q&A + Office Hours</li>
        </ul>

        <Link href="/community" className="mt-8 inline-block rounded border px-5 py-3 font-semibold hover:bg-gray-50">
          See the Community
        </Link>
      </Container>
    </main>
  );
}