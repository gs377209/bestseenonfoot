"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Best Seen on Foot",
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
          <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:prose-xl lg:col-span-3">
            <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
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
