"use client";

import Container from "@/components/container";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: `${BASE_URL}/error`,
  },
  title: "Error",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Container>
          <section className="container prose mx-auto max-w-none md:prose-lg lg:prose-xl lg:col-span-3">
            <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8">
              Something Went Wrong!
            </h1>
            <p className="mt-5">
              <button
                className="font-medium text-gray-900 underline"
                onClick={() => reset()}
              >
                Try refreshing the page
              </button>{" "}
              or going back to the{" "}
              <Link href="/" className="font-medium text-gray-900 underline">
                Homepage
              </Link>
            </p>
          </section>
        </Container>
      </body>
    </html>
  );
}
