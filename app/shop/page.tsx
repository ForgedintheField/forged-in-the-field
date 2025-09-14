import Container from "@/components/Container";
import Link from "next/link";

export default function Shop() {
  return (
    <main className="py-16">
      <Container>
        <h1>Shop</h1>
        <p className="mt-2 opacity-80">Leather goods, tools, and the future vest.</p>

        <div className="mt-8">
          <Link
            href="https://your-shopify-url.com" // replace with Shopify storefront URL
            className="inline-block rounded bg-black px-5 py-3 text-white font-semibold hover:opacity-90"
            target="_blank"
          >
            Visit Shopify Store →
          </Link>
        </div>
      </Container>
    </main>
  );
}