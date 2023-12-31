import { DocumentIcon, PhoneIcon } from "@heroicons/react/outline";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import supportImg from "../assets/20210923_105310.jpg";

const Contact = () => {
  const recaptchaRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    );

    e.target.reset();

    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <div name="Contact" className="relative isolate bg-white mt-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-20 sm:pt-28 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover opacity-80"
                  src={supportImg}
                  alt="/"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-900 font-bold">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-900"
                    aria-hidden="true"
                  />
                </dt>
                <dd>519-504-7241</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <DocumentIcon
                    className="h-7 w-6 text-gray-900"
                    aria-hidden="true"
                  />
                </dt>
                <dd>info@ccseng.ca</dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          onSubmit={sendEmail}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="user_name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900
shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6
text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900
shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6
text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900
shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdJTGInAAAAAO1Bv4-Wk8NZNgRbG_0D6ZC0Xkky"
              />
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm
font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
