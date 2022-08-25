import React from "react";

const Card = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-28 mb-12">
        Motivational speakers
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        <a className="relative block bg-black group" href="">
          <img
            className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
            src="https://i.ibb.co/G29VL5k/nihan-vai.jpg"
            alt=""
          />
          <div className="relative p-8">
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              Developer
            </p>

            <p className="text-2xl font-bold text-white">Md. Harifur rashid</p>

            <div className="mt-64">
              <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
        <a className="relative block bg-black group" href="">
          <img
            className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
            src="https://i.ibb.co/kgBNv11/sami-vai.jpg"
            alt=""
          />
          <div className="relative p-8">
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              Developer
            </p>

            <p className="text-2xl font-bold text-white">Md. Sami al zaber</p>

            <div className="mt-64">
              <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
        <a className="relative block bg-black group" href="">
          <img
            className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
            src="https://i.ibb.co/DpcZkB8/ahsan-vai.jpg"
            alt=""
          />
          <div className="relative p-8">
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              Developer
            </p>

            <p className="text-2xl font-bold text-white">Md. Ahsan habib</p>

            <div className="mt-64">
              <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
