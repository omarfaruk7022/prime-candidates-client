import React, {useEffect, useState} from "react";
import swal from "sweetalert";
import SupportsData from "../components/SupportsData"


const support = () => {
  const [reasons, setReasons] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.bio.value;
    const reason = {
      text,
    };

    fetch("http://localhost:5000/support", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reason),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Yayy", "Job added successfully!", "success");
        }
      });

    e.target.reset();
  };

  
  useEffect(() => {
    fetch("http://localhost:5000/support")
      .then((res) => res.json())
      .then((data) => {
        setReasons(data);
      });
  }, []);
  
  
    

  return (
    <div>
      <label htmlFor="my-modal" className="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <div className="col-span-full">
            <label htmlFor="bio" className="text-md">
              Type your Problem
            </label>
            <form onSubmit={handleSubmit}>
              <textarea
                name="bio"
                id="bio"
                placeholder=""
                className="w-full h-[200px] rounded-md bg-gray-200 "
                spellCheck="false"
              ></textarea>
              <button type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
     <div className="grid grid-cols-3 gap-5">
   {
      reasons.map(reason => {
        return <SupportsData reason={reason}></SupportsData>
        
        
      })
    }
     </div>
      
    </div>

  );
};

export default support;
