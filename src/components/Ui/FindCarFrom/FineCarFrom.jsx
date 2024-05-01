import { FaCar } from "react-icons/fa";


const FineCarFrom = () => {
  
    const handleFindCar = e => {
        e.preventDefault()
    }
    
  return (
    <div className="md:relative md:ml-32 mx-auto ">
        <div className="bg-gray-200 md:flex md:absolute shadow-2xl md:-my-40 p-3 md:p-0">
        <div className="">
           <div className=" md:w-[405px]  h-60 bg-orange-500 md:mx-10">
          <div className="card-body">
            <h2 className="card-title text-white font-bold text-[28px]  mt-12">
              <FaCar className="text-5xl gap-5" ></FaCar>Find Your Best Car Here!
            </h2>
          </div>
        </div>
           </div>
        <form action="" className="md:px-7">
        <div className="md:mt-10 mt-5 md:space-x-4 space-y-3">
          <input
            type="text"
            placeholder="From Address"
            className="input input-bordered input-primary w-[400px] md:w-52"
          />
          <input
            type="text"
            placeholder="To Address"
            className="input input-bordered input-primary w-[400px] md:w-52 "
          />
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered input-primary md:w-[190px] w-[400px] "
          />
        </div>
        <div className="md:mt-10 mt-5 md:space-x-4 space-y-3 ">
          <input
            type="time"
            value="Journey Time"
            placeholder="Jouarney time"
            className="input input-bordered input-primary md:w-52 w-[400px] "
          />
          <select className="select select-primary md:w-52 w-[400px]">
            <option value="">Select car type</option>
            <option>AC</option>
            <option>Non AC</option>
          </select>
          <input
          onClick={handleFindCar}
            type="submit"
            value="Find Car"
            className="input input-bordered input-primary md:w-52 w-[400px] btn hover:btn-primary bg-primary text-white"
          />
        </div>
      </form>
        </div>
    </div>
  );
};

export default FineCarFrom;
