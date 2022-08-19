import Link from "next/link";
import { useRouter } from "next/router";
import Navber from "./Navber";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../components/firebase.init';

const ActiveLink = ({ children, href, className }) => {
    const router = useRouter();
    return (
        <Link href={href} scroll={false}>
            <a
                className={`${router.pathname === href
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
    console.log(user)

    return (
        <div>
            <Navber>
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
                            {
                                user?.photoURL && <li>
                                    <div className="avatar mx-auto flex flex-col">
                                        <div className="w-16 rounded-xl">
                                            <img src={user?.photoURL} alt=" " />
                                        </div>
                                        <div>
                                            <h3>{user?.displayName}</h3>
                                        </div>
                                    </div>
                                </li>
                            }
                            <li>
                                <ActiveLink href="/dashboard/general" className="ml-10">
                                    General
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink href="/dashboard/professional-overview" className="ml-10">
                                    Professional Overview
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink href="/dashboard/skillset" className="ml-10">
                                    Skill Set
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink href="/dashboard/education" className="ml-10">
                                    Education
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink href="/dashboard/applications" className="ml-10">
                                    Applications
                                </ActiveLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Navber>
        </div>
    );
};

export default DashboardLayout;