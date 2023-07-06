import { Swiper, SwiperSlide } from "swiper/react";
import lugares from "../../fakeApiLugares";

import "swiper/css";

export const Lugares = () => {
  return (
    <div className="">
       
        <div className="flex justify-center ">
             <h2 className="text-3xl p-12">Lugares del mundo</h2>
        </div>
      <Swiper
       
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {lugares.map((playa, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={playa.imagen} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
