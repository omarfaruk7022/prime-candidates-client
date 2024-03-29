import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from "../images/prime-logo.png";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";
import { BsChatDots } from "react-icons/bs";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  // const [userData, setUserData] = useState();

  // useEffect(() => {
  //   fetch("https://stormy-beach-33232.herokuapp.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUserData(data));
  // }, [])

  // const [userData, setUserData] = useState();
  // const [admin, setAdmin] = useState(false);
  // useEffect(() => {
  //   fetch(
  //     `https://stormy-beach-33232.herokuapp.com/userprofile?email=${user?.email}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data[0]);
  //     });
  // },[user]);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar max-w-[1400px] mx-auto">
          <div className="flex-1">
            <Link href="/">
              <Image
                className="cursor-pointer"
                src={Logo}
                width={150}
                height={100}
                alt=""
              />
            </Link>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <div className="flex gap-5  items-center">
              <ul className="menu menu-horizontal">
                <li>
                  <Link href="/">
                    <a className="rounded-[5px]">Home</a>
                  </Link>
                </li>
                <li tabIndex="0">
                  <Link href="/job">
                    <a className="rounded">
                      Find Job
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </a>
                  </Link>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link href={"/job"}>
                        <a className="rounded-[5px]">Full-Time</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/parttime"}>
                        <a className="rounded-[5px]">Part-Time</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/courses">
                    <a className="rounded-[5px]">Courses</a>
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link href="/resume">
                      <a className="rounded-[5px]">Resume</a>
                    </Link>
                  </li>
                )}
                <li>
                  <Link href="/blog">
                    <a className="rounded-[5px]">Blog</a>
                  </Link>
                </li>

                <li>
                  <Link href="/contactus">
                    <a className="rounded-[5px]">Contact Us</a>
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link href="/dashboard/general">
                      <a className="rounded-[5px]">Dashboard</a>
                    </Link>
                  </li>
                )}
                {user && (
                  <li>
                    <Link href="/support">
                      <a className="rounded-[5px]">Support </a>
                    </Link>
                  </li>
                )}
                <li>
                  <Link href="/team-members">
                    <a className="rounded-[5px]">Team Members </a>
                  </Link>
                </li>
              </ul>
              <div className="flex gap-3">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="btn btn-outline self-center hover:bg-primary hover:border-primary"
                  >
                    Logout
                  </button>
                ) : (
                  <Link href="/login">
                    <button className="btn btn-outline  self-center hover:bg-primary hover:border-primary">
                      Login/Register
                    </button>
                  </Link>
                )}

                <Link href="/postJobs">
                  <button className="btn btn-outline self-center hover:bg-secondary hover:border-secondary">
                    Post Jobs
                  </button>
                </Link>
              </div>
              <a href="https://pcchat.pages.dev/">
                <BsChatDots className="cursor-pointer text-3xl" />
              </a>
              <div>
                {user?.photoURL && (
                  <div className="avatar online">
                    <div className="w-12  rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <Link href="/">
              <a className="rounded-[5px]">Home</a>
            </Link>
          </li>
          <li tabIndex="0">
            <Link href="/job">
              <a>
                Find Job
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
            </Link>
            <ul className="p-2 bg-base-100">
              <li>
                <Link href={"/job"}>
                  <a className="rounded-xl">Full-Time</a>
                </Link>
              </li>
              <li>
                <Link href={"/parttime"}>
                  <a className="rounded-xl">Part-Time</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/courses">
              <a className="rounded-[5px]">Courses</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a className="rounded-[5px]">Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="rounded-[5px]">Blog</a>
            </Link>
          </li>

          {user && (
            <div className="dropdown my-4">
              <div className="flex items-center">
                <label tabIndex="0" className="rounded-[5px] ml-4">
                  Dashboard
                </label>
                <svg
                  className="fill-current ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/dashboard/general">
                    <a className="rounded-[5px]">General</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/professional-overview">
                    <a className="rounded-[5px]">Professional Overview</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/social-profile">
                    <a className="rounded-[5px]">Social Profile</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/skillset">
                    <a className="rounded-[5px]">Skill Set</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/education">
                    <a className="rounded-[5px]">Education</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <li>
            <Link href="/contactus">
              <a className="rounded-[5px]">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/quiz">
              <a className="rounded-[5px]">Quiz</a>
            </Link>
          </li>
          <li>
            <Link href="/support">
              <a className="rounded-[5px]">Support </a>
            </Link>
          </li>
          <li>
            <Link href="/team-members">
              <a className="rounded-[5px]">Team Members </a>
            </Link>
          </li>
          <li>
            <div className="flex flex-col gap-3">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline self-center hover:bg-primary hover:border-primary"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login">
                  <button className="btn btn-outline self-center hover:bg-primary hover:border-primary">
                    Login/Register
                  </button>
                </Link>
              )}

              <Link href="/postJobs">
                <button className="btn btn-outline self-center hover:bg-secondary hover:border-secondary">
                  Post Jobs
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
