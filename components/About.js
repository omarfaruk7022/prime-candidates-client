const About = () => {
  return (
    <section>
      <div className="text-3xl mt-28">
        <h1 className="text-center">About us</h1>
      </div>
      <div className="px-4 py-16 mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen ">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src="https://www.hyperui.dev/photos/house-1.jpeg"
                alt="Indoors house"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>

              <p className="mt-4 text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <a
              
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                href="/about-us-detail"
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
