import React from "react";


  const handleBack = () => {
    window.history.back();
  };

const Result = ({ showResult, quizs, marks, startOver }) => {
  return (
    <section
      className="bg-base-200 w-1/2 mx-auto rounded-md  text-white"
      style={{ display: `${showResult ? "block" : "none"}` }}
    >
      <div>
        <div className=" text-black row vh-100 align-items-center justify-content-center">
          <div className="col-lg-6">
            <div
              className={`text-center p-5 rounded ${
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
              onClick={handleBack}
              >Back</button>
              <button
                onClick={startOver}
                className="btn text-white btn-outline bg-primary hover:bg-secondary border-0"
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
