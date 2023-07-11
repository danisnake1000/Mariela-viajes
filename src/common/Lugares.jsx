import { Swiper, SwiperSlide } from "swiper/react";
import lugares from "../../fakeApiLugares";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Lugares = () => {
  return (
    <div>
      <div className="justify-center">
        <h2 className="text-3xl p-12 text-center">Lugares del mundo</h2>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={true}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          
        >
          {lugares.map((playa, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img src={playa.imagen} alt={`Playa ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};