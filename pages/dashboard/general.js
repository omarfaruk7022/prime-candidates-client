import DashboardLayout from "../../components/DashboardLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../components/firebase.init";
import { useEffect, useState } from "react";
import Link from "next/link";
import swal from "sweetalert";

const handleBack = () => {
  window.history.back();
};

const General = () => {
  const [profile, setProfile] = useState();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch(
      `https://stormy-beach-33232.herokuapp.com/userprofile?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [user?.email]);

  // console.log(profile.name);

  const handleEditInfo = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const socialLink = e.target.link.value;
    const country = e.target.country.value;
    const state = e.target.state.value;
    const street = e.target.street.value;

    const updatedInfo = {
      phone,
      socialLink,
      country,
      state,
      street,
    };

    updatedInfo.email = user.email;
    console.log(updatedInfo);

    fetch("https://stormy-beach-33232.herokuapp.com/userprofile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    }).then((res) => res.json());

    // fetch("https://stormy-beach-33232.herokuapp.com/jobs", {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     body: JSON.stringify(job),
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         if (data.acknowledged) {
    //             swal("Yayy", "Job added successfully!", "success");
    //         }
    //     });
    swal("Yayy", "Profile updated successfully!", "success");

    e.target.reset();
  };

  return (
    <>
      <DashboardLayout>
        <div className="bg-[#F6F6F6] mx-8 lg:mx-0">
          <div className="sm:pt-8">
            <div>
              <div className="lg:flex items-center lg:ml-12 justify-between ">
                <div className="flex items-center ml-12 justify-between ">
                  <div className="avatar">
                    {user?.photoURL && (
                      <div className="w-44 rounded-full">
                        <img src={user?.photoURL} alt="" />
                      </div>
                    )}
                  </div>
                  <div className="hero my-8 ml-4">
                    <div className="hero-content">
                      <div className="max-w-md">
                        {profile && (
                          <div>
                            <h1 className="text-3xl font-bold text-primary">
                              {profile[0]?.name}
                            </h1>
                            <p className="py-2">
                              <strong>Email :</strong> {profile[0]?.email}
                            </p>
                            <p className="py-2">
                              <strong>phone :</strong> {profile[0]?.phone}
                            </p>
                            <p className="py-2">
                              <strong>socialLink :</strong>{" "}
                              {profile[0]?.socialLink}
                            </p>
                            <p className="py-2">
                              <strong>street :</strong> {profile[0]?.street}
                            </p>
                            <p className="py-2">
                              <strong>state :</strong>
                              {profile[0]?.state}
                            </p>
                            <p className="py-2">
                              <strong>country :</strong>
                              {profile[0]?.country}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="#edit">
                    <a className="my-4 hidden lg:block text-blue-400 text-bold text-xl mr-2  lg:mr-20 ">
                      Edit
                    </a>
                  </Link>
                  <button
                    onClick={handleBack}
                    className="hidden lg:block text-blue-400 text-bold text-xl mr-2  lg:mr-20 "
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white lg:w-2/3 lg:rounded-l-lg mx-6 lg:mt-8 lg:mx-auto px-6 lg:px-20">
              <div className="text-3xl text-gray-700 py-6">Edit Info</div>
              <hr className="-mx-20" />
              <form
                onSubmit={handleEditInfo}
                className="container max-w-[1080px] mx-auto"
                id="edit"
              >
                <div className="py-8">
                  <div className="flex mb-4">
                    <span className="flex items-center justify-center  rounded-full border border-blue-500 h-6 w-6 text-xs font-bold text-blue-500 mr-3">
                      1
                    </span>
                    <span className="font-bold text-gray-800">
                      Personal Information
                    </span>
                  </div>
                  <div className="lg:flex mb-2 -mx-1">
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                      <div className="px-1">
                        <label className="text-gray-600 font-light">
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1">
                      <div className="px-1">
                        <label className="text-gray-600 font-light">
                          Social Link
                        </label>
                        <input
                          type="text"
                          name="link"
                          className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-8">
                  <div className="flex mb-4">
                    <span className="flex items-center justify-center  rounded-full border border-blue-500 h-6 w-6 text-xs font-bold text-blue-500 mr-3">
                      2
                    </span>
                    <span className="font-bold text-gray-800">
                      Address Information
                    </span>
                  </div>
                  <div className="lg:flex mb-2 -mx-1">
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                      <div className="px-1">
                        <label className="text-gray-600 font-light">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                      <div className="px-1">
                        <label className="text-gray-600 font-light">
                          Street Address
                        </label>
                        <input
                          type="text"
                          name="street"
                          className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="px-1">
                      <label className="text-gray-600 font-light">State</label>
                      <input
                        type="text"
                        name="state"
                        className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>
                <hr className="-mx-20" />
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
    </>
  );
};

export default General;
