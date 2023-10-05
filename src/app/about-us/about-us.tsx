"use client";

import picOfGerrod from "@/assets/20180708_202213.jpg";
import picOfUs from "@/assets/20180922_193351.jpg";
import picOfLauren from "@/assets/OI000004.jpg";
import Container from "@/components/container";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { BASE_URL } from "@/lib/constants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Props = {
  allPosts: Post[];
};

export default function AboutUs({ allPosts }: Props) {
  const titleText = `About Us | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="canonical" href={`${BASE_URL}/about-us`} key="canonical" />
      </Head>
      <Container>
        <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:prose-xl lg:col-span-2">
          <h1>About Us</h1>
          <article>
            <h2>Welcome to Best Seen On Foot!</h2>
            <p>
              <Link href="/assets/20180922_193351.jpg">
                <Image
                  src={picOfUs}
                  alt="Picture of Lauren and Gerrod"
                  title="Picture of Lauren and Gerrod"
                  priority
                  placeholder="blur"
                />
              </Link>
            </p>
            <p>
              We are Gerrod and Lauren Schirtzinger, a fairly average american
              couple that have been married since September 2017. We have always
              enjoyed traveling together, and have recently decided to take that
              passion to the next level. So, Gerrod quit his job, and
              Lauren&apos;s boss was super-duper cool and is letting her take a
              leave of absence from work and we are taking a (hopefully) epic
              year-long trip around the world! While Lauren prefers to spend
              most of her time outdoors, Gerrod makes sure we occasionally talk
              to other travelers and explore museums and cities. Our goal is to
              share our travel stories so our family doesn&apos;t think we are
              dead. Oh and to maybe inspire as many people as we can to live a
              life of adventure and not be afraid to explore the unknown. We
              invite you to share in our journey as we hike, dive, and explore
              the world as it was meant to be seen, on foot!
            </p>
            <h2>SOME BACKGROUND</h2>
            <h3>Lauren Schirtzinger:</h3>
            <p>
              <Link href="/assets/OI000004.jpg">
                <Image
                  src={picOfLauren}
                  alt="Picture of Lauren"
                  title="Picture of Lauren"
                  placeholder="blur"
                />
              </Link>
            </p>
            <p>
              Hi! My name is Lauren. I am currently 27, and I am from Columbus,
              Ohio, USA. Growing up, my parents frequently took me to local,
              state, and various national parks where we would spend most of our
              time hiking. Growing up in a nature oriented family molded me into
              a huge nature nerd. After I traveled to the Bahamas and took a
              marine biology course which included receiving my scuba
              certification, my love for travel and seeing all that nature has
              to offer was solidified. And so, I went on to receive a degree in
              environmental science from The Ohio State University (O-H
              anyone?).
            </p>
            <p>
              Post-graduation I received a job as an environmental scientist at
              a consulting firm. As I know that a large portion of you have no
              idea what an environmental consultant does, just know that it is a
              combo of hiking/surveying, writing, and identifying soils and
              plants. It is not a very glamorous job, and I frequently have dirt
              under my nails and scratches on my legs. However, I love nature
              and tend to identify plants for people even when they don&apos;t
              ask and/or care to know what the plant is. I am excited to see as
              many places as possible where I have no clue what the plants are,
              and to see as many different habitats as possible!
            </p>
            <h3>Gerrod Schirtzinger:</h3>
            <p>
              <Link href="/assets/20180708_202213.jpg">
                <Image
                  src={picOfGerrod}
                  alt="Picture of Gerrod"
                  title="Picture of Gerrod"
                  placeholder="blur"
                />
              </Link>
            </p>
            <p>
              Gerrod is also currently 27, and he is also from Columbus, Ohio,
              USA. According to Gerrod, “I don&apos;t care what the about me
              says, what does yours say?” He grew up playing lots of video games
              and hanging out with cool people. He attended Ohio University,
              where he received a degree in electrical/computer engineering.
              Post graduation he received a job in computer programming building
              websites and doing a whole lot of stuff that I don&apos;t
              understand. Gerrod is very go with the flow, and much like
              childhood Gerrod, loves playing video games and meeting cool
              people. He always pushes me to experience the local culture and
              not panic when things don&apos;t go according to plan.
            </p>
          </article>
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}
