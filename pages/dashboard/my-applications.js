import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import DashboardLayout from "../../components/DashboardLayout";
import auth from "../../components/firebase.init";

const MyApplications = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [applicationsData, setApplicationsData] = useState([{}]);

  useEffect(() => {
    fetch(`https://stormy-beach-33232.herokuapp.com/apply/${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setApplicationsData(data);
        console.log(data);
      });
    }, [email]);
  return (
    <div>
      <DashboardLayout>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Applied job Name
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Applied company Name
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Status
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Job Description
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Time and date
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
              </tr>
            </thead>

            {applicationsData &&
              applicationsData.map((application) => {
                return (
                  <>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                          {application.appliedJob}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          {application.appliedCompany}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                            Cancelled
                          </strong>
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                          {/* <div className="group">
                            <p>
                              {application?.appliedDescription.slice(0, 50)}
                              <span>.......</span>
                            </p>
                            <span className="absolute z-50 hidden px-6 py-2 -mt-16 text-center text-black  bg-base-100 border  rounded tooltip-text group-hover:block">
                              {application?.appliedDescription.slice()}
                            </span>
                          </div> */}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          {application.appliedTime} - {application.appliedDate}
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
          </table>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default MyApplications;
