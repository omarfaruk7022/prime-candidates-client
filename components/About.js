import Link from "next/link";

const About = () => {
  return (
    <section className="px-28">
      <div className="px-4 py-16 mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen ">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                className="absolute inset-0 object-cover  "
                src="https://i.ibb.co/hcyCvX7/Company.gif"
                alt="Indoors house"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-accent-200">
            <span className="hidden lg:inset-y-0 lg:absolute lg:w-1  lg:block lg:-left-16"></span>

            <div className="p-8 sm:p-16 lg:p-">
              <h2 className="lg:text-4xl font-bold sm:text-3xl text-primary">
                Company <span className="text-secondary">Relationships</span>
              </h2>

              <p className="mt-4 text-gray-600 border-t-[2px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <Link href="/about-us-detail">
            <button className="relative inline-flex items-center px-8 py-3 overflow-hidden text-primary border border-current rounded group active:text-indigo-500 focus:outline-none focus:ring">
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
               About us
              </span>
            </button>
          </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
