import React from "react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard02 from "../../Components/SliderCards/SliderCard02";
const Slider02 = () => {
  const SwiperSlideData02 = [
    // {
    //     id: "4",
    //     bg: "images/banner/4.png",
    //     heading: "Spacious & Stylish",
    //     description:
    //       "Discover Your Ideal Home Today",
    //     obj1: "floating_object_1",
    //     obj2: "floating_object_2",
    //     obj3: "floating_object_5",
    //     obj4: "floating_object_6",
    //     img1: "images/slider/objects/1.png",
    //     img2: "images/slider/objects/2.png",
    //     img3: "images/slider/objects/5.png",
    //     img4: "images/slider/objects/6.png",
    //   },
    {
      id: "2",
      bg: "images/banner/2.png",
      heading: "Luxury & Comfort",
      description:
        "Explore Modern Living Spaces",
      obj1: "floating_object_1",
      obj2: "floating_object_2",
      obj3: "floating_object_5",
      obj4: "floating_object_6",
      img1: "images/slider/objects/1.png",
      img2: "images/slider/objects/2.png",
      img3: "images/slider/objects/5.png",
      img4: "images/slider/objects/6.png",
    },
    // {
    //   id: "3",
    //   bg: "images/banner/3.png",
    //   heading: "Elevate Your Business",
    //   description:
    //     "Premium Commercial Spaces Available",
    //   obj1: "floating_object_1",
    //   obj2: "floating_object_2",
    //   obj3: "floating_object_5",
    //   obj4: "floating_object_6",
    //   img1: "images/slider/objects/1.png",
    //   img2: "images/slider/objects/2.png",
    //   img3: "images/slider/objects/5.png",
    //   img4: "images/slider/objects/6.png",
    // },
    // {
    //   id: "4",
    //   bg: "images/banner/4.png",
    //   heading: "Spacious & Stylish",
    //   description:
    //     "Discover Your Ideal Home Today",
    //   obj1: "floating_object_1",
    //   obj2: "floating_object_2",
    //   obj3: "floating_object_5",
    //   obj4: "floating_object_6",
    //   img1: "images/slider/objects/1.png",
    //   img2: "images/slider/objects/2.png",
    //   img3: "images/slider/objects/5.png",
    //   img4: "images/slider/objects/6.png",
    // },
    {
      id: "5",
      bg: "images/banner/5.png",
      heading: "Smart Home Designs",
      description:
        "Built for Your Lifestyle",
      obj1: "floating_object_1",
      obj2: "floating_object_2",
      obj3: "floating_object_5",
      obj4: "floating_object_6",
      img1: "images/slider/objects/1.png",
      img2: "images/slider/objects/2.png",
      img3: "images/slider/objects/5.png",
      img4: "images/slider/objects/6.png",
    },
  ];
  return (
    <div className="theme_slider_2" style={{paddingTop:"10rem"}}>
      <div className="swiper-container">
        {/* <div className="swiper-wrapper"> */}
        <Swiper
          // className='swiper-wrapper'
          modules={[EffectCreative, Autoplay, Navigation, Pagination]}
          effect="creative"
          speed={1000} // Adjust speed for smoothness
        creativeEffect={{
          prev: {
            translate: ["-100%", 0, -300], // Move out slowly
            opacity: 0.9, // Fade effect (darken)
            scale: 0.85, // Shrink a bit
          },
          next: {
            translate: ["100%", 0, -100], // Moves in faster but not instantly
            opacity: 1, // Fully visible
            scale: 0.85, // Normal size
          },
        }}
        //   grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="rounded-lg shadow-lg overflow-hidden bg-black"
          pagination={{
            el: "swiper-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {SwiperSlideData02.map((data) => (
            <SwiperSlide>
              {" "}
              <SliderCard02 key={data.id} data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <!-- Add Pagination --> */}
        <div className="swiper-pagination"></div>

        {/* <!-- Add Buttons --> */}
        <div className="swiper-navigation">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider02;
