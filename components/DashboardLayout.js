import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../components/firebase.init";
import { useEffect, useState } from "react";
import useAdmin from "./UseAdmin";
import useEmployee from "./UseEmployee";

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === href
            ? "text-primary border-secondary"
            : "text-gray-600 hover:text-gray-700 border-transparent"
        } ${className} block pb-4 font-semibold text-sm sm:text-base border-b-2 focus:outline-none focus:text-gray-900 whitespace-no-wrap`}
      >
        {children}
      </a>
    </Link>
  );
};

const DashboardLayout = ({ children }) => {
  const [user] = useAuthState(auth);

  //   fetch will be from userData-mongodb
  const [userData, setUserData] = useState();
  const [admin] = useAdmin(user);
  const [employee] = useEmployee(user);

  return (
    <div>
      <Navbar>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <div>{children}</div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              {user?.photoURL && (
                <li>
                  <div className="avatar mx-auto flex flex-col">
                    <div className="w-16 rounded-xl">
                      <img src={user?.photoURL} alt=" " />
                    </div>
                    <div>
                      <h3>{user?.displayName}</h3>
                    </div>
                  </div>
                </li>
              )}

              <li>
                <ActiveLink href="/dashboard/general" className="ml-10">
                  General
                </ActiveLink>
              </li>
              {employee ||
                (admin && (
                  <>
                    <li>
                      <ActiveLink
                        href="/dashboard/applications"
                        className="ml-10"
                      >
                        Applications
                      </ActiveLink>
                    </li>
                  </>
                ))}

              {!employee && (
                <>
                  <li>
                    <ActiveLink
                      href="/dashboard/professional-overview"
                      className="ml-10"
                    >
                      Professional Overview
                    </ActiveLink>
                  </li>

                  <li>
                    <ActiveLink href="/dashboard/education" className="ml-10">
                      Education
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      href="/dashboard/my-applications"
                      className="ml-10"
                    >
                      My Applications
                    </ActiveLink>
                  </li>
                </>
              )}

              {admin && (
                <>
                  <li>
                    <ActiveLink
                      href="/dashboard/manage-job-post"
                      className="ml-10"
                    >
                      Manage job posts
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      href="/dashboard/manage-reviews"
                      className="ml-10"
                    >
                      Manage Reviews
                    </ActiveLink>
                  </li>
                </>
              )}
              <li>
                <ActiveLink href="/dashboard/add-review" className="ml-10">
                  Add Review
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default DashboardLayout;
