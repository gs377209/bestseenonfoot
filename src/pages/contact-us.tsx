import {
  faCircleCheck,
  faCircleExclamation,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Head from "next/head";
import { FormEvent, useState } from "react";
import Container from "../components/container";
import SideBar from "../components/side-bar";
import { Post } from "../interfaces/post";
import { getAllPosts } from "../lib/api";
import { BASE_URL } from "../lib/constants";

type Props = {
  allPosts: Post[];
};

export default function ContactUs({ allPosts }: Props) {
  const titleText = `Contact Us | Best Seen on Foot`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<{
    isError: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setServerMessage(null);
    const form = event.target as HTMLFormElement;
    const data = {
      Email: form.Email.value as string,
      Message: form.Message.value as string,
      Name: form.Name.value as string,
    };

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const json = await response.json();
      if (!response.ok) {
        setServerMessage({
          isError: true,
          message: `Seems like something is wrong; feel free to email us directly at bestseenonfoot@gmail.com. Error: ${json}`,
        });
      } else {
        setServerMessage({
          isError: false,
          message:
            "Thanks for your message! We will get back to you as soon as possible!",
        });
        form.reset();
      }
    } catch (error) {
      setServerMessage({
        isError: true,
        message: `Seems like something is wrong; feel free to email us directly at bestseenonfoot@gmail.com. Error: ${error}`,
      });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="canonical" href={`${BASE_URL}/contact-us`} key="canonical" />
      </Head>
      <Container>
        <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:prose-xl lg:col-span-2">
          <h1>Contact Us</h1>
          <article>
            <p>Hi There,</p>
            <p>
              We are looking forward to hearing from you. Please feel free to
              get in touch via the form below, we will get back to you as soon
              as possible.
            </p>
            <p>Thanks,</p>
            <p>Best Seen On Foot</p>
            {serverMessage && (
              <div
                className={classNames(
                  "mb-4 rounded-lg bg-green-100 px-6 py-5 text-base text-green-700",
                  {
                    "bg-green-100 text-green-700": !serverMessage.isError,
                    "bg-red-100 text-red-700": serverMessage.isError,
                  },
                )}
              >
                {serverMessage.isError ? (
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="mr-3"
                  />
                ) : (
                  <FontAwesomeIcon icon={faCircleCheck} className="mr-3" />
                )}
                {serverMessage.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  required
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  required
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Message</span>
                <textarea
                  id="Message"
                  name="Message"
                  required
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  rows={3}
                ></textarea>
              </label>
              <button
                type="submit"
                className={classNames(
                  "inline-flex max-w-xs items-center justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-slate-400",
                  {
                    "cursor-not-allowed": isSubmitting,
                  },
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                    />{" "}
                    Processing...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </article>
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
