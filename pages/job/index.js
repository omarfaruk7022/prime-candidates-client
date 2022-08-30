import React from "react";
import Footer from "../../components/Footer";
import Job from "../../components/Job";
import Navbar from "../../components/Navbar";

export default function ShowJob({ jobs }) {
  return (
    <>
      <Navbar>
        <div>
          {jobs.map((job) => (
            <Job key={job._id} job={job}></Job>
          ))}
        </div>
        <Footer></Footer>
      </Navbar>
    </>
  );
}

export const getStaticProps = async () => {
  // const res = await fetch("https://stormy-beach-33232.herokuapp.com/jobs");

  const res = await fetch("https://stormy-beach-33232.herokuapp.com/jobs");

  const jobs = await res.json();
  return {
    props: {
      jobs,
    },
  };
};
