import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Menu } from "semantic-ui-react";

import Stats from "./Stats";
import QNA from "./QNA";

const Result = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  replayQuiz,
  resetQuiz,
}) => {
  const [activeTab, setActiveTab] = useState("Stats");

  const handleTabClick = (e, { name }) => {
    setActiveTab(name);
  };

  return (
    <Container>
      <Menu className="w-1/2 mx-auto grid grid-cols-2 mb-10">
        <Menu.Item
          className="bg-blue-500 w-1/4 mx-auto text-center  text-white p-2 rounded-md"
          name="Stats"
          active={activeTab === "Stats"}
          onClick={handleTabClick}
        />
        <Menu.Item
          className="bg-blue-500 w-1/4 mx-auto text-white text-center p-2 rounded-md"
          name="QNA"
          active={activeTab === "QNA"}
          onClick={handleTabClick}
        />
      </Menu>

      {activeTab === "Stats" && (
        <Stats
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          timeTaken={timeTaken}
          replayQuiz={replayQuiz}
          resetQuiz={resetQuiz}
        />
      )}

      {activeTab === "QNA" && <QNA questionsAndAnswers={questionsAndAnswers} />}
      <br />
    </Container>
  );
};

Result.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  questionsAndAnswers: PropTypes.array.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default Result;
