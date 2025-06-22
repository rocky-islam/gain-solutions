import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";
import { GoDotFill, GoXCircleFill } from "react-icons/go";
import { BiEditAlt } from "react-icons/bi";
import { RxDownload } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbCalendarMonth } from "react-icons/tb";
import { HiOutlineDotsVertical } from "react-icons/hi";
// import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";

const Table = ({ employee, handleDelete, handleUpdate }) => {
  console.log(employee);
  const [searchTerm, setSearchTerm] = useState("");
  const [statuses, setStatuses] = useState({});
  const [editingEmployee, setEditingEmployee] = useState(null);

  // search
  const filteredEmployees = employee.filter(
    (emp) =>
      emp.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // color class
  const handleApprove = (id) => {
    setStatuses((prev) => ({ ...prev, [id]: "approved" }));
  };

  const handleReject = (id) => {
    setStatuses((prev) => ({ ...prev, [id]: "rejected" }));
  };

  const handleUndo = (id) => {
    setStatuses((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedEmployee = {
      ...editingEmployee,
      id: form.id.value,
      employeeName: form.name.value,
      department: form.department.value,
      project: form.project.value,
      notes: form.notes.value,
    };

    const updatedList = employee.map((emp) =>
      emp.id === editingEmployee.id ? updatedEmployee : emp
    );

    if (typeof handleUpdate === "function") {
      handleUpdate(updatedList);
    }

    document.getElementById("edit_modal").close();
    setEditingEmployee(null);
  };
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
            <label
              className=" w-44 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <div className="flex gap-2 items-center justify-center border border-gray-300 px-5 py-2 rounded">
                <TbCalendarMonth size={20} />
                <p className="font-medium">Date Range</p>
                <FaAngleDown size={18} />
              </div>
            </label>
            <div>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-3xl p-5">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() =>
                      document.getElementById("my_modal_3").close()
                    }
                  >
                    ✕
                  </button>

                  <div className="flex gap-8 py-8">
                    <div>
                      <label className="form-control flex flex-col w-52">
                        <div className="label">
                          <span className="label-text text-sm font-medium">
                            Date Range
                          </span>
                        </div>
                        <select
                          className="select select-bordered"
                          name="project"
                          defaultValue=""
                        >
                          <option value="">Last 7 Days</option>
                          <option value="Last 15 days">Last 15 days</option>
                          <option value="Last 30 days">Last 30 days</option>
                        </select>
                      </label>
                    </div>
                    <div>
                      <label className="form-control flex flex-col w-44">
                        <div className="label">
                          <span className="label-text font-medium text-sm">
                            Start date
                          </span>
                        </div>
                        <input
                          type="date"
                          name="start-date"
                          placeholder="Type End Time"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="form-control flex flex-col w-44">
                        <div className="label">
                          <span className="label-text font-medium text-sm">
                            End Date
                          </span>
                        </div>
                        <input
                          type="date"
                          name="end_date"
                          placeholder="Type End Time"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="modal-action mt-10">
                    <button
                      type="button"
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_3").close()
                      }
                    >
                      Close
                    </button>
                    <input
                      type="submit"
                      value="Apply"
                      className="btn bg-[#3E50F7] text-white px-12"
                    />
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div>
            <select className="font-medium select w-44 cursor-pointer">
              <option disabled className="font-medium">
                Status
              </option>
              <option className="text-[#089624] flex font-medium">
                {" "}
                &#x2705; Approved
              </option>
              <option className="text-red-500 font-medium"> ❌ Reject</option>
            </select>
          </div>
          <div>
            <select className="select font-medium w-44 cursor-pointer">
              <option className="font-medium">Design</option>
              <option className="font-medium">Development</option>
              <option className="font-medium">Project</option>
              <option className="font-medium">sales</option>
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
                <td
                  className={`rounded-full px-2 py-1 mt-4 flex items-center justify-center${
                    emp.department == "Development"
                      ? "text-[#1653A3] bg-blue-100"
                      : emp.department == "Design"
                      ? " text-[#16A34A] bg-green-100"
                      : emp.department == "Product"
                      ? " text-[#A36616] bg-orange-100"
                      : emp.department == "Sales"
                      ? " text-[#8216A3] bg-purple-100"
                      : "text-slate-800"
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <GoDotFill /> {emp.department}
                  </span>
                </td>
                <td className="text-base font-medium">{emp.project}</td>
                <td className="text-base font-medium">{emp.notes}</td>
                <td className="text-base font-medium">
                  {statuses[emp.id] === "approved" ? (
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-2 text-xs px-3 py-1 text-green-700 bg-green-100 border border-green-300 rounded">
                        <FaCheckCircle size={16} /> Approved
                      </span>
                      <button
                        onClick={() => handleUndo(emp.id)}
                        className="text-xs px-3 py-1 bg-white rounded border"
                      >
                        Undo
                      </button>
                    </div>
                  ) : statuses[emp.id] === "rejected" ? (
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-2 text-xs px-3 py-1 text-red-600 bg-red-100 border border-red-300 rounded">
                        <GoXCircleFill size={16} /> Rejected
                      </span>
                      <button
                        onClick={() => handleUndo(emp.id)}
                        className="px-3 py-1 text-xs bg-white rounded border"
                      >
                        Undo
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleReject(emp.id)}
                        className="px-3 py-1 text-xs  text-red-600"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleApprove(emp.id)}
                        className="px-3 py-1 text-xs bg-[#089624] text-white rounded"
                      >
                        Approve
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  <div>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1 ">
                        <HiOutlineDotsVertical />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-xl z-1 w-52 p-2 shadow-xl shadow-black"
                      >
                        <li>
                          <div
                            onClick={() => {
                              setEditingEmployee(emp);
                              document.getElementById("edit_modal").showModal();
                            }}
                          >
                            <span className="text-base font-medium p-4 flex gap-2">
                              <BiEditAlt size={20} /> Edit Info
                            </span>
                          </div>
                        </li>
                        <li>
                          <span className="text-base font-medium p-4 border-y-2">
                            <RxDownload size={20} /> Export Excel
                          </span>
                        </li>
                        <li>
                          <span
                            className="text-base font-medium p-4 text-[#E02600]"
                            onClick={() => handleDelete(emp.id)}
                          >
                            {" "}
                            <RiDeleteBin6Line size={20} color="#E02600" />
                            Delete Info
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal update */}
      {editingEmployee && (
        <dialog id="edit_modal" className="modal">
          <div className="modal-box max-w-3xl">
            <form onSubmit={handleUpdateSubmit}>
              {/* Close button */}
              <button
                type="button"
                onClick={() => {
                  document.getElementById("edit_modal").close();
                  setEditingEmployee(null);
                }}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>

              <div>
                <h1 className="text-2xl font-semibold">
                  Edit Employee Information
                </h1>
                <div>
                  <div>
                    <label className="form-control flex flex-col w-40 mt-7">
                      <div className="label">
                        <span className="label-text font-medium text-sm">
                          Employee ID
                        </span>
                      </div>
                      <input
                        type="text"
                        name="id"
                        defaultValue={editingEmployee.id}
                        placeholder="Type ID"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="form-control flex flex-col w-1/2 mt-7">
                      <div className="label">
                        <span className="label-text font-medium text-sm">
                          Type Employee Name
                        </span>
                      </div>
                      <input
                        type="text"
                        defaultValue={editingEmployee.employeeName}
                        name="name"
                        placeholder="Type Name"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>

                  <div>
                    <div className="flex gap-4 mt-7">
                      <div className="w-2/4">
                        <div className="flex gap-4 items-center relative">
                          <label className="form-control flex flex-col w-52">
                            <div className="label">
                              <span className="label-text text-sm font-medium">
                                Select Department
                              </span>
                            </div>
                            <select
                              className="select select-bordered"
                              name="department"
                              defaultValue={editingEmployee.department}
                            >
                              <option value="" disabled>
                                Select one
                              </option>
                              <option value="design">Design</option>
                              <option value="development">Development</option>
                              <option value="Product">Product</option>
                              <option value="sales">Sales</option>
                            </select>
                          </label>
                          <div className="absolute top-5 right-1/4">
                            <CiSquarePlus size={35} color="#3E50F7" />
                          </div>
                        </div>
                      </div>

                      <div className="w-2/4">
                        <div className="flex gap-4 items-center relative">
                          <label className="form-control flex flex-col w-52">
                            <div className="label">
                              <span className="label-text text-sm font-medium">
                                Select Project
                              </span>
                            </div>
                            <select
                              className="select select-bordered"
                              name="project"
                              defaultValue={editingEmployee.project}
                            >
                              <option value="" disabled>
                                Select one
                              </option>
                              <option value="CRM Project">CRM Project</option>
                              <option value="HRM Project">HRM Project</option>
                            </select>
                          </label>
                          <div className="absolute top-5 right-1/4">
                            <CiSquarePlus size={35} color="#3E50F7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-20 mt-7">
                    <div className="flex gap-4 items-center relative">
                      <label className="form-control flex flex-col w-44">
                        <div className="label">
                          <span className="label-text font-medium text-sm">
                            Start Time
                          </span>
                        </div>
                        <input
                          type="time"
                          name="start_time"
                          placeholder="Type Start Time"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                      <div className="absolute top-5 -right-12">
                        <CiSquarePlus size={35} color="#3E50F7" />
                      </div>
                    </div>

                    <div className="flex gap-4 items-center relative">
                      <label className="form-control flex flex-col w-44">
                        <div className="label">
                          <span className="label-text font-medium text-sm">
                            End Time
                          </span>
                        </div>
                        <input
                          type="time"
                          name="end_time"
                          placeholder="Type End Time"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                      <div className="absolute top-5 -right-12">
                        <CiSquarePlus size={35} color="#3E50F7" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="form-control flex flex-col w-1/2 mt-7">
                      <div className="label">
                        <span className="label-text font-medium text-sm">
                          Type Note
                        </span>
                      </div>
                      <input
                        name="notes"
                        defaultValue={editingEmployee.notes}
                        className="input input-bordered w-full mb-3"
                        placeholder="note update"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => document.getElementById("my_modal_1").close()}
                >
                  Close
                </button>
                <input
                  type="submit"
                  value="Update Employee"
                  className="btn bg-[#3E50F7] text-white"
                />
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Table;
