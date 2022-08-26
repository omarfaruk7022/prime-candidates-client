import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import DashboardLayout from "../../components/DashboardLayout";
import auth from "../../components/firebase.init";
import swal from "sweetalert";
import { useQuery } from "react-query";

const Index = () => {
  const [experienceData, setExperienceData] = useState();
  const [user] = useAuthState(auth);
  const email = user?.email;

  const handleSubmit = (e) => {
    event.preventDefault();

    const jobTitle = e.target.name.value;
    const jobType = e.target.job_type.value;
    const jobDescription = e.target.description.value;
    const company = e.target.company.value;
    const jobPlace = e.target.jobPlace.value;
    const experience = {
      jobTitle,
      jobType,
      jobDescription,
      company,
      jobPlace,
      email,
    };
    if (jobTitle && jobType && jobDescription && jobPlace && company) {
      fetch(`http://localhost:5000/experience/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(experience),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal("Yayy", "Experience added successfully!", "success");
        });
    }
    e.target.reset();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/experience/${email}`, {})
      .then((res) => res.json())
      .then((data) => {
        setExperienceData(data[0]);
      });
  }, [email]);
  return (
    <DashboardLayout>
      <div className="flex justify-between mx-12 mt-8 mb-4">
        <h2>Job Experience</h2>
        <button className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Experiences
        </button>
      </div>
      <hr />

      <div className="bg-[#F6F6F6] px-4">
        <div className="w-50">
          <a
            className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
            href=""
          >
            <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="justify-between sm:flex">
              <div>
                <h5 className="text-xl font-bold text-gray-900">
                  Job name: {experienceData?.jobTitle}
                </h5>
                <p className="mt-1 text-xs font-medium text-gray-600">
                  By john doe
                </p>
              </div>

              <div className="flex-shrink-0 hidden ml-3 sm:block">
                <img
                  className="object-cover w-16 h-16 rounded-lg shadow-sm"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            </div>

            <div className="mt-4 sm:pr-8">
              <p className="text-sm text-gray-500">
                {experienceData?.jobDescription}
              </p>
            </div>

            <dl className="flex mt-6">
              <div className="flex flex-col-reverse">
                <dd className="text-sm text-gray-500">
                  {experienceData?.jobPlace}
                </dd>
                <dt className="text-sm font-medium text-gray-600">Job Place</dt>
              </div>

              <div className="flex flex-col-reverse ml-3 sm:ml-6">
                <dd className="text-sm text-gray-500">
                  {experienceData?.jobType}
                </dd>
                <dt className="text-sm font-medium text-gray-600">Job type</dt>
              </div>
            </dl>
          </a>
        </div>
        <div className="sm:pt-8">
          <div className="mt-2 bg-[#ffffff] p-4 mx-12">
            <form onSubmit={handleSubmit}>
              <div className="max-w-4xl">
                <div className="lg:flex my-4">
                  <label className="block mt-5 w-full m-2">
                    <span className="block font-medium text-sm text-gray-900 leading-tight">
                      Job Title
                    </span>
                    <div className="mt-2">
                      <input
                        name="name"
                        className="block w-full border border-gray-300 rounded-lg h-12 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                        placeholder="Job title"
                      />
                    </div>
                  </label>
                  <label className="block mt-5 w-full m-2">
                    <span className="block font-medium text-sm text-gray-900 leading-tight">
                      Company Name
                    </span>
                    <div className="mt-2">
                      <input
                        name="company"
                        className="block h-12 w-full border border-gray-300 rounded-lg px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                        placeholder="Company Name"
                      />
                    </div>
                  </label>
                </div>
                <label className="flex items-center">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Related to IT
                  </span>
                  <input type="checkbox" className="ml-4 mb-[2px]" />
                </label>
                <div className="lg:flex my-4 gap-4">
                  <label className="block w-full my-4">
                    <span className="block font-medium text-sm text-gray-900 leading-tight">
                      Job Place
                    </span>
                    <div className="mt-2">
                      <select
                        name="jobPlace"
                        className="select select-primary w-full border border-gray-300 rounded-lg px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      >
                        <option>On-Site</option>
                        <option>Remote</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </label>
                  <label className="block w-full  my-4">
                    <span className="block font-medium text-sm text-gray-900 leading-tight">
                      Job Type
                    </span>
                    <div className="mt-2">
                      <select
                        name="job_type"
                        className="select select-primary w-full border border-gray-300 rounded-lg  px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      >
                        <option>Part-Time</option>
                        <option>Full-Time</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </label>
                </div>
                <label className="block my-4">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Description
                  </span>
                  <div className="mt-2">
                    <textarea
                      name="description"
                      className="block w-full border border-gray-300 rounded-lg  px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      placeholder="English"
                    />
                  </div>
                </label>
              </div>
              <hr className="-mx-20 mt-4" />
              <div className="border-t-2 border-gray-200 px-0 py-5 flex justify-end">
                <button
                  type="button"
                  className="px-4 py-3 leading-none font-semibold rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
