import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderWrap, TabletNav } from "../../style/mainStyle/Header_styled";
import busanMenu from "../../assets/data/busanMenu.json";
import Icon from "../common/SvgComponents";
import { div, i } from "framer-motion/client";
const MainHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);
  const [lang, setLang] = useState(false);
  const [tabletCall, setTabletCall] = useState(false);
  const [tabletNav, setTabletNav] = useState(0);
  const busanMenuList = busanMenu.headermenus;
  console.log("마우스 상태확인", hover);
  useEffect(() => {
    const handlescroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  const headersvg = [
    { id: "1", svg: Icon.lnbIco1 },
    { id: "2", svg: Icon.lnbIco2 },
    { id: "3", svg: Icon.lnbIco3 },
    { id: "4", svg: Icon.lnbIco4 },
    { id: "5", svg: Icon.lnbIco5 },
    { id: "6", svg: Icon.lnbIco6 },
    { id: "7", svg: Icon.lnbIco7 },
    { id: "8", svg: Icon.lnbIco8 },
    { id: "9", svg: Icon.lnbIco9 },
    { id: "10", svg: Icon.lnbIco10 },
    { id: "11", svg: Icon.lnbIco11 },
    { id: "12", svg: Icon.lnbIco12 },
  ];
  const headerdata = [
    {
      id: "1",
      title: "부산민원120",
      link: "보류",
      list: [
        {
          id: "1",
          subtitle: "민원신청",
          mobileList: [
            "통합민원신청",
            "부산민원 120 이용안내",
            "버스의견진술",
            "신고센터",
            "스마트 현장사진신고",
            "여권안내",
            "정부24",
            "",
          ],
        },
        {
          id: "2",
          subtitle: "제안신청",
          mobileList: ["일반제안", "나의 제안"],
        },
        {
          id: "3",
          subtitle: "시민참여",
          mobileList: [
            "설문조사",
            "나눔장터",
            "국민생각함",
            "모니터",
            "이벤트 통합안내",
            "행사/모집 신청",
            "시민참여게시판",
            "주민참여예산",
            "민생규제혁신과제",
            "찾아가는 현장규제신고센터",
            "시민열린마루",
            "이걸어느세월다하냐",
          ],
        },
        {
          id: "4",
          subtitle: "민원안내",
          mobileList: [
            "민원편람",
            "민원목록",
            "민원처리 확인",
            "편리한 민원서비스",
            "민원정보",
            "민원시책",
            "행정서비스헌장",
          ],
        },
        { id: "5", subtitle: "120콜센터" },
      ],
    },
    {
      id: "2",
      title: "부산소식",
      link: "보류",
      list: [
        { id: "1", subtitle: "새소식" },
        { id: "2", subtitle: "부산시보" },
        { id: "3", subtitle: "보도·해명자료" },
        { id: "4", subtitle: "부산시 공식SNS" },
        { id: "5", subtitle: "시청사진" },
      ],
    },
    {
      id: "3",
      title: "정보공개",
      link: "보류",
      list: [
        { id: "1", subtitle: "주요시책" },
        { id: "2", subtitle: "정보공개" },
        { id: "3", subtitle: "예산" },
        { id: "4", subtitle: "결산서" },
        { id: "5", subtitle: "감사정보" },
        { id: "6", subtitle: "지방공기업" },
        { id: "7", subtitle: "계약정보" },
        { id: "8", subtitle: "홈페이지 아카이브" },
      ],
    },
    {
      id: "4",
      title: "부산소개",
      link: "보류",
      list: [
        { id: "1", subtitle: "부산의 오늘" },
        { id: "2", subtitle: "부산의 상징" },
        { id: "3", subtitle: "부산시청 안내" },
        { id: "4", subtitle: "부산의 인물" },
        { id: "5", subtitle: "부산의 역사" },
        { id: "6", subtitle: "부산통계" },
        { id: "7", subtitle: "도시브랜드" },
        { id: "8", subtitle: "소통 캐릭터" },
        { id: "9", subtitle: "주민자치회" },
        { id: "10", subtitle: "재미있는부산" },
        { id: "11", subtitle: "부산굿즈사업" },
      ],
    },
    {
      id: "5",
      title: "분야별정보",
      link: "보류",
      list: [
        { id: "1", subtitle: "경제", svg: Icon.lnbIco1 },
        { id: "2", subtitle: "일자리·교육", svg: Icon.lnbIco2 },
        { id: "3", subtitle: "사회복지", svg: Icon.lnbIco3 },
        { id: "4", subtitle: "여성·가족", svg: Icon.lnbIco4 },
        { id: "5", subtitle: "보건·건강", svg: Icon.lnbIco5 },
        { id: "6", subtitle: "도시·건축", svg: Icon.lnbIco6 },
        { id: "7", subtitle: "안전", svg: Icon.lnbIco7 },
        { id: "8", subtitle: "공원녹지·환경", svg: Icon.lnbIco8 },
        { id: "9", subtitle: "교통·물류", svg: Icon.lnbIco9 },
        { id: "10", subtitle: "해양논수산", svg: Icon.lnbIco10 },
        { id: "11", subtitle: "행정", svg: Icon.lnbIco11 },
        { id: "12", subtitle: "문화체육관광", svg: Icon.lnbIco12 },
      ],
    },
  ];
  return (
    <HeaderWrap scrolled={scrolled} hover={hover} tabletCall={tabletCall}>
      <div className="header_i">
        <div className="logo_box">
          <h1 className="logo">
            <Link to="#"></Link>
          </h1>
        </div>
        <div className="nav_wrap">
          <div className="info_bar">
            <ul className="nav_list">
              <li>
                <Link to="#">
                  <span>로그인</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>회원가입</span>
                </Link>
              </li>
              <li>
                <Link to="/depart">
                  <span>부산관광</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>청사안내</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>행정전화번호부</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>사이트맵</span>
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => setLang(!lang)}>
                  <span>kor</span>
                  <span>
                    <Icon.downallow />
                  </span>
                </Link>
                <AnimatePresence>
                  {lang && (
                    <motion.ul
                      className="lang_change"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <li>
                        <Link to="#">English</Link>
                      </li>
                      <li>
                        <Link to="#">日本語</Link>
                      </li>
                      <li>
                        <Link to="#">简体中文</Link>
                      </li>
                      <li>
                        <Link to="#">繁體中文</Link>
                      </li>
                      <li>
                        <Link to="#">WorldWide</Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
            <div className="tablet_search">
              <Icon.search />
            </div>
            <div
              className="tablet_gnb_call"
              onClick={() => setTabletCall((props) => !props)}
            >
              메뉴
            </div>
          </div>
          <div className="gnb_bar">
            <motion.nav
              className="gnb"
              onHoverStart={() => {
                setHover(true);
              }}
              onHoverEnd={() => {
                setHover(false);
              }}
            >
              <ul className="gnb_list">
                {busanMenuList.map((item) => (
                  <li key={item.id} className="gnb_item">
                    <Link to="#">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
            <div className="search_box">
              <div className="search">
                <Icon.search />
              </div>
              <div className="site_map">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {hover && (
          <motion.div
            className="lnb_wrap"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            onHoverStart={() => {
              setHover(true);
            }}
            onHoverEnd={() => {
              setHover(false);
            }}
          >
            <div className="lnb_i">
              <div className="lnb_list">
                {busanMenuList.map((item) => (
                  <ul key={item.id} className="lnb_item">
                    {item.children.map((iitem, idx) => {
                      const meatchedIcon = headersvg[idx]?.svg;
                      const SvgCompoent = meatchedIcon;
                      return (
                        <li key={idx}>
                          <Link to="#">
                            {iitem.svg ? (
                              <span className="icon">
                                <SvgCompoent />
                              </span>
                            ) : (
                              <span className="icon">-</span>
                            )}
                            <span>{iitem.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {hover && (
          <motion.div
            className="header_hover_bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ overflow: "hidden" }}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {tabletCall && (
          <TabletNav
            initial={{ x: "+200%" }}
            animate={{ x: "+100%" }}
            exit={{ x: "+200%" }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <div className="tab_login_wrap">
              <div className="login_inner ">
                <div className="login_box">
                  <div className="login">
                    <Link to="#">
                      <span>로그인</span>
                      <span>+</span>
                    </Link>
                  </div>
                  <div className="password">
                    <Link to="#">
                      <span>회원가입</span>
                      <span>+</span>
                    </Link>
                  </div>
                </div>
                <div className="site_helper">
                  <div className="site_call">
                    <Link to="#">
                      <Icon.phone />
                      행정전화번호부
                    </Link>
                  </div>
                  <div className="site_map">
                    <Link to="#">
                      <Icon.siteMap />
                      사이트 맵
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab_nav">
              <div className="gnb_box">
                <ul className="gnb_list">
                  {headerdata.map((item) => (
                    <li key={item.id} onClick={() => setTabletNav(item.id)}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lnb_box">
                <ul className="lnb_list">
                  {headerdata[tabletNav].list.map((item, idx) => (
                    <li key={idx}>
                      {item.subtitle}
                      <span>+</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabletNav>
        )}
      </AnimatePresence>
    </HeaderWrap>
  );
};

export default MainHeader;
