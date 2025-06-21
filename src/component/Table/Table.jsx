import { useState } from "react";
import DatePicker from "react-datepicker";
// import { FaRegCircleCheck } from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";
import { GoDotFill } from "react-icons/go";

const Table = ({ employee }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(employee);
  const [searchTerm, setSearchTerm] = useState("");

  // search
  const filteredEmployees = employee.filter(
    (emp) =>
      emp.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // color class

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                className="grow"
                placeholder="Search by ID, Name"
              />
            </label>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
              </div>
              <input
                type="date"
                value={'select time'}
                name="name"
                placeholder="Type Name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <select className="select w-52">
              <option disabled>Status</option>
              <option className="text-[#089624] flex">Approved</option>
              <option className="text-red-500">Reject</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered ">
              <option disabled>Who shot first?</option>
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
              <th className="text-base font-bold">ID</th>
              <th className="text-base font-bold">Employee Name</th>
              <th className="text-base font-bold">Duration</th>
              <th className="text-base font-bold">Start Time - End Time</th>
              <th className="text-base font-bold">Due Hours</th>
              <th className="text-base font-bold">Department</th>
              <th className="text-base font-bold">Project</th>
              <th className="text-base font-bold">Notes</th>
              <th className="text-base font-bold">Action</th>
              <th className="text-base font-bold"></th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, i) => (
              <tr key={i}>
                <td>
                  {"#"}
                  {emp.id}
                </td>
                <td className="text-base font-medium">{emp.employeeName}</td>
                <td className="text-base font-medium">{emp.duration}</td>
                <td className="text-base font-medium">
                  {emp.startTimeEndTime}
                </td>
                <td className="text-base font-medium">{emp.dueHours}</td>
                <span
                  className={`rounded-full px-2 py-1 mt-4 flex items-center justify-center${
                    emp.department == "Development"
                      ? "text-[#16A34A] bg-[#a8fec7]"
                      : emp.department == "HR"
                      ? " text-purple-300"
                      : "text-slate-800"
                  }`}
                >
                  <span className="flex items-center justify-center"><GoDotFill /> {emp.department}</span>
                </span>
                <td className="text-base font-medium">{emp.project}</td>
                <td className="text-base font-medium">{emp.notes}</td>
                <td className="text-base font-medium">
                  <div className="flex gap-2">
                    <button className="text-red-400 ">Reject</button>
                    <button className="btn text-white bg-[#16A34A]">
                      approve
                    </button>
                  </div>
                </td>
                <td>
                  <button>...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
