import AboutSection from "../../components/Ui/AboutSection/AboutSection";
import CarItems from "../../components/Ui/CarItems/CarItems";
import FineCarFrom from "../../components/Ui/FindCarFrom/FineCarFrom";
import HeroSlider from "../../components/Ui/HeroSlider/HeroSlider";
import ServicesList from "../../components/Ui/ServicesList/ServicesList";
import BecomeDriverSection from "../../components/Ui/BecomeDriverSection/BecomeDriverSection";
import Testimonial from "../../components/Ui/Testimonial/Testimonial";
import Blogs from "../../components/Ui/Blogs/Blogs";

const Home = () => {
  return (
    <div className="bg-white">
      {/* HeroSilder section */}
      <HeroSlider className=""></HeroSlider>
      {/* FindCar From section */}
      <FineCarFrom></FineCarFrom>
      {/* About section */}
      <AboutSection></AboutSection>
      {/* Services section */}
      <ServicesList></ServicesList>
      {/* Car Data section */}
      <div className="mt-16 bg-white">
        <div className="text-center space-y-5">
          <h3 className="text-2xl font-bold font-poppins text-[#f9a826] ">
            Come Wit
          </h3>
          <h2 className="text-5xl font-poppins font-bold text-[#000d6b]">
            Hot Offers
          </h2>
        </div>
      </div>
      <CarItems></CarItems>
      {/*----------------- Driver section -----------*/}
      <BecomeDriverSection></BecomeDriverSection>
      {/*----------------- Driver section -----------*/}
      <section className="bg-white">
        <div className="">
          <div className="text-center mt-16 space-y-5">
            <h3 className="text-2xl font-bold text-[#f9a826]">
              Our Client Says
            </h3>
            <h1 className="text-5xl font-poppins font-bold text-[#000d6b]">
              Testimonials
            </h1>
          </div>
          <Testimonial></Testimonial>
        </div>
      </section>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
