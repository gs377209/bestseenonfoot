import ContactUsForm from "@/components/ContactUsForm";
import Container from "@/components/container";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { getConsentCookie } from "@/lib/actions";
import { Suspense } from "react";

interface Props {
  allPosts: Post[];
}

export default async function ContactUs({ allPosts }: Props) {
  const consentGranted = await getConsentCookie();

  return (
    <Container>
      <section className="container prose mx-auto max-w-none md:prose-lg lg:prose-xl lg:col-span-2">
        <h1>Contact Us</h1>
        <article>
          <p>Hi There,</p>
          <p>
            We are looking forward to hearing from you. Please feel free to get
            in touch via the form below, we will get back to you as soon as
            possible.
          </p>
          <p>Thanks,</p>
          <p>Best Seen On Foot</p>
        </article>
        <Suspense fallback={<form className="grid grid-cols-1 gap-6"></form>}>
          <ContactUsForm consentGranted={consentGranted} />
        </Suspense>
      </section>
      <Suspense
        fallback={
          <aside className="animate-pulse mt-4 lg:mt-0 lg:sticky lg:top-[3.8125rem] lg:col-span-1 lg:col-start-3 lg:h-[calc(100vh-2.75rem)] lg:self-start lg:overflow-y-auto lg:overflow-x-hidden"></aside>
        }
      >
        <SideBar allPosts={allPosts} />
      </Suspense>
    </Container>
  );
}
