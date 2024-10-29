"use client";

import { ContactFormState, sendContactRequest } from "@/lib/actions";
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sendGTMEvent } from "@next/third-parties/google";
import classNames from "classnames";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";

const initialState: ContactFormState = {
  isError: false,
  message: null,
};

interface Props {
  consentGranted: boolean;
  isPending: boolean;
}

function SubmitButton({ consentGranted, isPending }: Props) {
  const { data } = useFormStatus();

  useEffect(() => {
    if (data && consentGranted) {
      const formData = JSON.stringify({
        email: data.get("email"),
        message: data.get("message"),
        name: data.get("name"),
      });

      sendGTMEvent({
        action: "submit_form",
        category: "Contact",
        event: "submit_form",
        label: formData,
        value: formData,
      });
    }
  }, [consentGranted, data]);

  return (
    <button
      type="submit"
      className={classNames(
        "inline-flex max-w-xs items-center justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-slate-400",
        {
          "cursor-not-allowed": isPending,
        },
      )}
      disabled={isPending}
    >
      {isPending ? (
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

export default function ContactUs({ consentGranted }: Props) {
  const [state, formAction, isPending] = useActionState(
    sendContactRequest,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="grid grid-cols-1 gap-6"
      aria-describedby="form-status"
    >
      {state.message && (
        <div
          key={state.message}
          aria-live="polite"
          id="form-status"
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
      <SubmitButton consentGranted={consentGranted} isPending={isPending} />
    </form>
  );
}
