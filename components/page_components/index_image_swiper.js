import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function ImageSwiper() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><img alt="" src={"./BANNER1.jpg"} style={{height:"40em"}}/></SwiperSlide>
        <SwiperSlide><img alt="" src={"./BANNER2.jpg"} style={{height:"40em"}}/></SwiperSlide>
        <SwiperSlide><img alt="" src={"./BANNER3.jpg"} style={{height:"40em"}}/></SwiperSlide>
      </Swiper>
    </div>
  );
}
