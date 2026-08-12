import React from "react";
import { MainWrap } from "../style/MainPage_styled";
import { StyledSwiper } from "../style/Swiper_styled";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
const Main = () => {
  const slidedata = [
    {
      id: "1",
      title: "해운대 해수욕장",
      alt: "해운대",
      src: "/img/newMainBg1_0727.jpg",
    },
    {
      id: "2",
      title: "광안리 해수욕장",
      alt: "광안리",
      src: "/img/newMainBg2_0727.jpg",
    },
    {
      id: "3",
      title: "송도 해수욕장",
      alt: "송도",
      src: "/img/newMainBg3_0727.jpg",
    },
    {
      id: "4",
      title: "송정 해수욕장",
      alt: "송정",
      src: "/img/newMainBg4_0727_02.jpg",
    },
    {
      id: "5",
      title: "다대포 해수욕장",
      alt: "다대포",
      src: "/img/newMainBg7_0727.jpg",
    },
    {
      id: "6",
      title: "다대포 해수욕장",
      alt: "비디오",
      src: "/video/main_beach_vod2.mp4",
    },
  ];
  return (
    <MainWrap>
      <div className="main_slide">
        <StyledSwiper
          spaceBetween={30}
          effect={"fade"}
          speed={3000}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
        >
          {slidedata.map((item) => (
            <SwiperSlide key={item.id}>
              {item.id === "6" ? (
                <div className="video">
                  <video preload="auto" muted playsInline autoPlay>
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="imgbox">
                  <img src={item.src} alt={item.alt} />
                  <div className="img_info">{item.title}</div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </div>
      <div className="inner"></div>
    </MainWrap>
  );
};

export default Main;
