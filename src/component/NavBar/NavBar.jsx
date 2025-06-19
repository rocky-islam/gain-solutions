import logo from '../../assets/logo.png';
import userPic from '../../assets/Rectangle7647.png';
const NavBar = () => {
  const navLink = (
    <>
      <li className='font-medium text-lg text-[#5A5B5F]'>
        <a href="">Home</a>
      </li>
      <li className='font-medium text-lg text-[#3E50F7]'>
        <a href="">Employee</a>
      </li>
      <li className='font-medium text-lg text-[#5A5B5F]'>
        <a href="">Hiring</a>
      </li>
      <li className='font-medium text-lg text-[#5A5B5F]'>
        <a href="">Report</a>
      </li>
      <li className='font-medium text-lg text-[#5A5B5F]'>
        <a href="">Files</a>
      </li>
      <li className='font-medium text-lg text-[#5A5B5F]'>
        <a href="">Payroll</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 px-14 shadow-xl shadow-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className='navbar-center'>
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
              <input type="text" className="grow" placeholder="Search Anything...." />
            </label>
          </div>
        </div>
        <div className="navbar-end">
          
          <div className='flex gap-4'>
            <div>
                <p className='font-bold text-base text-right text-[#141928]'>Sadik Hasan</p>
                <p className='font-medium text-sm text-right text-[#5A5B5F]'>Friday, 29 September</p>
            </div>
            <div>
                <img src={userPic} alt="User Photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
