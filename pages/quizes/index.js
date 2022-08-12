import { useState } from "react";
import Footer from "../../components/Footer";
import Navber from "../../components/Navber";

import QuizHome from "../../components/Quiz/quizHome";

const index = () => {
  return (
    <div>
      <Navber>
        <QuizHome></QuizHome>
        <Footer />
      </Navber>
    </div>
  );
};

export default index;
