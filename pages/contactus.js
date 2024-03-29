import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Navbar from "../components/Navbar";

const Contact = () => {
  const form = useRef();
  const handleBack = () => {
    window.history.back();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0iq6a62",
        "template_da8b04c",
        form.current,
        "NU1AbEAbbOjC8_grS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    swal("Good job!", "You clicked the button!", "success");
  };
  return (
    <div>
      <Navbar>
        <div className="my-[150px] md:px-12">
          <button
            onClick={handleBack}
            className="text-blue-400 text-bold text-xl ml-40 "
          >
            Back
          </button>
          <h2 className=" text-3xl text-primary text-center md:mb-[50px]">
            Contact us
          </h2>
          <section className="py-6 relative md:mt-12">
            <div className="grid max-w-6xl grid-cols-1 px-4 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
              <div className="py-6 md:py-0 md:px-6 md:mt-16">
                <h1 className="text-4xl font-bold">Our Contact</h1>
                <p className="pt-2 pb-4">
                  Fill in the form to start a conversation
                </p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Dhaka,Bangladesh</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>+8801888702284</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>prime-candidates@gmail.com</span>
                  </p>
                </div>
              </div>
              <form
                ref={form}
                noValidate=""
                className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
              >
                <label className="block">
                  <span className="mb-1 text-secondary">Your Full name</span>
                  <input
                    name="name"
                    className="block bg-gray-200 w-full h-10 rounded-md shadow-sm  "
                  />
                </label>
                <label className="block">
                  <span className="mb-1 text-secondary ">
                    Your Email address
                  </span>
                  <input
                    name="email"
                    className="bg-gray-200 block w-full h-10 rounded-md shadow-sm  "
                  />
                </label>
                <label className="block">
                  <span className="mb-1 text-secondary">Message</span>
                  <textarea
                    rows="3"
                    name="message"
                    className=" bg-gray-200 block w-full rounded-md "
                    spellCheck="false"
                  ></textarea>
                </label>
                <button
                  onClick={sendEmail}
                  type="button"
                  className="btn btn-outline self-center hover:bg-secondary hover:border-secondary"
                >
                  Send Email
                </button>
              </form>
            </div>
          </section>
        </div>
      </Navbar>
    </div>
  );
};

export default Contact;
