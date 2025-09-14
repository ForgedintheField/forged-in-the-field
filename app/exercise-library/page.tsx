import Container from "@/components/Container";

export default function ExerciseLibrary() {
  return (
    <main className="py-16">
      <Container>
        <h1>Exercise Library</h1>
        <p className="mt-2 opacity-80">
          Short videos and cues for every movement in your programs.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded border p-4">
            <h3 className="font-semibold">Hip Circles</h3>
            <p className="opacity-80">Mobilize hips before rucks & long covers.</p>
          </div>
          <div className="rounded border p-4">
            <h3 className="font-semibold">RDL (Dumbbell)</h3>
            <p className="opacity-80">Posterior-chain strength for uneven ground.</p>
          </div>
          <div className="rounded border p-4">
            <h3 className="font-semibold">Step-Ups</h3>
            <p className="opacity-80">Upland-specific climbing capacity.</p>
          </div>
        </div>
      </Container>
    </main>
  );
}