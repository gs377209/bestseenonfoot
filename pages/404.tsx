import Container from "../components/container";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  const titleText = `Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Container>
        <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
          404 - Page Not Found
        </h1>
        <p className="mt-5">
          Head to the{" "}
          <Link href="/">
            <a className="text-blue-500 underline">Homepage</a>
          </Link>{" "}
          to find what you are looking for...
        </p>
      </Container>
    </>
  );
}
