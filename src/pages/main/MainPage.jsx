import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { img, p } from "framer-motion/client";
const MainPage = () => {
  const [hoveredId, setHoveredId] = useState(null);
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
                        <img src={imgSrc} alt="이미지" />
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
            <div className="news_scrap">
              <div className="news_list">
                <div className="news_item">
                  <Link to="#" className="news_in">
                    <div className="item_info">
                      <p className="info_title">
                        <span>보도</span>
                        <span>자료</span>
                      </p>
                      <p className="info_text">
                        부산시, 중국 베이징에서 마이스 시장 공략을 위한
                        "로드쇼(유치설명회" 개최
                      </p>
                    </div>
                    <div className="news_img">
                      <img
                        src="https://www.busan.go.kr/imgBBSTY3/20260824/082407B5416864-ac2d52755d654d3291d4539f3a914d16.png"
                        alt="카드이미지"
                      />
                    </div>
                  </Link>
                </div>
                <div className="news_item">
                  <Link to="#" className="news_in">
                    <div className="item_info">
                      <p className="info_title">
                        <span>부산</span>
                        <span>시보</span>
                      </p>
                      <p className="info_text">
                        이 열차는 '행복행 열차' 입니다, 열차가 곧 출발합니다.
                      </p>
                    </div>
                    <div className="news_img">
                      <img
                        src="https://www.busan.go.kr/imgARTICLE/20260814/081416B0419452-add551ce385f4a988eb1b1e71785e273.jpg"
                        alt="카드이미지"
                      />
                    </div>
                  </Link>
                </div>
                <div className="news_item">
                  <Link to="#" className="news_in">
                    <div className="item_info">
                      <p className="info_title">
                        <span>블로그</span>
                      </p>
                      <p className="info_text">
                        부산보건환경연구원 연구과제 공모 | 시민의 일상 속
                        아이디어가 건강한 부산을 만듭니다
                      </p>
                    </div>
                    <div className="news_img">
                      <img
                        src="https://www.busan.go.kr/snsimg/naver/224385526284.png"
                        alt="카드이미지"
                      />
                    </div>
                  </Link>
                </div>
                <div className="news_item">
                  <Link to="#" className="news_in">
                    <div className="item_info">
                      <p className="info_title">
                        <span>부산튜브</span>
                      </p>
                      <p className="info_text">
                        부산시, 중국 베이징에서 마이스 시장 공략을 위한
                        "로드쇼(유치설명회" 개최
                      </p>
                    </div>
                    <div className="news_img">
                      <img
                        src="https://i.ytimg.com/vi/hy84z7NaWmU/sddefault.jpg"
                        alt="카드이미지"
                      ></img>
                    </div>
                  </Link>
                </div>
              </div>
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
              modules={[EffectCoverflow, Pagination, Navigation]}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={"-30%"}
              autoplay={true}
              loop
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              speed={1000}
            >
              {bannerSlide.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.src} alt="배너 슬라이드" />
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
              <img src="/img/event/getImage1.jpg" alt="이벤트배너" />
            </Link>
          </li>
          <li>
            <Link>
              <img src="/img/event/getImage2.jpg" alt="이벤트배너" />
            </Link>
          </li>
          <li>
            <Link>
              <img src="/img/event/getImage3.jpg" alt="이벤트배너" />
            </Link>
          </li>
          <li>
            <Link>
              <img src="/img/event/getImage4.jpg" alt="이벤트배너" />
            </Link>
          </li>
        </ul>
      </div>
    </MainWrap>
  );
};

export default MainPage;
