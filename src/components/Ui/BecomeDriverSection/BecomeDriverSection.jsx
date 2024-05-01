import driver from "../../../assets/cars-img/toyota-offer-2.png";
import '../../../Pages/Style/BecomeDriver.css';

const BecomeDriverSection = () => {
  return (
    <section className="become__driver mt-20 md:w-full w-[425px] ">
      <div className="md:flex md:gap-16 gap-10 p-5 md:p-1 max-w-7xl mx-auto">
        <div>
          <img src={driver} alt="" className="w-full h-[260px]"/>
        </div>
        <div className="space-y-6">
          <h1 className="md:text-5xl text-4xl text-white font-semibold ">
            Do You Want to Earn Us? So <br /> Dont Be Late
          </h1>
          <button className="btn   hover:bg-white text-[#000d6b] hover:text-black font-bold">Become a Driver</button>
        </div>
      </div>
    </section>
  );
};

export default BecomeDriverSection;
