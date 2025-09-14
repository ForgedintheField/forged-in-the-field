import Container from "@/components/Container";
import Link from "next/link";

export default function Community() {
  return (
    <main className="py-16">
      <Container>
        <h1>Community</h1>
        <p className="mt-2 opacity-80">
          Weekly check-ins, form checks, and hunts & dogs talk — all in Mighty.
        </p>
        <Link
          href="https://www.mightynetworks.com/" // replace with your Mighty link
          className="mt-6 inline-block rounded bg-brand-accent px-5 py-3 text-white font-semibold hover:opacity-90"
          target="_blank"
        >
          Enter Community →
        </Link>
      </Container>
    </main>
  );
}