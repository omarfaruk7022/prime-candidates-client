import swal from "sweetalert";
import vector from "../images//Group 31.png"
import icon from "..//images//Google_Icons-09-512.webp"
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

import Link from "next/link";
import auth from "./firebase.init";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import Image from "next/image";

const SignUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let signInError;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user || googleUser) {
    swal("Yayy", "Sign Up  Successfully Completed ", "success");
  }

  if (error || googleError || updateError) {
    swal("Something Wrong", "Sign up Failed", "error");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div>
        <Navber>
      <div className="flex justify-center items-center h-screen my-28">
      <div className="mr-28"><Image src={vector} alt="" /></div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold text-secondary">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-secondary">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-secondary">Email </span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-secondary">Password </span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 character or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {signInError}

              <input
                className="btn btn-outline w-full max-w-xs hover:bg-secondary border-secondary hover:border-secondary"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              {" "}
              <small>
                Already have an account ?{" "}
                <Link href="/login">
                  <span className="underline cursor-pointer text-blue-500">
                    Please Login
                  </span>
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
           <div className="flex">
           <a
              onClick={() => signInWithGoogle()}
              
            >
              <div className="h-[40px] w-[60px] cursor-pointer"><Image src={icon} alt=""/></div>
              
            </a>
            
           </div>
          </div>
        </div>
      </div>
      <Footer/>
      </Navber>
    </div>
  );
};

export default SignUp;
