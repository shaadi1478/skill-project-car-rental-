import { FaCar } from "react-icons/fa";
import PropTypes from "prop-types";
import { MdOutlineSettings, MdSpeed } from "react-icons/md";
import { Link } from "react-router-dom";

const CarItem = ({ carData }) => {
  const {id, carName, imgUrl, model, price, speed, automatic } = carData;
  return (
    <div>
      <div className="card card-compact md:w-96 w-[425px]  bg-base-100 shadow-xl">
        <figure>
          <img src={imgUrl} />
        </figure>
        <div className="card-body">
          <div className="">
            <h2 className="card-title">{carName}</h2>
            <p className="">{price}/Day</p>
          </div>
          <div className=" md:flex justify-around text-xl">
            <p className="flex items-center gap-2">
              <FaCar />
              {model}
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <MdOutlineSettings />
              {automatic}
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <MdSpeed />
              {speed}
            </p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn bg-[#000d6b] hover:btn-ghost text-white hover:text-black w-[170px] font-bold">
              Rent
            </button>
            <button className="btn bg-[#f9a826] hover:btn-ghost text-black hover:text-black  w-[170px] font-bold">
             <Link to={`/cars/${id}`}> Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;

CarItem.propTypes = {
  carData: PropTypes.node,
};
