// app/page.tsx
import Container from "../components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Forged in the Field
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Upland hunter fitness HQ — field-ready strength, durability, and recovery.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link href="/programs" className="rounded bg-brand-accent px-5 py-3 text-white font-semibold hover:opacity-90">
            Explore Programs
          </Link>
          <Link href="/membership" className="rounded border px-5 py-3 font-semibold hover:bg-gray-50">
            Join Membership
          </Link>
          <Link href="/exercise-library" className="rounded border px-5 py-3 font-semibold hover:bg-gray-50">
            Exercise Library
          </Link>
        </div>
      </Container>
    </main>
  );
}