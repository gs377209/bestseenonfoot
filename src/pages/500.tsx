import Head from "next/head";
import Link from "next/link";
import ReloadPageButton from "src/components/reload-page-button";
import Container from "../components/container";
import { BASE_URL } from "../lib/constants";

export default function Custom500() {
  const titleText = `Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="canonical" href={`${BASE_URL}/500`} key="canonical" />
      </Head>
      <Container>
        <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:prose-xl lg:col-span-2">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            500 - Server-side error occurred
          </h1>
          <p className="mt-5">
            Try <ReloadPageButton>refreshing</ReloadPageButton> the page or
            going back to the{" "}
            <Link href="/" className="font-medium text-gray-900 underline">
              Homepage
            </Link>
          </p>
        </section>
      </Container>
    </>
  );
}
