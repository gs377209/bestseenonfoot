"use client";

import { ContactFormState, sendContactRequest } from "@/app/contact-us/actions";
import * as gtag from "@/lib/gtag";
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState: ContactFormState = {
  isError: false,
  message: null,
};

function SubmitButton() {
  const { pending, data } = useFormStatus();

  useEffect(() => {
    if (data) {
      const formData = JSON.stringify({
        email: data.get("email"),
        message: data.get("message"),
        name: data.get("name"),
      });

      gtag.event({
        action: "submit_form",
        category: "Contact",
        label: formData,
        value: formData,
      });
    }
  }, [data]);

  return (
    <button
      type="submit"
      className={classNames(
        "inline-flex max-w-xs items-center justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-slate-400",
        {
          "cursor-not-allowed": pending,
        },
      )}
      disabled={pending}
    >
      {pending ? (
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
  );
}

export default function ContactUs() {
  const [state, formAction] = useFormState(sendContactRequest, initialState);

  return (
    <form action={formAction} className="grid grid-cols-1 gap-6">
      {state.message && (
        <div
          aria-live="polite"
          role="status"
          className={classNames(
            "mb-4 rounded-lg bg-green-100 px-6 py-5 text-base text-green-700",
            {
              "bg-green-100 text-green-700": !state.isError,
              "bg-red-100 text-red-700": state.isError,
            },
          )}
        >
          {state.isError ? (
            <FontAwesomeIcon icon={faCircleExclamation} className="mr-3" />
          ) : (
            <FontAwesomeIcon icon={faCircleCheck} className="mr-3" />
          )}
          {state.message}
          {state.errorList && (
            <ul className="marker:text-red-700">
              {state.errorList.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      <label className="block">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          id="name"
          name="name"
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
          id="email"
          name="email"
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
          id="message"
          name="message"
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
      <SubmitButton />
    </form>
  );
}
