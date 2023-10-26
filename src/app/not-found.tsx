import Container from "@/components/container";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: `${BASE_URL}/not-found`,
  },
  title: `Page Not Found | Best Seen on Foot`,
};

export default function NotFound() {
  return (
    <Container>
      <section className="container prose mx-auto max-w-none md:prose-lg lg:prose-xl lg:col-span-3">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
          Page Not Found
        </h1>
        <p className="mt-5">
          Head to the{" "}
          <Link href="/" className="font-medium text-gray-900 underline">
            Homepage
          </Link>{" "}
          to find what you are looking for...
        </p>
      </section>
    </Container>
  );
}
