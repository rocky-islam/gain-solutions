import { RxDownload } from "react-icons/rx";
import empLogo from "../../assets/emp-Frame1261156553.png";
// import { LuUserRoundPlus } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa6";
import Table from "../../component/Table/Table";

const EmployeeLog = () => {
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
          <button className="btn bg-white px-7 py-2 font-semibold">Export Excel <span><RxDownload size={16}/></span></button>
          <button className="btn btn-primary font-semibold"><span><FaUserPlus size={16}/></span> Add Employee</button>
        </div>
      </div>
      <div className="mt-6">
        <Table></Table>
      </div>
    </div>
  );
};

export default EmployeeLog;
