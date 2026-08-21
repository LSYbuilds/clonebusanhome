import React from "react";
import { Link } from "react-router-dom";
import {
  MainWrap,
  GuideSection,
  NoticeSection,
} from "../style/MainPage_styled";
import {
  StyledSwiper,
  ServiceSwiper,
  NoticeSwiper,
} from "../style/Swiper_styled";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Icon from "../components/SvgComponents";
import noticeData from "../assets/data/notice.json";
const MainPage = () => {
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
  const IconSet = [
    { id: "1", subtitle: "경제", svg: Icon.lnbIco1 },
    { id: "2", subtitle: "일자리·노동·교육", svg: Icon.lnbIco2 },
    { id: "3", subtitle: "사회복지", svg: Icon.lnbIco3 },
    { id: "4", subtitle: "여성·가족", svg: Icon.lnbIco4 },
    { id: "5", subtitle: "보건·건강", svg: Icon.lnbIco5 },
    { id: "6", subtitle: "도시·건축·주택", svg: Icon.lnbIco6 },
    { id: "7", subtitle: "안전", svg: Icon.lnbIco7 },
    { id: "8", subtitle: "공원녹지·환경", svg: Icon.lnbIco8 },
    { id: "9", subtitle: "교통·물류", svg: Icon.lnbIco9 },
    { id: "10", subtitle: "해양논수산", svg: Icon.lnbIco10 },
    { id: "11", subtitle: "행정", svg: Icon.lnbIco11 },
    { id: "12", subtitle: "문화체육관광", svg: Icon.lnbIco12 },
  ];
  console.log("언디파인드?", noticeData.notice);
  const NoticeData = noticeData.notice;
  return (
    <MainWrap>
      <div className="main_slide">
        <StyledSwiper
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
        {/* 중앙 가이드 영역 */}
        <GuideSection>
          <div className="head_title_box">
            <p className="head_title">안내</p>
            <ul className="tag_list">
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
                <Link to="#">주요서비스+</Link>
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
            <div className="card_item date">
              <Link to="#">
                <Icon.calendar className="calender_icon" />
                <div className="title_box">
                  <p className="card_title">통합예약</p>
                  <div className="text">
                    <p>간편하게 예약하세요</p>
                    <p>강좌/교육,견학/체험,대관/대여</p>
                  </div>
                </div>
                <div className="icon_box">
                  <Icon.arrowHalf className="arrowhalf_icon" />
                </div>
              </Link>
            </div>
            <div className="card_item cul">
              <p className="card_title">문화</p>
              <ul className="cul_list">
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
                  <Link to="#">파란수도부산</Link>
                </li>
              </ul>
            </div>
            <div className="card_item tour">
              <div className="card_title_box">
                <p className="card_title">관광</p>
                <span className="card_btn">부산관광통계+</span>
              </div>
              <ul className="card_list">
                <li>
                  <Link to="#">{/* BGI 부산의 맛 */}</Link>
                </li>
                <li>
                  <Link to="#">{/* BGI VISIT BUSAN */}</Link>
                </li>
                <li>
                  <Link to="#">{/* BGI 부산갈맷길 */}</Link>
                </li>
                <li>
                  <Link to="#">{/* BGI 메디컬 부산 */}</Link>
                </li>
              </ul>
            </div>
            <div className="card_item mayor">
              <p className="card_title">
                <span>부산광역시장</span>
                <span className="name">전재수</span>
              </p>
              <div className="card_list_box">
                <ul className="card_list">
                  <li>
                    <Link to="#">정책제안+</Link>
                  </li>
                  <li>
                    <Link to="#">일정+</Link>
                  </li>
                  <li>
                    <Link to="#">취임사+</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="service_slide">
            {/* 이거 1260px */}
            <div className="service_in">
              <ServiceSwiper slidesPerView={12}>
                {IconSet.map((item) => {
                  const SvgIcon = item.svg;
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="icon">{SvgIcon && <SvgIcon />}</div>
                      <p className="icon_title">{item.subtitle}</p>
                    </SwiperSlide>
                  );
                })}
              </ServiceSwiper>
            </div>
          </div>
        </GuideSection>
        {/* 알림영역 */}
        <NoticeSection>
          <div className="head_title_box">
            <p className="head_title">알림</p>
          </div>
          <div className="notice_wrap">
            <div className="sub_title_box">
              <span className="sub_title">공지사항</span>
              <span className="more_btn">go +</span>
            </div>
            <div className="notice_list">
              <NoticeSwiper slidesPerView={3} spaceBetween={50}>
                {NoticeData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <p className="notice_title">{item.title}</p>
                    <p className="notice_text">{item.text}</p>
                    <p className="notice_date">{item.date}</p>
                  </SwiperSlide>
                ))}
              </NoticeSwiper>
            </div>
          </div>
        </NoticeSection>
      </div>
    </MainWrap>
  );
};

export default MainPage;
