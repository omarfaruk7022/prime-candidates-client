const Features = () => {
  return (
    <div>
        
      <section className="p-4 lg:p-8 dark:bg-base-200 dark:text-gray-100">
      <h1 className="text-center text-5xl underline mb-28 text-black">Features</h1>
        <div className="container mx-auto space-y-12 container max-w-[1080px] mx-auto">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-primary">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, its free
              </span>
              <h3 className="text-3xl font-bold">
                We are not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button className="btn btn-outline btn-secondary">Button</button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://source.unsplash.com/640x480/?2"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-primary">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, its free
              </span>
              <h3 className="text-3xl font-bold">
                We are not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button className="btn btn-outline btn-secondary">Button</button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?3"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-primary">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, its free
              </span>
              <h3 className="text-3xl font-bold">
                We are not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button className="btn btn-outline btn-secondary">Button</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;