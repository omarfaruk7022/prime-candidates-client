import React, { useEffect, useRef, useState } from "react";
import { FiEdit, FiDownload, FiPlus } from "react-icons/fi";
import { TiPointOfInterest } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { saveAs } from "file-saver";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import swal from "sweetalert";

const ResumeBuilder = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const careerObjectiveRef = useRef(null);
  const titleRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const urlRef = useRef(null);
  const descriptionRef = useRef(null);
  const courseNameRef = useRef(null);
  const startDateCourseRef = useRef(null);
  const endDateCourseRef = useRef(null);
  const CourseInstituteNameRef = useRef(null);
  // const titlePostRef = useRef(null);
  // const startDatePostRef = useRef(null);
  // const endDatePostRef = useRef(null);
  // const urlPostRef = useRef(null);
  // const descriptionPostRef = useRef(null);
  const [career, setCareer] = useState();
  const [project, setProject] = useState();
  const [course, setCourse] = useState();
  const email = user?.email;
  // const saveFile = () => {
  //   saveAs(
  //     "https://drive.google.com/uc?export=download&id=1Dcmlg0DWZcgsvy5iTulJCMLWs-G-lveA",
  //     "example.pdf"
  //   );
  // };

  // -----------------------Project section works---------------------
  const handleSubmitForProjectPut = () => {
    const projectData = {
      title: titleRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
      url: urlRef.current.value,
      description: descriptionRef.current.value,
      email: email,
    };
    fetch(`http://localhost:5000/projects/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    console.log(projectData);
  };
  const handleProjectDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your file has been deleted!", {});
        fetch(`http://localhost:5000/projects/${email}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    console.log("clicked");
  };
  useEffect(() => {
    fetch(`http://localhost:5000/projects/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);
 
  // --------------------- Course works section ---------------------
  const handleCoursePut = () => {
    const courseData = {
      courseName: courseNameRef.current.value,
      startDate: startDateCourseRef.current.value,
      endDate: endDateCourseRef.current.value,
      instituteName: CourseInstituteNameRef.current.value,
      email: email,
    }
    fetch(`http://localhost:5000/course/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      })
    console.log(courseData);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/course/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data?.data);
        console.log(data?.data);
      })
  },[email])
  const handleCourseDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your file has been deleted!", {});
        fetch(`http://localhost:5000/course/${email}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          }).catch((err) => {
            console.log(err);
          }
        );
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    console.log("clicked");
  }

  // ------------------ Career objective works section ---------------
  const handleCareerObjective = () => {
    const careerObjective = careerObjectiveRef.current.value;
    const careerObjectiveData = {
      email: email,
      body: careerObjective,
    };
    fetch(`http://localhost:5000/career/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(careerObjectiveData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("Good job!", "You clicked the button!", "success");
      });
  };
  // const handleSubmitForProjectPost = () => {
  //   const projectDataForPost = {
  //     title: titlePostRef.current.value,
  //     startDate: startDatePostRef.current.value,
  //     endDate: endDatePostRef.current.value,
  //     url: urlPostRef.current.value,
  //     description: descriptionPostRef.current.value,
  //     email: email,
  //   };
  //   fetch(`http://localhost:5000/projects`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(projectDataForPost),

  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       swal("Good job!", "Your project is added successfully", "success");
  //     })
  // }
  useEffect(() => {
    fetch(`http://localhost:5000/career/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data);
        setCareer(data?.data?.body);
      });
  }, [user?.email]);

  useEffect(() => {
    // if there is no authenticated user, redirect to login page_

    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className="container max-w-[1080px] mx-auto my-16">
      <h1 className="uppercase text-3xl text-center text-primary font-bold mb-10">
        Resume
      </h1>
      <div className="border-2 border-base-200 px-5 md:px-28 py-24">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">Your Name Here</h3>
              <label
                htmlFor="my-modal-6"
                className="btn modal-button border-0 bg-transparent hover:bg-transparent"
              >
                <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              </label>
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-middle">
                <div className="modal-box">
                  <form action="">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Type your full name"
                        className="input input-bordered w-full focus:outline-none rounded-none"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Type your email address"
                        className="input input-bordered w-full focus:outline-none rounded-none"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        type="number"
                        name="number"
                        placeholder="(Ex) +880-1888295295"
                        className="input input-bordered w-full focus:outline-none rounded-none"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Address</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="Type you address"
                        className="input input-bordered w-full focus:outline-none rounded-none"
                      />
                    </div>
                  </form>
                  <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn btn-error">
                      Cancel
                    </label>
                    <label
                      type="submit"
                      htmlFor="my-modal-6"
                      className="btn btn-success"
                    >
                      Done
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <p>{email}</p>
            <p>+880 1888295295</p>
            <p>Chittagong</p>
          </div>
          <div className="flex items-center justify-center gap-1 text-xl text-secondary cursor-pointer">
            <FiDownload></FiDownload>
            <button
            // onClick={saveFile}
            >
              Download
            </button>
          </div>
        </div>

        <div className="border border-base-200 my-10 bg-base-200"></div>

        {/* CAREER OBJECTIVE part start */}

        <div>
          <div className="flex justify-between">
            <h3 className="uppercase font-semibold">CAREER OBJECTIVE</h3>
            <label
              htmlFor="my-modal-7"
              className="btn modal-button border-0 bg-transparent hover:bg-transparent"
            >
              <FiEdit className="cursor-pointer text-secondary"></FiEdit>
            </label>
            <input type="checkbox" id="my-modal-7" className="modal-toggle" />
            <div className="modal modal-middle">
              <div className="modal-box">
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">CAREER OBJECTIVE</span>
                    </label>
                    <textarea
                      ref={careerObjectiveRef}
                      type="text"
                      name="description"
                      className="input input-bordered w-full h-24 focus:outline-none rounded-none"
                    />
                  </div>
                </form>
                <div className="modal-action">
                  <label htmlFor="my-modal-7" className="btn btn-error">
                    Cancel
                  </label>
                  <label
                    type="submit"
                    htmlFor="my-modal-7"
                    className="btn btn-success"
                  >
                    <button onClick={handleCareerObjective}>Done</button>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5">{career ? career : "N/A"}</p>
        </div>
        {/* CAREER OBJECTIVE part End */}

        <div className="border border-base-200 my-10 bg-base-200"></div>

        {/* SKILLS part start */}
        <div>
          <h3 className="uppercase font-semibold">SKILLS</h3>

          <div className="grid grid-cols-4">
            <div className="flex items-center gap-2 mt-5">
              <TiPointOfInterest></TiPointOfInterest>
              <p>HTML5</p>
              <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              <MdDelete className="cursor-pointer text-red-500"></MdDelete>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <TiPointOfInterest></TiPointOfInterest>
              <p>HTML5</p>
              <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              <MdDelete className="cursor-pointer text-red-500"></MdDelete>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <TiPointOfInterest></TiPointOfInterest>
              <p>HTML5</p>
              <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              <MdDelete className="cursor-pointer text-red-500"></MdDelete>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <TiPointOfInterest></TiPointOfInterest>
              <p>HTML5</p>
              <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              <MdDelete className="cursor-pointer text-red-500"></MdDelete>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <TiPointOfInterest></TiPointOfInterest>
              <p>HTML5</p>
              <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              <MdDelete className="cursor-pointer text-red-500"></MdDelete>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <TiPointOfInterest></TiPointOfInterest>
              <p>HTML5</p>
              <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              <MdDelete className="cursor-pointer text-red-500"></MdDelete>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <TiPointOfInterest></TiPointOfInterest>
              <p>HTML5</p>
              <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              <MdDelete className="cursor-pointer text-red-500"></MdDelete>
            </div>
          </div>

          <label
            htmlFor="my-modal-8"
            className="btn modal-button border-0 bg-transparent hover:bg-transparent"
          >
            <div className="flex items-center gap-2 text-secondary mt-9 cursor-pointer">
              <FiPlus></FiPlus>
              <p>Add Skill</p>
            </div>
          </label>
          <input type="checkbox" id="my-modal-8" className="modal-toggle" />
          <div className="modal modal-middle">
            <div className="modal-box">
              <form action="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ADD SKILL</span>
                  </label>
                  <input
                    type="text"
                    name="skill"
                    placeholder="Add skill"
                    className="input input-bordered w-full focus:outline-none rounded-none"
                  />
                </div>
              </form>
              <div className="modal-action">
                <label htmlFor="my-modal-8" className="btn btn-error">
                  Cancel
                </label>
                <label
                  type="submit"
                  htmlFor="my-modal-8"
                  className="btn btn-success"
                >
                  Done
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* SKILLS part end */}

        <div className="border border-base-200 my-10 bg-base-200"></div>

        {/* PERSONAL PROJECTS part starts here */}
        <div>
          <h3 className="uppercase font-semibold mb-6">PERSONAL PROJECTS</h3>
          <div className="flex">
            <div className="text-lg mr-3">
              <TiPointOfInterest></TiPointOfInterest>
            </div>
            <div>
              <h3>{project?.title ? project?.title : "N/A"}</h3>
              <br />
              <p>
                {project?.startDate ? project?.startDate:"N/A"} - {project?.endDate ? project?.endDate:"N/A"}
              </p>
              <br />
              <a href="#" className="text-secondary cursor-pointer">
                {project?.url ? project?.url : "N/A"}
              </a>
              <br />
              <p>{project?.description ? project?.description : "N/A"}</p>
            </div>
            <div className="flex gap-4">
              <label
                htmlFor="my-modal-9"
                className="btn modal-button border-0 bg-transparent hover:bg-transparent"
              >
                <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              </label>
              <input type="checkbox" id="my-modal-9" className="modal-toggle" />
              <div className="modal modal-middle">
                <div className="modal-box">
                  <h1 className="text-center">Edit Project</h1>
                  <form>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Project Title</span>
                      </label>
                      <input
                        ref={titleRef}
                        type="text"
                        placeholder="Type your project name"
                        name="description"
                        className="input input-bordered w-full focus:outline-none rounded-none"
                      />
                    </div>
                    <div className="flex gap-5 ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Start Date</span>
                        </label>
                        <input
                          ref={startDateRef}
                          type="date"
                          placeholder="Type your project name"
                          name="description"
                          className="input input-bordered  focus:outline-none rounded-none"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">End Date</span>
                        </label>
                        <input
                          ref={endDateRef}
                          type="date"
                          placeholder="Type your project name"
                          name="description"
                          className="input input-bordered  w-auto focus:outline-none rounded-none"
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Project Url</span>
                      </label>
                      <input
                        ref={urlRef}
                        type="url"
                        placeholder="Type your project link"
                        name="description"
                        className="input input-bordered w-full focus:outline-none rounded-none"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>
                      <textarea
                        ref={descriptionRef}
                        type="text"
                        placeholder="Project description"
                        name="description"
                        className="input input-bordered w-full h-24 focus:outline-none rounded-none"
                      />
                    </div>
                  </form>
                  <div className="modal-action">
                    <label htmlFor="my-modal-9" className="btn btn-error">
                      Cancel
                    </label>
                    <label
                      type="submit"
                      htmlFor="my-modal-9"
                      className="btn btn-success"
                    >
                      <button onClick={handleSubmitForProjectPut}>Done</button>
                    </label>
                  </div>
                </div>
              </div>
              <button onClick={handleProjectDelete}>
                <MdDelete className="cursor-pointer lg:mb-[280px] text-red-500"></MdDelete>
              </button>
            </div>
          </div>
          <label
            htmlFor="my-modal-10"
            className="btn modal-button border-0 bg-transparent hover:bg-transparent"
          >
            <div className="flex items-center gap-2 text-secondary mt-7 cursor-pointer">
              <FiPlus></FiPlus>
              <p>Personal Project</p>
            </div>
          </label>
          {/* <input type="checkbox" id="my-modal-10" className="modal-toggle" /> */}
          {/* <div className="modal modal-middle">
            <div className="modal-box">
              <h1 className="text-center">Add Project</h1>
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Project Title</span>
                  </label>
                  <input
                    // ref={titlePostRef}
                    type="text"
                    placeholder="Type your project name"
                    name="description"
                    className="input input-bordered w-full focus:outline-none rounded-none"
                  />
                </div>
                <div className="flex gap-5 ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Start Date</span>
                    </label>
                    <input
                      // ref={startDatePostRef}
                      type="date"
                      placeholder="Type your project name"
                      name="description"
                      className="input input-bordered  focus:outline-none rounded-none"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">End Date</span>
                    </label>
                    <input
                      // ref={endDatePostRef}
                      type="date"
                      placeholder="Type your project name"
                      name="description"
                      className="input input-bordered  w-auto focus:outline-none rounded-none"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Project Url</span>
                  </label>
                  <input
                    // ref={urlPostRef}
                    type="url"
                    placeholder="Type your project link"
                    name="description"
                    className="input input-bordered w-full focus:outline-none rounded-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    // ref={descriptionPostRef}
                    type="text"
                    placeholder="Project description"
                    name="description"
                    className="input input-bordered w-full h-24 focus:outline-none rounded-none"
                  />
                </div>
              </form>
              <div className="modal-action">
                <label htmlFor="my-modal-10" className="btn btn-error">
                  Cancel
                </label>
                <label
                  type="submit"
                  htmlFor="my-modal-10"
                  className="btn btn-success"
                >
                  <button
                  // onClick={handleSubmitForProjectPost}
                  >
                    Done
                  </button>
                </label>
              </div>
            </div>
          </div> */}
        </div>
        {/* PERSONAL PROJECTS part ends here */}

        <div className="border border-base-200 my-10 bg-base-200"></div>

        {/* TRAINING/COURSES part starts here */}
        <div>
          <h3 className="uppercase font-semibold mb-6">TRAINING/COURSES</h3>
          <div className="flex justify-between">
            <div className="flex">
              <div className="text-lg mr-3">
                <TiPointOfInterest></TiPointOfInterest>
              </div>
              <div>
                <h3>{course?.courseName ? course?.courseName: "N/A" }</h3>
                <br />
                <p>{course?.instituteName ? course?.instituteName: "N/A"}</p>
                <br />
                <p>{course?.startDate ? course?.startDate: "N/A"} - {course?.endDate ? course?.endDate: "N/A"}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <label
                htmlFor="my-modal-11"
                className="btn modal-button border-0 bg-transparent hover:bg-transparent"
              >
                <FiEdit className="cursor-pointer text-secondary"></FiEdit>
              </label>
              <input
                type="checkbox"
                id="my-modal-11"
                className="modal-toggle"
              />
              <div className="modal modal-middle">
                <div className="modal-box">
                  <h1 className="text-center">Edit Course</h1>
                  <form action="">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Course Name</span>
                      </label>
                      <input
                        ref={courseNameRef}
                        type="text"
                        placeholder="Type your course name"
                        name="description"
                        className="input input-bordered w-full focus:outline-none rounded-none"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Institude Name</span>
                      </label>
                      <input
                        ref={CourseInstituteNameRef}
                        type="text"
                        placeholder="Type your institude name"
                        name="description"
                        className="input input-bordered w-full focus:outline-none rounded-none"
                      />
                    </div>
                    <div className="flex gap-5 ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Start Date</span>
                        </label>
                        <input
                          ref={startDateCourseRef}
                          type="date"
                          placeholder="Type your project name"
                          name="description"
                          className="input input-bordered  focus:outline-none rounded-none"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">End Date</span>
                        </label>
                        <input
                          ref={endDateCourseRef}
                          type="date"
                          placeholder="Type your project name"
                          name="description"
                          className="input input-bordered  w-auto focus:outline-none rounded-none"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="modal-action">
                    <label htmlFor="my-modal-11" className="btn btn-error">
                      Cancel
                    </label>
                    <button onClick={handleCoursePut}>
                      <label
                        type="submit"
                        htmlFor="my-modal-12"
                        className="btn btn-success"
                      >
                        Done
                      </label>
                    </button>
                  </div>
                </div>
              </div>
             <button onClick={handleCourseDelete}>
             <MdDelete className="cursor-pointer lg:mb-[280px] text-red-500"></MdDelete>
             </button>
            </div>
          </div>
          {/* <label
            htmlFor="my-modal-12"
            className="btn modal-button border-0 bg-transparent hover:bg-transparent"
          >
            <div className="flex items-center gap-2 text-secondary mt-7 cursor-pointer">
              <FiPlus></FiPlus>
              <p>Add training/course</p>
            </div>
          </label>
          <input type="checkbox" id="my-modal-12" className="modal-toggle" />
          <div className="modal modal-middle">
            <div className="modal-box">
              <h1 className="text-center">Add Course</h1>
              <form action="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type your course name"
                    name="description"
                    className="input input-bordered w-full focus:outline-none rounded-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Institude Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type your institude name"
                    name="description"
                    className="input input-bordered w-full focus:outline-none rounded-none"
                  />
                </div>
                <div className="flex gap-5 ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Start Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Type your project name"
                      name="description"
                      className="input input-bordered  focus:outline-none rounded-none"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">End Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Type your project name"
                      name="description"
                      className="input input-bordered  w-auto focus:outline-none rounded-none"
                    />
                  </div>
                </div>
              </form>
              <div className="modal-action">
                <label htmlFor="my-modal-12" className="btn btn-error">
                  Cancel
                </label>
                <button>
                  <label
                    type="submit"
                    htmlFor="my-modal-12"
                    className="btn btn-success"
                  >
                    Done
                  </label>
                </button>
              </div>
            </div>
          </div> */}
        </div>
        {/* TRAINING/COURSES part ends here */}
      </div>
    </div>
  );
};

export default ResumeBuilder;
