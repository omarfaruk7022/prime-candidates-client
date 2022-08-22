const Subscribe = () => {
  return (
    <div>
      <section className="relative">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="svg absolute -z-10"
          style={{ height: "560px", width: "100%", overflow: "hidden" }}
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="hsl(217, 102%, 99%)" offset="0%"></stop>
              <stop stopColor="hsl(217,88%, 93%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
          ></path>
        </svg>

        <div className="px-6 py-32 md:px-12 text-gray-800 text-center">
          <div className="container mx-auto xl:px-32">
            <div className="flex items-center justify-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
                  Are you ready <br />
                  <span className="text-blue-600">for an adventure?</span>
                </h1>
                <p className="mb-8 text-center">
                  Subscribe to the Prime Candidates mailing list to receive
                  updates on <br /> new job offers and our promotions.
                </p>
                <div className="md:flex flex-row">
                  <input
                    type="text"
                    className="shadow-lg shadow-blue-500/50 form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded lg:rounded-l-full  transition ease-in-out lg:m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="shadow-lg shadow-blue-500/50 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded lg:rounded-r-full  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
