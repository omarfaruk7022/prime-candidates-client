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
            <div className="card p-4">
              <div className="p-4 rounded-md text-black">
                <div className="d-flex justify-content-between gap-md-3">
                  <h5 className="mb-2 fs-normal text-2xl">
                    {question?.question}
                  </h5>
                  <h5 className="text-2xl">
                    {quizs.indexOf(question) + 1} / {quizs?.length}
                  </h5>
                </div>
                <div className="text-blue-500">
                  {question?.options?.map((item, index) => (
                    <button
                      key={index}
                      className={`option w-100 flex flex-col text-start btn hover:text-white text-black py-2 px-3 mt-3 rounded bg-white border-blue-300 border-2 w-full ${
                        correctAnswer === item && "bg-success"
                      }`}
                      onClick={(event) => checkAnswer(event, item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
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
