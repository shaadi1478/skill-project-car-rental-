import AboutSection from "../components/Ui/AboutSection/AboutSection";
import CommonSection from "../components/Ui/CommonSection/CommonSection";

import driver from "../assets/cars-img/drive.jpg";
import { FiPhoneCall } from "react-icons/fi";
import BecomeDriverSection from "../components/Ui/BecomeDriverSection/BecomeDriverSection";
import OurMember from "../components/Ui/OurMember/OurMember";

const About = () => {
  return (
    <div>
      <CommonSection title={"About Us"}></CommonSection>
      <AboutSection></AboutSection>
      <section className=" gap-10 items-center max-w-7xl mx-auto mt-20 p-2 md:p-0">
        <div className="md:flex gap-5">
        <div>
          <img src={driver} alt="" className="w-[660px]" />
        </div>
        <div className="space-y-5 w-[800px]">
          <h1 className="text-[30px] font-semibold text-blue-950">
            We are the Committed To <br />Provide Safe Ride Solutions{" "}
          </h1>
          <div className="md:w-[650px] w-96 text-[17px] space-y-2 text-gray-600">
            <p>
            Committed to providing safe ride solutions, we prioritize your well-being every step of the way. With a steadfast dedication to passenger safety, we ensure that every journey is secure and reliable. Our team is committed to implementing rigorous safety standards, employing skilled drivers, and maintaining our fleet to the highest standards.
            </p>

            <p>
            Committed to providing safe ride solutions, we prioritize your well-being every step of the way. With a steadfast dedication to passenger safety, we ensure that every journey is secure and reliable. Our team is committed to implementing rigorous safety standards, employing skilled drivers, and maintaining our fleet to the highest standards. 
            </p>

          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl"><FiPhoneCall /></span>
            <div>
              <h3 className="text-[#eb9408] font-bold">Need Any Help?</h3>
              <h4>+880 1956686338</h4>
            </div>
          </div>
        </div>
        </div>
      </section>
      <BecomeDriverSection></BecomeDriverSection>
      <section>
        <div>
          <div className="text-center mt-10 space-y-3">
            <h5 className="text-[#eb9408] font-bold">Experts</h5>
            <h2 className="text-4xl font-bold text-blue-950">Our Members</h2>
          </div>
          <OurMember></OurMember>
        </div>
      </section>
    </div>
  );
};

export default About;
