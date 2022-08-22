import React, { useEffect } from "react";
import { FiEdit, FiDownload, FiPlus } from "react-icons/fi";
import { TiPointOfInterest } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { saveAs } from "file-saver";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";

const ResumeBuilder = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1Dcmlg0DWZcgsvy5iTulJCMLWs-G-lveA",
      "example.pdf"
    );
  };
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
            <p>harifur.rashid1@gmail.com</p>
            <p>+880 1888295295</p>
            <p>Chittagong</p>
          </div>
          <div className="flex items-center justify-center gap-1 text-xl text-secondary cursor-pointer">
            <FiDownload></FiDownload>
            <button onClick={saveFile}>Download</button>
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
                <form action="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">CAREER OBJECTIVE</span>
                    </label>
                    <textarea
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
                    Done
                  </label>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5">
            Building Front-end is my passion. I am a React JS enthusiast. I have
            been experienced in react JS for 1 year. I am constantly
            strengthening my skills. Seeking opportunities to become a full-time
            front-end developer for a long time.
          </p>
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
              <h3>SOFA-MART (Warehouse Management System)</h3>
              <br />
              <p>May 2022 - May 2022</p>
              <br />
              <p className="text-secondary">https://sofa-mart.web.app/</p>
              <br />
              <p>
                Technology use: Javascript(ES6), ReactJS, Vanila CSS, Git,
                Firebase Authentication, React hook form, ExpressJS, NodeJS,
                MongoDB, Heroku etc.
                <br />
                Implemented a beautyfull React warehouse website.User can add
                product, remove product and update product.
              </p>
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
                  <form action="">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Project Title</span>
                      </label>
                      <input
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
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Project Url</span>
                      </label>
                      <input
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
                      Done
                    </label>
                  </div>
                </div>
              </div>
              <MdDelete className="cursor-pointer text-red-500"></MdDelete>
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
          <input type="checkbox" id="my-modal-10" className="modal-toggle" />
          <div className="modal modal-middle">
            <div className="modal-box">
              <h1 className="text-center">Add Project</h1>
              <form action="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Project Title</span>
                  </label>
                  <input
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Project Url</span>
                  </label>
                  <input
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
                  Done
                </label>
              </div>
            </div>
          </div>
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
                <h3>MERN-stack Development</h3>
                <br />
                <p>Programming Hero, Online</p>
                <br />
                <p>May 2022 - May 2022</p>
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
                    <label htmlFor="my-modal-11" className="btn btn-error">
                      Cancel
                    </label>
                    <label
                      type="submit"
                      htmlFor="my-modal-11"
                      className="btn btn-success"
                    >
                      Done
                    </label>
                  </div>
                </div>
              </div>
              <MdDelete className="cursor-pointer text-red-500"></MdDelete>
            </div>
          </div>
          <label
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
                <label
                  type="submit"
                  htmlFor="my-modal-12"
                  className="btn btn-success"
                >
                  Done
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* TRAINING/COURSES part ends here */}
      </div>
    </div>
  );
};

export default ResumeBuilder;
