import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrap } from "../style/Header_styled";
import Icon from "./SvgComponents";
const Header = () => {
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
        { id: "1", subtitle: "경제", svg: "대기" },
        { id: "2", subtitle: "일자리·교육", svg: "대기" },
        { id: "3", subtitle: "사회복지", svg: "대기" },
        { id: "4", subtitle: "여성·가족", svg: "대기" },
        { id: "5", subtitle: "보건·건강", svg: "대기" },
        { id: "6", subtitle: "도시·건축", svg: "대기" },
        { id: "7", subtitle: "안전", svg: "대기" },
        { id: "8", subtitle: "공원녹지·환경", svg: "대기" },
        { id: "9", subtitle: "교통·물류", svg: "대기" },
        { id: "10", subtitle: "해양논수산", svg: "대기" },
        { id: "11", subtitle: "행정", svg: "대기" },
        { id: "12", subtitle: "문화체육관광", svg: "대기" },
      ],
    },
  ];
  return (
    <HeaderWrap>
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
                <Link to="#">
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
                <Link to="#">kor</Link>
                {/* <ul className="lang_change">
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
                </ul> */}
              </li>
            </ul>
          </div>
          <div className="gnb_bar">
            <nav className="gnb">
              <ul className="gnb_list">
                {headerdata.map((item) => (
                  <li key={item.id}>
                    <Link to="#">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
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
      {/* <div className="lnb_area">
        <div className="lnb_i">
          <div className="lnb_list"></div>
        </div>
      </div> */}
    </HeaderWrap>
  );
};

export default Header;
