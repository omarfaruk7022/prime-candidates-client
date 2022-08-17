import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Image from "next/image";
import manIcon from "../../images/Img-icon.png";
import Navber from "../../components/Navber";
import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";

const JobDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [jobDetails, setJobDetails] = useState({});
  useEffect(() => {
    if (router.isReady) {
      fetch(`https://stormy-beach-33232.herokuapp.com/jobdetails/${id}`);

      fetch(`https://stormy-beach-33232.herokuapp.com/jobdetails/${id}`)
        .then((res) => res.json())
        .then((data) => setJobDetails(data));
    }
  }, [id, router.isReady]);

  const handleApply = (e) => {
    // e.preventDefault();
    // fetch(`https://stormy-beach-33232.herokuapp.com/apply/${id}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify()

    // })
  }
  return (
    <Navber>
      <div className=" p-10">
        <div className="container max-w-[1080px] mx-auto">
          <h1 className="text-xl">JOB DETAILS</h1>
          <div className="text-xs breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Job details</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-5 container max-w-[1080px] mx-auto">
        <div className="flex flex-col  sm:flex-row gap-5 justify-center mx-5">
          <div className="flex flex-col gap-5 max-w-[600px]">
            <div className="flex  justify-between items-center p-3 rounded-tl-3xl rounded-br-3xl  bg-white shadow-lg  shadow-blue-50">
              <div className="flex gap-2 ">
                <div className="bg-base-100 rounded-tl-2xl rounded-br-2xl h-full flex items-center  shadow-lg  shadow-blue-50">
                  <Image src={manIcon} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-xs sm:text-xl">{jobDetails.jobTitle}</h1>
                  <p className="text-[8px] sm:text-xs">
                    Finix loans & funding agency
                  </p>
                  <p className="text-[8px] sm:text-xs">Vacancy: 01</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button 
                onClick={handleApply}
                className="btn btn-xs rounded-none btn-primary pt-[3px] text-[8px] lg:text-[10px] text-white font-normal hover:bg-black hover:text-white">
                  Apply
                </button>
                <h1 className="text-[8px] sm:text-xs">
                  Deadline: Dec 30, 2020
                </h1>
              </div>
            </div>
            <div className="p-3 rounded-tl-3xl rounded-br-3xl  bg-white shadow-lg  shadow-blue-50">
              <h1 className="text-xs sm:text-xl">Job Description</h1>
              <p className="text-[8px] sm:text-xs mt-3">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
                section 1.10.32. There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which dont
                look even slightly believable. If you are going to use a passage
                of Lorem Ipsum, you need to be sure there isnt anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or
                non-characteristic words etc. There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isnt anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-tl-3xl rounded-br-3xl  bg-white shadow-lg  shadow-blue-50">
              <div className="p-3 bg-base-200 rounded-tl-3xl">
                <h1 className="text-xs sm:text-xl">Share This Job</h1>
              </div>
              <div className="flex gap-2 p-3 ">
                <button className="btn btn-xs rounded-none btn-primary btn-outline">
                  <GrFacebookOption />
                </button>
                <button className="btn btn-xs rounded-none btn-primary btn-outline">
                  <ImLinkedin2 />
                </button>
                <button className="btn btn-xs rounded-none btn-primary btn-outline">
                  <GrFacebookOption />
                </button>
                <button className="btn btn-xs rounded-none btn-primary btn-outline">
                  <GrFacebookOption />
                </button>
              </div>
            </div>
            <div className="rounded-tl-3xl rounded-br-3xl  bg-white shadow-lg  shadow-blue-50">
              <div className="p-3 bg-base-200 rounded-tl-3xl">
                <h1 className="text-xs sm:text-xl">Job Overview</h1>
              </div>
              <div className="p-3 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      Published On
                    </h1>
                  </div>
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      <span className="mr-5">:</span> Oct 01, 2020
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">Vacancy</h1>
                  </div>
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      <span className="mr-5">:</span> 01
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">Job Type</h1>
                  </div>
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      <span className="mr-5">:</span> Part Time
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      Experience
                    </h1>
                  </div>
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      <span className="mr-5">:</span> 3 Years
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      Job Location
                    </h1>
                  </div>
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      <span className="mr-5">:</span> {jobDetails.jobLocation}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">Category</h1>
                  </div>
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      <span className="mr-5">:</span> {jobDetails.jobCategory}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">Salary</h1>
                  </div>
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      <span className="mr-5">:</span> {jobDetails.salaryRange}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      Application Deu
                    </h1>
                  </div>
                  <div className="w-[100px]">
                    <h1 className="text-[9px] text-xs font-light">
                      <span className="mr-5">:</span> Dec 30, 2020
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Navber>
  );
};

export default JobDetails;
