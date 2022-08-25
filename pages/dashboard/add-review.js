import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import DashboardLayout from "../../components/DashboardLayout";

const AddReview = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      reviews: e.target.reviews?.value,
      name: e.target.name?.value,
      country: e.target.country?.value,
      star: e.target.star?.value,
      img: e.target.img?.value,
    };

    if (
      review.reviews &&
      review.star &&
      review.name &&
      review.country &&
      review.img
    ) {
      console.log(review);
      fetch("https://stormy-beach-33232.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          swal("Review Added Successfully", "", "success");
        });
    } else {
      swal("Please fill all the fields", "", "error");
    }
  
    e.target.reset();
  };

  const { register } = useForm();
  return (
    <DashboardLayout>
      <div className="my-5 flex items-center justify-center">
        <div className="card w-96 h-[550px]  shadow-xl  ">
          <h2 className="text-2xl text-center mt-4">Add Review</h2>
          <div className="card-body">
            <form className="my-5 " onSubmit={handleSubmit}>
              <input
                className="input my-2 w-full ring-1"
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
              />
              <input
                className="input my-2 w-full ring-1"
                {...register("reviews", { required: true })}
                placeholder="Description"
              />
              <input
                className="input my-2 w-full ring-1"
                {...register("country", { required: true })}
                type="text"
                placeholder="Country"
              />
              <input
                className="input my-2 w-full ring-1"
                type="number"
                {...register("star", { required: true })}
                placeholder="Ratings"
              />

              <input
                className="input my-2 w-full ring-1"
                {...register("img", { required: true })}
                type="text"
                placeholder="Image"
              />
              <br />
              <button>
                <input
                  className="input lg:ml-28  btn btn-outline cursor-pointer "
                  type="submit"
                  value="Submit"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddReview;
