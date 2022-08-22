import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center min-h-screen bg-white">
        <Triangle
          height="150"
          width="150"
          color="#17358B"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapper
          className=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
