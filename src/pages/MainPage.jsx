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
      <div className="inner">
        <p className="head_title">안내</p>
        <div className="tag_box">
          <ul>
            <li>
              <Link to="#">민생100일 비상조치+</Link>
            </li>
            <li>
              <Link to="#">무더위 쉼터+</Link>
            </li>
            <li>
              <Link to="#">고유가 피해지원금+</Link>
            </li>
            <li>
              <Link to="#">공공계약 모니터링+</Link>
            </li>
            <li>
              <Link to="#">주우서비스+</Link>
            </li>
            <li>
              <Link to="#">시민참여+</Link>
            </li>
            <li>
              <Link to="#">부산의 공원+</Link>
            </li>
            <li>
              <Link to="#">도모헌+</Link>
            </li>
          </ul>
        </div>
        <div className="gra_card_wrap">
          <div className="card_item">
            <Link to="#">
              {/* 링크에 백그라운드 달력 이미지 추가해야함  */}
              <p className="card_title">통합예약</p>
              <p className="text">
                <span>간편하게 예약하세요</span>
                <span>강좌/교육,견학/체험,대관/대여</span>
              </p>
              <span>{/* 화살표아이콘 넣어야해 */}</span>
            </Link>
          </div>
          <div className="card_item">
            <p className="card_title">문화</p>
            <ul>
              <li>
                <Link to="#">부산문화포털 다봄</Link>
              </li>
              <li>
                <Link to="#">부산콘서트홀</Link>
              </li>
              <li>
                <Link to="#">부산미래유산</Link>
              </li>
              <li>
                <Link to="#"></Link>
              </li>
            </ul>
          </div>
          <div className="card_item"></div>
          <div className="card_item">
            <Link to="#"></Link>
          </div>
        </div>
      </div>
    </MainWrap>
  );
};

export default Main;
