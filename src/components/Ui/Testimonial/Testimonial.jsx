// Import Swiper React components
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../../Pages/Style/styles.css";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

import ava01 from "../../../assets/testimonial/ava-1.jpg";
import ava02 from "../../../assets/testimonial/ava-2.jpg";
import ava03 from "../../../assets/testimonial/ava-3.jpg";
import ava04 from "../../../assets/testimonial/ava-4.jpg";

const Testimonial = () => {
  return (
    <div className="mt-20 bg-white md:w-full w-[425px]">
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="md:mySwiper">
        <SwiperSlide>
          <img src={ava01} alt="" className="" />
          <h3 className="text-xl font-bold">Jhon Doe</h3>
          <p className="text-[15px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            vero totam.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ava04} alt="" />
          <h3 className="text-xl font-bold">Jhon Doe</h3>
          <p className="text-[15px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            vero totam.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ava03} alt="" />
          <h3 className="text-xl font-bold">Jhon Doe</h3>
          <p className="text-[15px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            vero totam.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ava04} alt="" />
          <h3 className="text-xl font-bold">Jhon Doe</h3>
          <p className="text-[15px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            vero totam.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ava02} alt="" />
          <h3 className="text-xl font-bold">Jhon Doe</h3>
          <p className="text-[15px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            vero totam.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
