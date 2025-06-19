import React, { useEffect, useState } from "react";

const Table = () => {

    const [employee, setEmployee] = useState([])
    console.log(employee)

    useEffect(() =>{
        fetch('employeeData.json')
        .then(res => res.json())
        .then(data => setEmployee(data))
        .catch(e => console.log("error :", e ))
    },[])

  return (
    <div className="bg-white px-4">
      <div className="py-10 flex justify-between">
        <div>
          <p className="text-2xl font-bold">Employee Time Logs</p>
        </div>
        <div className="flex gap-2">
          <div className="form-control lg:w-72 hidden md:block">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Search Anything...."
              />
            </label>
          </div>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered ">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto bg-white">
        <table className="table table-md rounded-md">
          <thead className="bg-[#F3F5F6]">
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Duration</th>
              <th>Start Time - End Time</th>
              <th>Due Hours</th>
              <th>Department</th>
              <th>Project</th>
              <th>Notes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                employee.map((emp) => (
                    <tr key={emp.id}>
                        <td>{'#'}{emp.id}</td>
                        <td>{emp.employeeName}</td>
                        <td>{emp.duration}</td>
                        <td>{emp.startTimeEndTime}</td>
                        <td>{emp.dueHours}</td>
                        <td>{emp.department}</td>
                        <td>{emp.project}</td>
                        <td>{emp.notes}</td>
                        <td>Action Btn</td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
