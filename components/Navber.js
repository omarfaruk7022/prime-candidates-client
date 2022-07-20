import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../images/prime-logo.png";

const Navber = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-[url('../images/bg.png')]">
          <div className="flex-1">
            <Image src={Logo} width={150} height={100} alt="" />
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
            <div className="flex gap-5 lg:gap-36 items-center">
              <ul className="menu menu-horizontal">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li tabIndex="0">
                  <Link href="/">
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
                      <a>Full-Time</a>
                    </li>
                    <li>
                      <a>Part-Time</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">
                    <a>Candidates</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Pages</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
              <div className="flex gap-3">
                <button className="btn-sm btn-primary">Login/Register</button>
                <button className="btn-sm btn-secondary">Job Post</button>
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
              <a>Home</a>
            </Link>
          </li>
          <li tabIndex="0">
            <Link href="/">
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
                <a>Full-Time</a>
              </li>
              <li>
                <a>Part-Time</a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">
              <a>Candidates</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Pages</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <div className="flex flex-col gap-3">
              <button className="btn-sm btn-primary w-full">
                Login/Register
              </button>
              <button className="btn-sm btn-secondary w-full">Job Post</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
