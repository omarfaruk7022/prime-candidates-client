import { useEffect, useState } from "react";

const useEmployee = (user) => {
  const [employee, setEmployee] = useState(false);
  const [employeeLoading, setEmployeeLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;

    if (email) {
      fetch(` https://stormy-beach-33232.herokuapp.com/employee/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          

          setEmployee(data.employee);
          setEmployeeLoading(false);
          console.log(data.employee);
        });
    }
  }, [user?.email]);

  return [employee];
};

export default useEmployee;
