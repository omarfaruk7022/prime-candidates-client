import React from "react";
import Footer from "../../components/Footer";
import Job from "../../components/Job";
import Navber from "../../components/Navber";

export default function ShowJob({ jobs }) {
  return (
    <>
      <Navber>
        <div>
          {jobs.map((job) => (
            <Job key={job._id} job={job}></Job>
          ))}
        </div>
        <Footer></Footer>
      </Navber>
    </>
  );
}

export const getStaticProps = async () => {
<<<<<<< HEAD
  const res = await fetch("http://localhost:5000/jobs");
=======
  const res = await fetch("https://stormy-beach-33232.herokuapp.com/jobs");
>>>>>>> 1dacd76adf833871380d5ae8a960f28b88003bd8
  const jobs = await res.json();

  return {
    props: {
      jobs,
    },
  };
};
