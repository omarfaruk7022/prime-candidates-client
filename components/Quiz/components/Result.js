import React from "react";

const Result = ({ showResult, quizs, marks, startOver }) => {
  return (
    <section
      className="bg-blue-500 w-1/2 mx-auto rounded-md  text-white"
      style={{ display: `${showResult ? "block" : "none"}` }}
    >
      <div>
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-6">
            <div
              className={`text-light text-center p-5 rounded ${
                marks > (quizs.length * 5) / 2 ? "bg-success" : "bg-danger"
              }`}
            >
              <h1 className="mb-2 text-4xl fw-bold">
                {marks > (quizs.length * 5) / 2 ? "Awesome!" : "Oops!"}
              </h1>
              <h3 className="mb-3 text-2xl fw-bold">
                Your score is {marks} out of {quizs.length * 5}
              </h3>

              <button
                onClick={startOver}
                className="btn py-2 px-4 btn-light fw-bold d-inline"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
