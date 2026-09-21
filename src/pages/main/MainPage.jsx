import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  MainWrap,
  GuideSection,
  NoticeSection,
  CommuSection,
  BannerSection,
} from "../../style/mainStyle/MainPage_styled";
import {
  StyledSwiper,
  ServiceSwiper,
  NoticeSwiper,
  BannerSwiper,
  MobileScrapSwiper,
} from "../../style/mainStyle/Swiper_styled";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import Icon from "../../components/common/SvgComponents";
import noticeData from "../../assets/data/notice.json";
import newsData from "../../assets/data/newsData.json";
import { img, p } from "framer-motion/client";
const MainPage = () => {
  const [hoveredId, setHoveredId] = useState(null);
  // 중요 //
  const publicPath = (path) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  const controls = useAnimation();
  const newsScrap = newsData.scrap;
  const handleViewPortEnter = () => {
    controls.start({
      opacity: 1,
      y: 0,
    });
  };
  const handleViewPortLeave = () => {
    controls.start({
      opacity: 0,
      y: 50,
    });
  };
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
  const buttonSet = [
    {
      id: 1,
      text: "의 공연&전시+",
      svg: "",
      src: "",
    },
    {
      id: 2,
      text: "행사&축제+",
      svg: Icon.commuIconBusan,
      svgh: Icon.commuIconBusanH,
      src: "",
    },
    {
      id: 3,
      text: "보도자료+",
      svg: Icon.commuIconMic,
      svgh: Icon.commuIconMicH,
      src: "",
    },
    {
      id: 4,
      text: "부산시보+",
      svg: Icon.commuIconNote,
      svgh: Icon.commuIconNoteH,
      src: "",
    },
    {
      id: 5,
      text: "전자책(e-book)+",
      svg: Icon.commuIconNote,
      svgh: Icon.commuIconNoteH,
      src: "",
    },
    {
      id: 6,
      text: "부산어린이신문+",
      svg: "",
      src: "/img/icon_18.png",
      srch: "/img/icon_18_h.png",
    },
    {
      id: 7,
      text: "부산튜브+",
      svg: Icon.commuIconYoutube,
      svgh: Icon.commuIconYoutubeH,
      src: "",
    },
    {
      id: 8,
      text: "인스타그램+",
      svg: "",
      src: "/img/instar_icon.png",
      scrh: "/img/instar_icon_h.png",
    },
    {
      id: 9,
      text: "블로그+",
      svg: "",
      src: "",
    },
    {
      id: 10,
      text: "페이스북+",
      svg: Icon.commuIconFace,
      svgh: Icon.commuIconFaceH,
    },
    {
      id: 11,
      text: "X+",
      svg: "",
      src: "/img/ico_X_co.png",
      srch: "/img/ico_X_co_h.png",
    },
    {
      id: 12,
      text: "카카오스토리+",
      svg: "",
      src: "/img/ico_kakao_co.png",
      srch: "/img/ico_kakao_co_h.png",
    },
    {
      id: 13,
      text: "SNS 모아보기+",
      svg: "",
      src: "/img/icon_17.png",
      srch: "/img/icon_17_h.png",
    },
    {
      id: 14,
      text: "비비빅+",
      svg: "",
      src: "/img/icon_20.png",
      srch: "/img/icon_20_h.png",
    },
    {
      id: 15,
      text: "소통캐릭터 부기+",
      svg: Icon.commuIconBugi,
      svgh: Icon.commuIconBugiH,
      src: "",
    },
    {
      id: 16,
      text: "부산영어방송+",
      svg: "",
      src: "/img/ico_beb_color.png",
      srch: "/img/ico_beb_color_h.png",
    },
    {
      id: 17,
      text: "재미있는 부산+",
      svg: "",
      src: "/img/icon_camp.png",
      srch: "/img/icon_camp_h.png",
    },
    {
      id: 18,
      text: "부산파크골프+",
      svg: "",
      src: "/img/icon_park.png",
      srch: "/img/icon_park_h.png",
    },
    {
      id: 19,
      text: "부산 영상 아카이브+",
      svg: "",
      src: "/img/icon_19.png",
      srch: "/img/icon_19_h.png",
    },
    {
      id: 20,
      text: "시청소식 문자알림서비스+",
      svg: "",
      src: "/img/icon_17.png",
      srch: "/img/icon_17_h.png",
    },
  ];
  const bannerSlide = [
    {
      id: "1",
      src: "/img/banner/banner1.jpg",
    },
    {
      id: "2",
      src: "/img/banner/banner2.jpg",
    },
    {
      id: "3",
      src: "/img/banner/banner3.jpg",
    },
    {
      id: "4",
      src: "/img/banner/banner4.jpg",
    },
    {
      id: "5",
      src: "/img/banner/banner5.jpg",
    },
    {
      id: "6",
      src: "/img/banner/banner6.jpg",
    },
    {
      id: "7",
      src: "/img/banner/banner7.jpg",
    },
  ];
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
                    <source src={publicPath(item.src)} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="imgbox">
                  <img src={publicPath(item.src)} alt={item.alt} />
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
            <motion.div
              className="card_item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="card_bg"></div>
              <div className="card_inset date">
                <Link to="#">
                  <Icon.calendar className="calender_icon" />
                  <div className="title_box">
                    <p className="card_title">통합예약</p>
                    <div className="text">
                      <p>간편하게 예약하세요</p>
                      <p>강좌/교육,견학/체험,대관/대여</p>
                      <p className="m_text">
                        간편하게 예약하세요 강좌/교육,견학/체험,대관/대여
                      </p>
                    </div>
                  </div>
                  <div className="icon_box">
                    <Icon.arrowHalf className="arrowhalf_icon" />
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="card_item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="card_bg"></div>
              <div className="card_inset cul">
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
            </motion.div>
            <motion.div
              className="card_item tour"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="card_bg"></div>
              <div className="card_inset tour">
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
            </motion.div>
            <motion.div
              className="card_item mayor"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="card_bg"></div>
              <div className="card_inset mayor">
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
            </motion.div>
          </div>
          <div className="service_slide">
            {/* 이거 1260px */}
            <div className="service_in">
              <ServiceSwiper
                slidesPerView={3}
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                  },
                  480: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 7,
                  },
                  1024: {
                    slidesPerView: 12,
                  },
                }}
              >
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
            <motion.div
              className="notice_list"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <NoticeSwiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {NoticeData.map((item) => (
                  <SwiperSlide>
                    <p className="notice_title">{item.title}</p>
                    <p className="notice_text">{item.text}</p>
                    <p className="notice_date">{item.date}</p>
                  </SwiperSlide>
                ))}
              </NoticeSwiper>
            </motion.div>
            <div className="inform_list">
              <div className="inform_item">
                <div className="sub_title_box">
                  <span className="sub_title">고시공고</span>
                  <span className="more_btn">go +</span>
                </div>
              </div>
              <div className="inform_item">
                <div className="sub_title_box">
                  <span className="sub_title">채용정보</span>
                  <span className="more_btn">go +</span>
                </div>
              </div>
              <div className="inform_item">
                <div className="sub_title_box">
                  <span className="sub_title">시험공고</span>
                  <span className="more_btn">go +</span>
                </div>
              </div>
            </div>
          </div>
        </NoticeSection>
        {/* 소통영역 */}
        <CommuSection>
          <div className="head_title_box">
            <p className="head_title">소통</p>
          </div>
          <div className="news_area">
            <div className="tag_news">
              <ul className="tag_list">
                {buttonSet.map((item) => {
                  // 2. 현재 아이템의 id가 hoveredId와 일치할 때만 호버 아이콘/이미지 적용
                  const isHovered = hoveredId === item.id;
                  const SvgIcon = isHovered && item.svgh ? item.svgh : item.svg;
                  const imgSrc = isHovered && item.srch ? item.srch : item.src;

                  return (
                    <li
                      key={item.id}
                      className="tag_item"
                      // 3. 마우스가 올라간 아이템의 id를 저장, 벗어나면 null로 초기화
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {SvgIcon ? (
                        <span className="svg_box">
                          <SvgIcon />
                        </span>
                      ) : imgSrc ? (
                        <img src={publicPath(imgSrc)} alt="이미지" />
                      ) : item.text === " 의 공연&전시+" ? (
                        <p className="today">오늘</p>
                      ) : (
                        <p className="blog">B</p>
                      )}
                      <span className="text">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <motion.div
              className="news_scrap"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="news_list">
                {newsScrap.map((item) => (
                  <div className="news_item">
                    <div className="news_inset">
                      <div className="news_inset_bg"></div>
                      <Link to="#" className="news_in">
                        <div className="item_info">
                          <p className="info_title">
                            <span>{item.title}</span>
                            {item.subtitle ? <span>{item.subtitle}</span> : ""}
                          </p>
                          <p className="info_text">{item.text}</p>
                        </div>
                        <div className="news_img">
                          <img src={item.img} alt="카드이미지" />
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="mobile_scrap_swiper_wrap">
              <MobileScrapSwiper
                slidesPerView={1}
                breakpoints={{
                  10: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {newsScrap.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="news_item">
                      <div className="news_inset">
                        <div className="news_inset_bg"></div>
                        <Link to="#" className="news_in">
                          <div className="item_info">
                            <p className="info_title">
                              <span>{item.title}</span>
                              {item.subtitle ? (
                                <span>{item.subtitle}</span>
                              ) : (
                                ""
                              )}
                            </p>
                            <p className="info_text">{item.text}</p>
                          </div>
                          <div className="news_img">
                            <img src={publicPath(item.img)} alt="카드이미지" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </MobileScrapSwiper>
            </div>
          </div>
        </CommuSection>
        {/* 배너영역 */}
        <BannerSection>
          <div className="head_title_box">
            <p className="head_title">배너</p>
          </div>
          <div className="banner_slide_area">
            <BannerSwiper
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              effect={"coverflow"}
              grabCursor={true}
              spaceBetween={10}
              slidesPerView={"auto"}
              loop={true}
              speed={1000}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                0: {
                  centeredSlides: true,
                  slidesPerView: "auto",
                  spaceBetween: 10,
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false,
                  },
                },
                1024: {
                  centeredSlides: true,
                  slidesPerView: 3,
                  spaceBetween: "-30%",
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                  },
                },
              }}
            >
              {bannerSlide.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={publicPath(item.src)} alt="배너 슬라이드" />
                </SwiperSlide>
              ))}
            </BannerSwiper>
          </div>
          <div className="banner_link">
            <Link to="#">부산시 알림배너</Link>
          </div>
        </BannerSection>
        <ul className="event_banner">
          <li>
            <Link>
              <img
                src={publicPath("/img/event/getImage1.jpg")}
                alt="이벤트배너"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src={publicPath("/img/event/getImage2.jpg")}
                alt="이벤트배너"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src={publicPath("/img/event/getImage3.jpg")}
                alt="이벤트배너"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src={publicPath("/img/event/getImage4.jpg")}
                alt="이벤트배너"
              />
            </Link>
          </li>
        </ul>
      </div>
    </MainWrap>
  );
};

export default MainPage;
