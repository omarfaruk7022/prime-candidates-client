import React from "react";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import App from "../components/Quiz/App/App";

const quizzes = () => {
  return (
    <div>
      <Navber>
        <div>
          <App />
        </div>
      </Navber>
      <Footer />
    </div>
  );
};

export default quizzes;
