import { FaCarSide } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const MiddleNavbar = () => {
    return (
        <div>
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
        </div>
    );
};

export default MiddleNavbar;