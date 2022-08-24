import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

const Applications = () => {
  const [applications, setApplications] = useState();

  useEffect(() => {
    fetch("https://stormy-beach-33232.herokuapp.com/apply")
      .then((res) => res.json())
      .then((data) => setApplications(data));
  });
  return (
    <div>
      <DashboardLayout>
        {/* <h1>hello this is applications </h1> */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="sticky left-0 p-4 text-left bg-white">
                  <label className="sr-only" htmlFor="row_all">
                    Select All
                  </label>
                  <input
                    className="w-5 h-5 border-gray-200 rounded"
                    type="checkbox"
                    id="row_all"
                  />
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Name
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
                    Email Address
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
                    Phone Number
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
                    Address
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
            {applications?.map((application) => (
              <>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="sticky left-0 p-4 bg-white">
                      <label className="sr-only" htmlFor="row_1">
                        Row 1
                      </label>
                      <input
                        className="w-5 h-5 border-gray-200 rounded"
                        type="checkbox"
                        id="row_1"
                      />
                    </td>
                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                      {application.name}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {application.email}
                    </td>

                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      (+88) {application.number}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {application.address}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {/* <Image src={application.resume}></Image> */}
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Applications;
