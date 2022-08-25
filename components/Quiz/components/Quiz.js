import React from "react";

const Quiz = ({
  showQuiz,
  question,
  quizs,
  checkAnswer,
  correctAnswer,
  selectedAnswer,
  questionIndex,
  nextQuestion,
  showTheResult,
}) => {
  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showQuiz ? "block" : "none"}` }}
    >
      <div className="w-1/2 mx-auto">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <div
              className="card p-4"
              style={{ background: "#1D4ED8", borderColor: "#646464" }}
            >
              <div className="d-flex justify-content-between gap-md-3">
                <h5 className="mb-2 fs-normal text-3xl lh-base">
                  {question?.question}
                </h5>
                <h5 className="text-2xl">
                  {quizs.indexOf(question) + 1} / {quizs?.length}
                </h5>
              </div>
              <div>
                {question?.options?.map((item, index) => (
                  <button
                    key={index}
                    className={`option w-100 flex flex-col text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${
                      correctAnswer === item && "bg-success"
                    }`}
                    onClick={(event) => checkAnswer(event, item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {questionIndex + 1 !== quizs.length ? (
                <button
                  className="btn py-2 w-100 mt-3 bg-blue-500 text-light fw-bold"
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
                  onClick={showTheResult}
                  disabled={!selectedAnswer}
                >
                  Show Result
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
