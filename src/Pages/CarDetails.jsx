import { FaCar } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { IoLocationOutline, IoSettingsOutline, IoTimerOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { TfiWheelchair } from "react-icons/tfi";
import { useLoaderData, useParams } from "react-router-dom";
import CarBookingSection from "../components/Ui/CarBookingSection/CarBookingSection";
import CommonSection from "../components/Ui/CommonSection/CommonSection";
import PaymentSection from "../components/Ui/PaymentSection/PaymentSection";

const CarDetails = () => {
  const cars = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const car = cars.find((car) => car.id === idInt);
  console.log(car);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="md:flex items-center px-3">
        <div className="w-full">
          <img src={car.imgUrl} alt="" />
        </div>
        <div className="space-y-4">
        <h4 className="text-4xl font-semibold">{car.carName}</h4>
          <div className="md:flex items-center gap-20">
            <p>${car.price} / Day</p>
            <div className="flex items-center gap-1 text-orange-500">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            ({car.rating})
            </div>
          </div>
          <div className="w-[390px] md:w-full">{car.description}</div>
          <div className="grid md:grid-cols-3 gap-5 text-center">
            <p className="flex items-center gap-1"><FaCar className="text-orange-400" />{car.model}</p>
            <p className="flex items-center gap-1"><IoSettingsOutline className="text-orange-400" />{car.automatic}</p>
            <p className="flex items-center gap-1"><IoTimerOutline className="text-orange-400" />{car.speed}</p>
            <p className="flex items-center gap-1"><IoLocationOutline className="text-orange-400" />{car.gps}</p>
            <p className="flex items-center gap-1"><TfiWheelchair className="text-orange-400" />{car.seatType}</p>
            <p className="flex items-center gap-1"><FaChartSimple className="text-orange-400" />{car.brand}</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
      <CommonSection></CommonSection>
      </div>
      <div className="mt-24 md:flex gap-72">
        <div>
          <h1 className="text-6xl md:text-4xl text-blue-950 font-bold text-center">Booking Information</h1>
        </div>

      </div>
      <div className="md:flex gap-16">
      <CarBookingSection></CarBookingSection>
      <PaymentSection></PaymentSection>
      </div>
    </div>
  );
};

export default CarDetails;
