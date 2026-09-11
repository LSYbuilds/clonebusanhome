import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderWrap } from "../../style/mainStyle/Header_styled";
import Icon from "../common/SvgComponents";
const MainHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);
  const [lang, setLang] = useState(false);
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
  const headerdata = [
    {
      id: "1",
      title: "부산민원120",
      link: "보류",
      list: [
        { id: "1", subtitle: "민원신청" },
        { id: "2", subtitle: "제안신청" },
        { id: "3", subtitle: "시민참여" },
        { id: "4", subtitle: "민원안내" },
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
    <HeaderWrap scrolled={scrolled} hover={hover}>
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
                {headerdata.map((item) => (
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
                {headerdata.map((item) => (
                  <ul key={item.id} className="lnb_item">
                    {item.list.map((iitem) => {
                      const SvgIcon = iitem.svg;
                      return (
                        <li key={iitem.id}>
                          <Link to="#">
                            {SvgIcon ? (
                              <span className="icon">
                                {SvgIcon && <SvgIcon />}
                              </span>
                            ) : (
                              <span className="icon">-</span>
                            )}
                            <span>{iitem.subtitle}</span>
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
    </HeaderWrap>
  );
};

export default MainHeader;
