import React, { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import DashboardLayout from "../../components/DashboardLayout";

const ManageJobPost = () => {
  const [jobPosts, setJobPosts] = useState();

  useEffect(() => {
    fetch("https://stormy-beach-33232.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => setJobPosts(data));
  }, [jobPosts]);

  const handelDelete = (_id) => {
    console.log(_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your file has been deleted!", {});
        fetch(`https://stormy-beach-33232.herokuapp.com/jobs/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {});
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div>
      <DashboardLayout>
        <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Job Title
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Location
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Role
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Salary Range
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Job Type
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>

            {jobPosts?.map((job) => (
              <>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                      {job?.jobTitle}
                    </td>
                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                      {job?.jobLocation}
                    </td>
                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                      {job?.jobCategory}
                    </td>
                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                      {job?.salaryRange}
                    </td>
                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                      {job?.jobType}
                    </td>
                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                      <a
                        className="relative inline-block px-4 py-1 overflow-hidden border border-red-500 group focus:outline-none focus:ring"
                        onClick={() => handelDelete(job._id)}
                      >
                        <span className="absolute inset-y-0 left-0 w-[2px] transition-all bg-red-500 group-hover:w-full group-active:bg-red-500 "></span>

                        <span className="relative text-sm font-medium text-red-400 transition-colors  cursor-pointer group-hover:text-white">
                          Delete
                        </span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </DashboardLayout>
      :
    </div>
  );
};

export default ManageJobPost;
