import React from "react";

const SupportsData = ({reason}) => {
    
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
         
          <h1 className="text-5xl text-center">{reason?.text}</h1>
          
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default SupportsData;
