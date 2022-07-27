import React from "react";
import { FiCamera } from "react-icons/fi";

const From = () => {
  return (
    <div>
      <h1 className="text-blue-400 text-bold text-xl ml-44 mb-[-120px]">
        Back
      </h1>
      <div className="px-40 py-32 container mx-auto">
        <h1 className="text-blue-400 uppercase text-center mb-5 text-3xl font-bold">
          Job post
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              placeholder="Job Title"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select Salary
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Job Catagory</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select Catagory
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Salary Type</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select Type
                </option>
                <option>Dhaka</option>
                <option>Bogura</option>
                <option>Bogura</option>
                <option>Bogura</option>
                <option>Bogura</option>
              </select>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select location
                </option>
                <option>Dhaka</option>
                <option>Bogura</option>
                <option>Bogura</option>
                <option>Bogura</option>
                <option>Bogura</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Featured?</span>
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="mx-5">Featured</span>
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
              />
              <span className="mx-5">Unfeatured</span>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select Type
                </option>
                <option>Dhaka</option>
                <option>Bogura</option>
                <option>Bogura</option>
                <option>Bogura</option>
                <option>Bogura</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Company Picture</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <FiCamera className=" mt-[-33px] ml-[280px] text-xl bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default From;
