import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import DashboardLayout from "../../components/DashboardLayout";
import auth from "../../components/firebase.init";

const MyApplications = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [applicationsData, setApplicationsData] = useState([{}]);

  useEffect(() => {
    fetch(`http://localhost:5000/apply/${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setApplicationsData(data);
      });
    console.log(applicationsData);
  }, [email]);
  return (
    <div>
      <DashboardLayout>
        {applicationsData &&
          applicationsData.map((application) => {
            return (
              <>
              
                  <div className="grid grid-cols-3 gap-3 ">
                    <article className="p-6 bg-white sm:p-8 rounded-xl ring  ring-indigo-50">
                      <div className="flex ">
                        <div
                          className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                          aria-hidden="true"
                        >
                          <div className="flex items-center gap-1">
                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                          </div>
                        </div>

                        <div className="sm:ml-8">
                          <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"></strong>

                          <h2 className="mt-4 text-lg font-medium sm:text-xl">
                            <a href="" className="hover:underline">
                              {" "}
                              Some Interesting Podcast Title{" "}
                            </a>
                          </h2>

                          <p className="mt-1 text-sm text-gray-700">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ipsam nulla amet voluptatum sit rerum, atque,
                            quo culpa ut necessitatibus eius suscipit eum
                            accusamus, aperiam voluptas exercitationem facere
                            aliquid fuga. Sint.
                          </p>

                          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center text-gray-500">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <p className="ml-1 text-xs font-medium">
                                48:32 minutes
                              </p>
                            </div>

                            <span
                              className="hidden sm:block"
                              aria-hidden="true"
                            >
                              &middot;
                            </span>

                            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                              Featuring{" "}
                              <a
                                href=""
                                className="underline hover:text-gray-700"
                              >
                                Barry
                              </a>
                              ,
                              <a
                                href=""
                                className="underline hover:text-gray-700"
                              >
                                Sandra
                              </a>{" "}
                              and
                              <a
                                href=""
                                className="underline hover:text-gray-700"
                              >
                                August
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                
              </>
            );
          })}
      </DashboardLayout>
    </div>
  );
};

export default MyApplications;
