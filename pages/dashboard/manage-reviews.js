import React, { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import DashboardLayout from "../../components/DashboardLayout";

const ManageReviews = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

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
        fetch(`http://localhost:5000/review/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
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
  };
  return (
    <div>
      <DashboardLayout>
        <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Location
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  The Review
                </th>

                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>

            {reviews?.map((review) => (
              <>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                      {review?.name}
                    </td>
                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                      {review?.country}
                    </td>

                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                      <div className="group">
                        <p>
                          {review?.reviews.slice(0, 50)}
                          <span>.......</span>
                        </p>
                        <span className="absolute z-50 hidden px-6 py-2 -mt-16 text-center text-black  bg-base-100 border  rounded tooltip-text group-hover:block">
                          {review?.reviews.slice()}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                      <a
                        className="relative inline-block px-4 py-1 overflow-hidden border border-red-500 group focus:outline-none focus:ring"
                        onClick={() => handelDelete(review._id)}
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

export default ManageReviews;
