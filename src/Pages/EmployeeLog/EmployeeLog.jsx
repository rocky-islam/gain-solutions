import { RxDownload } from "react-icons/rx";
import empLogo from "../../assets/emp-Frame1261156553.png";
// import { LuUserRoundPlus } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa6";
import Table from "../../component/Table/Table";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeLog = () => {
  const [employee, setEmployee] = useState([]);

  // const [closeModal, setCloseModal] = useState(true)

  useEffect(() => {
    fetch("employeeData.json")
      .then((res) => res.json())
      .then((data) => {
        setEmployee(data);
      })
      .catch((e) => console.log("error :", e));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const department = form.department.value;
    const project = form.project.value;
    const startTime = form.start_time.value;
    const endTime = form.end_time.value;

    console.log(id, name, department, project, startTime, endTime);

    const [startH, startM] = startTime.split(":").map(Number);
  const [endH, endM] = endTime.split(":").map(Number);

  let startTotal = startH * 60 + startM;
  let endTotal = endH * 60 + endM;

  let diff = endTotal - startTotal;

  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;
  console.log(hours, minutes)
  
  // dueHrs
  const TOTAL_MINUTES = 8 * 60; // 8 hours = 480 minutes

  // Convert spent time to minutes
  const spentMinutes = hours * 60 + minutes;

  // Calculate remaining minutes
  const remainingMinutes = TOTAL_MINUTES - spentMinutes;

  // Convert back to HH:MM
  const remainingHours = Math.floor(remainingMinutes / 60);
  const remainingMins = remainingMinutes % 60;

    
    const newEmployee = {
      id: id,
      employeeName: name,
      duration: hours+"hr "+minutes+"min",
      startTimeEndTime: startTime + " - " + endTime,
      dueHours: remainingHours+"hr "+remainingMins+"min",
      department: department,
      project: project,
      notes: "",
    };

    console.log(newEmployee);
    setEmployee([...employee, newEmployee]);
  };

  // Delete
  const handleDelete = (id) => {
    setEmployee((prev) => prev.filter((emp) => emp.id != id));
  };


  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div>
            <img src={empLogo} alt="Picture" />
          </div>
          <div>
            <p className="text-2xl font-bold">Employee Time</p>
            <p className="text-xs font-medium text-[#5F6776]">
              Manage your time logs
            </p>
          </div>
        </div>
        <div className="gap-5 flex">
          <button className="btn bg-white px-7 py-2 font-semibold">
            Export Excel{" "}
            <span>
              <RxDownload size={16} />
            </span>
          </button>
          {/* add modal */}
          <button
            className="btn btn-primary font-semibold"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <span>
              <FaUserPlus size={16} />
            </span>{" "}
            Add Employee
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box max-w-3xl">
              <form onSubmit={handleSubmit}>
                {/* Close button */}
                <button
                  type="button"
                  onClick={() => document.getElementById("my_modal_1").close()}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>

                <div>
                  <h1 className="text-2xl font-semibold">
                    Employee Information
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
                          name="name"
                          placeholder="Type Name"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                    </div>

                    <div>
                      <div className="flex gap-4 mt-7">
                        <div className="w-2/4">
                          <div className="flex gap-4 items-center">
                            <label className="form-control flex flex-col w-52">
                              <div className="label">
                                <span className="label-text text-sm font-medium">
                                  Select Department
                                </span>
                              </div>
                              <select
                                className="select select-bordered"
                                name="department"
                                defaultValue=""
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
                            <div>
                              <CiSquarePlus size={35} color="#3E50F7" />
                            </div>
                          </div>
                        </div>

                        <div className="w-2/4">
                          <div className="flex gap-4 items-center">
                            <label className="form-control flex flex-col w-52">
                              <div className="label">
                                <span className="label-text text-sm font-medium">
                                  Select Project
                                </span>
                              </div>
                              <select
                                className="select select-bordered"
                                name="project"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select one
                                </option>
                                <option value="CRM Project">CRM Project</option>
                                <option value="HRM Project">HRM Project</option>
                              </select>
                            </label>
                            <div>
                              <CiSquarePlus size={35} color="#3E50F7" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-20 mt-7">
                      <div className="flex gap-4 items-center">
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
                        <div>
                          <CiSquarePlus size={35} color="#3E50F7" />
                        </div>
                      </div>

                      <div className="flex gap-4 items-center">
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
                        <div>
                          <CiSquarePlus size={35} color="#3E50F7" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-action">
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_1").close()
                    }
                  >
                    Close
                  </button>
                  <input type="submit" value="Add Employee" className="btn bg-[#3E50F7] text-white" />
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      <div className="mt-6">
        <Table employee={employee} setEmployee={setEmployee} handleDelete={handleDelete}></Table>
      </div>
    </div>
  );
};

export default EmployeeLog;
