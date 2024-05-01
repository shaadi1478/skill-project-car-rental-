import { Link, NavLink } from "react-router-dom";
import { IoIosCall, IoMdSearch } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";

const Header = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/cars">Cars</NavLink></li>
        <li><NavLink to="blogs">Blog</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
    </>
  return (
    <div className="md:w-full w-[425px]">
      <div className="md:navbar bg-[#000d6b] lg:px-14 px-14">
        <div className="md:navbar-start  ">
          <a className="btn btn-ghost md:text-xl text-white items-center">Need Help <IoIosCall className="bg-white text-black rounded-full"></IoIosCall>+880 1956686338 </a>
        </div>
        <div className="md:navbar-end flex gap-12 navbar-center ml-16 md:gap-4 ">
          <Link className="text-white" to="/login">Login</Link>
          <Link className="text-white" to="/register">Register</Link>
        </div>
      </div>
      {/* middle header section */}
      <div className="md:navbar bg-base-100 lg:px-14">
  <div className="navbar-start">
    <a className="btn btn-ghost md:text-xl text-xs items-center  text-blue-600"><FaCarSide className="text-4xl text-blue-600"></FaCarSide>Rent Car <br /> Service</a>
  </div>
  <div className="md:navbar-center mt-1">
    <ul className="md:flex md:gap-40 gap-5 items-center space-y-10 md:space-y-0">
    <div className="flex items-center gap-3 text-blue-900">
    <TbWorld className="text-3xl"></TbWorld>
    <li className="font-bold">Khulna <br /> <span className="font-semibold">City Bangladesh</span></li>
    </div>
    <div  className="flex items-center gap-3  text-blue-900">
    <MdOutlineWatchLater  className="text-3xl"></MdOutlineWatchLater>
    <li className="font-bold">Sunday to Friday <br /><span className="font-semibold">5pm - 8pm</span></li>
    </div>
    </ul>
  </div>
  <div className="md:navbar-end">
  <a className="btn bg-[#000d6b] hover:text-blue-600 text-white font-bold  text-[16px] w-full md:w-44"><IoIosCall></IoIosCall> Request Call</a>
  </div>
</div>
{/* main navbar */}
<div className="md:navbar bg-[#000d6b] text-white md:px-14">
  <div className=" md:px-[510px] flex justify-around list-none gap-2 md:gap-10 p-5 md:p-0">
    {navLinks}
  </div>
  <div className="hidden">
    <div className="md:flex items-center md:relative">
        <IoMdSearch className="md:absolute text-black md:ml-44 text-xl"></IoMdSearch>
      <input type="text" placeholder="Search" className="input input-bordered text-black h-10 md:w-auto" />
    </div>
  </div>
</div>
    </div>
    
  );
};

export default Header;
