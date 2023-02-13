import { BASE_URL } from "../lib/constants";
import Container from "../components/container";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  const titleText = `Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="canonical" href={`${BASE_URL}/404`} key="canonical" />
      </Head>
      <Container>
        <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:prose-xl lg:col-span-2">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            404 - Page Not Found
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
    </>
  );
}
