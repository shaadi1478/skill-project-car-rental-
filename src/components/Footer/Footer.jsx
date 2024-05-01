import { FaCarSide } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return <div className="bg-white md:w-full w-[425px]">
    <footer className="footer p-10 bg-[#000d6b] mt-10">
  <aside className="text-white">
  <a className="btn btn-ghost  items-center gap-4 text-3xl  md:text-[40px]"><FaCarSide className="text-7xl"></FaCarSide>Rent Car <br /> Service</a>
    <p className="md:w-[550px] w-[285px] md:mt-20 mt-12 text-[14px] text-gray-400 leading-8">
Welcome to Some Line Rent a Car, where every journey begins with convenience and ends with satisfaction. Whether youre seeking a sleek sedan for city exploration or a rugged SUV for off-road adventures, weve got the perfect wheels for you. With our fleet of well-maintained vehicles and flexible rental options, your road trip dreams are just a reservation away. Lets embark on your next adventure together!
</p>
  </aside> 
  <nav className="gap-y-6 font-semibold text-[14px] text-gray-400 ">
    <h6 className="footer-title">Quick Links</h6> 
    <Link to='/about' className="link link-hover">About</Link>
    <Link to='/privacy' className="link link-hover">Privacy Policy</Link>
    <Link to='/cars' className="link link-hover">Car Listing</Link>
    <Link to='/blogs' className="link link-hover">Blog</Link>
    <Link to='/contact' className="link link-hover">Contact</Link>
  </nav> 
  <nav className="gap-y-6 font-semibold text-[14px] text-gray-400 ">
    <h6 className="footer-title">Heade Office</h6> 
    <a className="link link-hover">Boikali Joshor Rode Khulna</a>
    <a className="link link-hover">Phone : +880 1956686338</a>
    <a className="link link-hover">Email : rentcarservice@gmail.com</a>
    <a className="link link-hover">Office Time : 5pm - 8pm</a>
  </nav> 
  <form>
    <h6 className="footer-title text-gray-200 ">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label ">
        <span className="label-text text-gray-400 ">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-64 md:w-full join-item" /> 
        <button className="btn btn-primary join-item"><LuSend className="text-xl"></LuSend></button>
      </div>
    </fieldset>
  </form>
</footer>
<footer className="footer footer-center p-4 border-t-[1px] bg-[#000d6b]  text-base-content">
  <aside>
    <p className="text-gray-200 uppercase">Copyright © {year}  Developer by SHAADI || TAMJID. All right reserved</p>
  </aside>
</footer>
  </div>;
};

export default Footer;
