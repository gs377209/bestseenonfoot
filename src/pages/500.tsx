import { BASE_URL } from "../lib/constants";
import Container from "../components/container";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom500() {
  const titleText = `Best Seen on Foot`;
  const { reload } = useRouter();

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="canonical" href={`${BASE_URL}/500`} key="canonical" />
      </Head>
      <Container>
        <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:col-span-2 lg:prose-xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            500 - Server-side error occurred
          </h1>
          <p className="mt-5">
            Try{" "}
            <button
              className="font-medium text-gray-900 underline"
              onClick={() => reload()}
            >
              refreshing
            </button>{" "}
            the page or going back to the{" "}
            <Link href="/" className="font-medium text-gray-900 underline">
              Homepage
            </Link>
          </p>
        </section>
      </Container>
    </>
  );
}
