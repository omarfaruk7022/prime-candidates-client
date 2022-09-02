import { useAuthState } from "react-firebase-hooks/auth";
import DashboardLayout from "../../components/DashboardLayout";
import auth from "../../components/firebase.init";
import swal from "sweetalert";
import { useEffect, useState } from "react";

const Index = () => {
  const [education, setEducation] = useState([{}]);
  const [user] = useAuthState(auth);
  const email = user?.email;
  console.log(email);
  const handleSubmit = (e) => {
    e.preventDefault();
    const education = e.target.level.value;
    const degree = e.target.degree.value;
    const institute = e.target.institute.value;
    const currentYear = e.target.current_year.value;
    const passingYear = e.target.passing_year.value;
    const educationData = {
      education,
      degree,
      institute,
      currentYear,
      passingYear,
      email,
    };
    if (education && degree && institute && currentYear && passingYear) {
      fetch(`https://stormy-beach-33232.herokuapp.com/education/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(educationData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal("Yayy", "Education added successfully!", "success");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      swal("Oops", "Please fill all the fields", "error");
    }
    e.target.reset();
  };
  useEffect(() => {
    fetch(
      `https://stormy-beach-33232.herokuapp.com/education?email=${email}`,
      {}
    )
      .then((res) => res.json())
      .then((data) => {
        setEducation(data);
      });
  }, [email]);
  console.log(education[0]);
  return (
    <DashboardLayout>
      <div>
        <a
          className="relative block p-8 border border-gray-100   drop-shadow-2xl rounded-xl"
          href=""
        >
          <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
            Education info
          </span>

          <div className="mt-4 text-gray-500 sm:pr-8">
           

            <h5 className="mt-4 text-xl font-bold text-gray-900">
              {education[0]?.email ? education[0]?.email : "N/A"}
            </h5>
            <h5 className="mt-4 text-xl font-bold text-gray-900">
              Education level : {education[0]?.education  ? education[0]?.education : "N/A"}
            </h5>
            <p className="hidden mt-2 text-sm sm:block">
             Degree : {education[0]?.degree   ? education[0]?.degree:"N/A" } From {education[0]?.institute  ? education[0]?.institute:"N/A" }
            </p>

            <p className="hidden mt-2 text-sm sm:block">
              Year : {education[0]?.currentYear  ? education[0]?.currentYear :"N/A"} to {education[0]?.passingYear ? education[0]?.passingYear :"N/A"}
            </p>
          </div>
        </a>
      </div>
      <div className="flex justify-between mx-12 mt-8 mb-4">
        <h2>Education</h2>
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
          Edit
        </button>
      </div>
      <hr />
      <div className="bg-[#F6F6F6] px-4">
        <form onSubmit={handleSubmit}>
          <div className="sm:pt-8">
            <div className="mt-2 bg-[#ffffff] p-4 mx-12">
              <div className="max-w-4xl">
                <div className="lg:flex my-4 gap-4">
                  <label className="block w-full my-4">
                    <span className="block font-medium text-sm text-gray-900 leading-tight">
                      Education level
                    </span>
                    <div className="mt-2">
                      <select
                        name="level"
                        className="select select-primary w-full border border-gray-300 rounded-lg px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      >
                        <option>Graduate</option>
                        <option>Student</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </label>
                  <label className="block w-full  my-4">
                    <span className="block font-medium text-sm text-gray-900 leading-tight">
                      Exam/Degree title
                    </span>
                    <div className="mt-2">
                      <select
                        name="degree"
                        className="select select-primary w-full border border-gray-300 rounded-lg  px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      >
                        <option>Bachelor</option>
                        <option>Masters</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </label>
                </div>
                <label className="block mt-5 w-full m-2">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Institute Name
                  </span>
                  <div className="mt-2">
                    <input
                      name="institute"
                      className="block w-full border h-12 border-gray-300 rounded-lg px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      placeholder="Institute Name"
                    />
                  </div>
                </label>
                <div className="lg:flex my-4">
                  <label className="block mt-5 w-full m-2">
                    <span className="block font-medium text-sm text-gray-900 leading-tight">
                      Current year
                    </span>
                    <div className="mt-2">
                      <input
                        name="current_year"
                        className="block w-full border border-gray-300 rounded-lg h-12 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                        placeholder="Current year"
                      />
                    </div>
                  </label>
                  <label className="block mt-5 w-full m-2">
                    <span className="block font-medium text-sm text-gray-900 leading-tight">
                      Approximate Passing year
                    </span>
                    <div className="mt-2">
                      <input
                        name="passing_year"
                        className="block w-full border border-gray-300 rounded-lg h-12 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                        placeholder="Approximate Passing year"
                      />
                    </div>
                  </label>
                </div>
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
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Index;
