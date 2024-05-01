import slider1 from '../../../assets/slider-img/slider-2.jpg'
import slider2 from '../../../assets/slider-img/slider-1.jpg'
import slider3 from '../../../assets/slider-img/slider-3.jpg'
import slider4 from '../../../assets/slider-img/slider-4.jpg'


const HeroSlider = () => {
  return (
    <div>
              <div>
            <div className="carousel md:w-full md:h-[690px] w-[425px]">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='absolute md:ml-60 ml-20 md:mt-48 mt-10 text-white md:space-y-4 space-y-1'>
        <h3 className='md:text-xl font-bold'>For Rent $5 Per Hours</h3>
        <h1 className='md:text-6xl font-bold'>Reserve Now and <br /> Get 50% Off</h1>
        <button className='btn bg-[#000d6b] border-none hover:text-black text-white font-bold'>Reserve Now</button>
    </div>
    <img src={slider1} className="w-full bg-gradient-to-r" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='absolute md:ml-60 ml-20 md:mt-48 mt-10 text-white md:space-y-4 space-y-1'>
        <h3 className='md:text-xl font-bold'>For Rent $5 Per Hours</h3>
        <h1 className='md:text-6xl font-bold'>Reserve Now and <br /> Get 50% Off</h1>
        <button className='btn bg-[#000d6b] border-none hover:text-black text-white font-bold'>Reserve Now</button>
    </div>
    <img src={slider2} className="w-full bg-gradient-to-r" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='absolute md:ml-60 ml-20 md:mt-48 mt-10 text-white md:space-y-4 space-y-1'>
        <h3 className='md:text-xl font-bold'>For Rent $5 Per Hours</h3>
        <h1 className='md:text-6xl font-bold'>Reserve Now and <br /> Get 50% Off</h1>
        <button className='btn bg-[#000d6b] border-none hover:text-black text-white font-bold'>Reserve Now</button>
    </div>
    <img src={slider3} className="w-full bg-gradient-to-r" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className='absolute md:ml-60 ml-20 md:mt-48 mt-10 text-white md:space-y-4 space-y-1'>
        <h3 className='md:text-xl font-bold'>For Rent $5 Per Hours</h3>
        <h1 className='md:text-6xl font-bold'>Reserve Now and <br /> Get 50% Off</h1>
        <button className='btn bg-[#000d6b] border-none hover:text-black text-white font-bold'>Reserve Now</button>
    </div>
    <img src={slider4} className="w-full bg-gradient-to-r" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    </div>
  );
};

export default HeroSlider;