import { LuSlidersHorizontal } from "react-icons/lu";
import CommonSection from "../components/Ui/CommonSection/CommonSection";
import CarItems from "../components/Ui/CarItems/CarItems";

const CarListing = () => {
  return (
    <div>
      <div>
      <CommonSection></CommonSection>
      </div>
      <section className="max-w-7xl mx-auto mt-20">
        <div>
          <div>
            <span>
            <LuSlidersHorizontal />
            </span>
            <select name="" id="">
              <option value="">Select</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
          <div>
            <CarItems></CarItems>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarListing;