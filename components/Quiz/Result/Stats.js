import React from "react";
import PropTypes from "prop-types";
import { Segment, Header, Button } from "semantic-ui-react";

import ShareButton from "../ShareButton";
import { calculateScore, calculateGrade, timeConverter } from "../utils";

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz,
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <Segment className="w-1/2 mx-auto border-2 text-center border-blue-500 rounded-lg p-5">
      <Header className="text-4xl text-red-500" block>
        {remarks}
      </Header>
      <Header className="text-2xl mb-2" block>
        Grade: {grade}
      </Header>
      <Header className="text-xl mb-2" block>
        Total Questions: {totalQuestions}
      </Header>
      <Header className="text-xl mb-2" block>
        Correct Answers: {correctAnswers}
      </Header>
      <Header className="text-xl mb-2" block>
        Your Score: {score}%
      </Header>
      <Header className="text-xl mb-2" block>
        Passing Score: 60%
      </Header>
      <Header className="text-xl mb-2" block>
        Time Taken:{" "}
        {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
      </Header>
      <div style={{ marginTop: 35 }}>
        <Button
          className="bg-blue-500  text-white p-2 rounded-md"
          content="Play Again"
          onClick={replayQuiz}
          icon="redo"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          className="bg-blue-500 text-white p-2 rounded-md"
          content="Back to Home"
          onClick={resetQuiz}
          icon="home"
        />
        <ShareButton />
      </div>
    </Segment>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default Stats;
