import { Swiper, SwiperSlide } from "swiper/react";
import lugares from "../../fakeApiLugares";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';





export const Lugares = () => {
 
  

  
  return (
    <div className="container">
      <div className="justify-center ">
        <h2 className="text-3xl p-12">Lugares del mundo</h2>
         <Swiper
    
    breakpoints={{
      // Configura las opciones del Swiper para diferentes tamaños de pantalla
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
        spaceBetween: 40,
      },
    }}
        modules={[Navigation, Pagination,Autoplay]}
        loop={true}
        grabCursor={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={true}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
      

        
      </div>
     
   
  );
};
