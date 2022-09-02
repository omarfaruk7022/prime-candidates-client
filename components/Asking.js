import React from "react";

const Asking = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-28 mb-12 text-secondary">
        Ask anything
      </h1>
      <div className="space-y-4 px-3 md:px-28">
        <details
          className="p-6 border-l-4 border-green-500 bg-gray-50 group"
          open
        >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
             What is the main target of your web site (Prime candidates) ?
            </h5>

            <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Basically we want candidates who are looking for jobs or internships in mind, we want to help them on this platform.
          </p>
        </details>

        <details className="p-6 border-l-4 border-green-500 bg-gray-50 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              How to connect with the Prime candidates team ?
            </h5>

            <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Dear ... we are availabe in Facebook,Instagram,Twitter,Linkedin,Github,Medium,Stackoverflow,Reddit,Slack,Telegram,Discord,Whatsapp,Skype,Email,Phone,etc.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Asking;
