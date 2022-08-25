import DashboardLayout from "../../components/DashboardLayout";

const Index = () => {
  return (
    <DashboardLayout>
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
        <div className="sm:pt-8">
          <div className="mt-2 bg-[#ffffff] p-4 mx-12">
            <div className="max-w-4xl">
              <label className="block my-4">
                <span className="block font-medium text-sm text-gray-900 leading-tight">
                  Education level
                </span>
                <div className="mt-2">
                  <select className="select select-primary w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white">
                    <option selected>Remote</option>
                    <option>Office</option>
                  </select>
                </div>
              </label>
              <label className="block my-4">
                <span className="block font-medium text-sm text-gray-900 leading-tight">
                  Exam/Degree Title
                </span>
                <div className="mt-2">
                  <select className="select select-primary w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white">
                    <option selected>Internship</option>
                    <option>Part-Time</option>
                    <option>Full-Time</option>
                  </select>
                </div>
              </label>
              <label className="block my-4">
                <span className="block font-medium text-sm text-gray-900 leading-tight">
                  Institution Name
                </span>
                <div className="mt-2">
                  <select className="select select-primary w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white">
                    <option selected>Internship</option>
                    <option>Part-Time</option>
                    <option>Full-Time</option>
                  </select>
                </div>
              </label>
              <div className="lg:flex my-4">
                <label className="block mt-5 w-full m-2">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Current year
                  </span>
                  <div className="mt-2">
                    <input
                      className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      placeholder=""
                    />
                  </div>
                </label>
                <label className="block mt-5 w-full m-2">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Approximate Passing year
                  </span>
                  <div className="mt-2">
                    <input
                      className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      placeholder=""
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
                type="button"
                className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
