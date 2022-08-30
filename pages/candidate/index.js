import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const candidatePage = () => {
  return (
    <Navbar>
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-4xl text-secondary tracking-widest">
          Working on Candidates....
        </h2>
      </div>
      <Footer></Footer>
    </Navbar>
  );
};

export default candidatePage;
