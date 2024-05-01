import { FaCheckCircle } from "react-icons/fa";
import about from "../../../assets/cars-img/bmw-offer.png";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-28 bg-white">
      <div className="gap-52 items-center">
        <div className="space-y-4">
        <h3 className="text-[#f9a826] font-bold text-center md:text-start text-3xl ">
            About Us
          </h3>
          <h1 className="text-4xl font-semibold text-[#000d6b] text-start p-5 md:p-0">
            Welcome to car rent service
          </h1>
        </div>
        <div className="space-y-3 md:flex flex-row-reverse ">
        
          <img src={about} alt="" className="md:h-64 h-full" />
          <div>
          <p className="md:w-[660px] w-[425px] mr-[236px] mt-5 p-3 md:p-0">
          Welcome to our premier car rental service, where convenience, reliability, and customer satisfaction are our top priorities. Whether you need a vehicle for a weekend getaway or a business trip, we have got you covered. With a diverse fleet of well-maintained cars and friendly customer support, we make renting a car a seamless experience. Enjoy the freedom to explore without worries, knowing that youre backed by our commitment to quality service. Discover hassle-free car rental with us today.
          </p>
          <div>
            <div className="mt-5 gap-5 grid grid-cols-1 md:grid-cols-2 items-center p-3">
              <p className="flex gap-2 items-center">
                <FaCheckCircle className="text-[#f9a826]" />
                Fleet Variety: Rental companies
              </p>
              <p className="flex gap-2 items-center">
                <FaCheckCircle className="text-[#f9a826]" />
                Reservation Process: Customers
              </p>
              <p className="flex gap-2 items-center">
                <FaCheckCircle className="text-[#f9a826]" />
                Rental Terms and Conditions
              </p>
              <p className="flex gap-2 items-center">
                <FaCheckCircle className="text-[#f9a826]" />
                Additional Services: Some
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
