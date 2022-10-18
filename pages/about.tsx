import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

export default function About() {
  const titleText = `Best Seen on Foot | About`;

  return (
    <>
      <Layout>
        <Head>
          <title>{titleText}</title>
        </Head>
        <Container>
          <Intro />
          About
        </Container>
      </Layout>
    </>
  );
}
