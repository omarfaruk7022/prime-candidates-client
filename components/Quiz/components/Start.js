import React from "react";

const Start = ({ startQuiz, showStart }) => {
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <section>
        <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src="https://i.ibb.co/6gdpzRM/Screenshot-2022-09-02-160744.png"
                alt="Man using a computer"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Grow your audience
              </h2>

              <p className="my-4 text-gray-600 text-xl">
               You are welcome to our Quiz and answer 
              </p>

              <button
                onClick={startQuiz}
                className="btn text-white btn-outline bg-primary hover:bg-secondary border-0"
              >
                Click to Start Quiz
                <span className="text-sm font-medium"></span>
                <svg
                  className="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4">Basic React JS Quiz</h1>
            <button
              onClick={startQuiz}
              className="btn text-white btn-outline bg-primary hover:bg-secondary border-0"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Start;
