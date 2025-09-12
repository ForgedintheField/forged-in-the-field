export default function HomePage() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Forged in the Field</h2>
      <p className="text-lg text-gray-700 mb-6">
        Your upland hunting fitness and bird dog training platform.
      </p>
      <a
        href="/programs"
        className="inline-block rounded bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
      >
        Explore Programs
      </a>
    </section>
  );
}
