import React, { useEffect } from "react";
import Navber from "../../components/Navber";
import swal from "sweetalert";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import { format } from "date-fns";

const Jobapply = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const [state, setState] = useState();
  const date = new Date();
  const formattedDate = format(date, "PP");
  const formattedDate2 = format(date, "p");
  console.log(formattedDate2);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const job = data.filter((job) => job._id === id);
        setState(job[0]);
        console.log(job[0]);
      });
  }, []);

  const handleApplyJob = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const address = e.target.address.value;
    const resume = e.target.resume.value;

    const jobApply = {
      name,
      email,
      number,
      address,
      resume,
      appliedJob: state.jobTitle,
      appliedSalary: state.jobSalary,
      appliedDescription: state.jobDescription,
      appliedDate: formattedDate,
      appliedTime: formattedDate2,
      appliedCompany: state.companyName,
    
    };

    console.log(jobApply);
    if (
      jobApply.name &&
      jobApply.email &&
      jobApply.number &&
      jobApply.address &&
      jobApply.resume
    ) {
      fetch("https://stormy-beach-33232.herokuapp.com/apply", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(jobApply),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            swal("Good job!", "Job applied successfully!", "success");
          }
        });

      e.target.reset();
    } else {
      swal("Hey dear!", "Please fill-up all of these fields", "info");
    }
  };
  return (
    <Navber>
      <div className="container max-w-[1080px] mx-auto my-28">
        <form onSubmit={handleApplyJob} className="flex flex-col items-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered rounded-none w-full max-w-xs  border-primary focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered rounded-none w-full max-w-xs  border-primary focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="Enter your number"
              className="input input-bordered rounded-none w-full max-w-xs  border-primary focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="input input-bordered rounded-none w-full max-w-xs  border-primary focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resume PDF Link</span>
            </label>
            <input
              type="file"
              name="resume"
              placeholder="Enter your resume link"
              className="input input-bordered rounded-none pt-1 w-full max-w-xs  border-primary focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-xs mt-5">
            <button className="btn btn-primary rounded-none text-white font-normal hover:bg-black hover:text-white">
              Confirm
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </Navber>
  );
};

export default Jobapply;
