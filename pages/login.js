import swal from "sweetalert";
import vector from "..//images//Group 31.png";
import googleIcon from "..//images//Google_Icons-09-512.webp";
import githubIcon from "../images/black-github-icon.png";
import facebookIcon from "../images/fb_icon.png";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import auth from "../components/firebase.init";
import Router from "next/router";
import Loader from "../components/Loader";

const Login = () => {
  // const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
  // const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);

  let signInError;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // if (googleLoading || loading || gitLoading || fbLoading) {
  //   return <Loader></Loader>
  // }

  if (user) {
    // Router.push('/');
    window.history.back();
    swal("Yayy", "Login Successfully Completed", "success");
  }
  if (error) {
    swal("Something Wrong", "Login Failed", "error");
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div>
      <Navbar>
        <div className="flex justify-center items-center h-screen my-28">
          <div className="mr-28 hidden lg:block">
            <Image src={vector} alt="" />
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mx-3 lg:mx-0">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold text-secondary">
                Login
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  value="Login"
                />
              </form>
              <div className="divider">OR</div>
              <div className="flex">
              <p>
                {" "}
                <small>
                  Do you have not an account !{" "}
                  <Link className="text-primary link" href="/signup">
                    <span className="underline cursor-pointer text-blue-500">
                      Create an account
                    </span>
                  </Link>
                </small>
              </p>
               
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Navbar>
    </div>
  );
};

export default Login;
