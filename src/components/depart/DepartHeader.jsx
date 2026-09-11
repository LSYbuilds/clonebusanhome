import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeaprtHeaderWrap } from "../../style/departStyle/DeaprtHeader_styled";
import Icon from "../common/SvgComponents";

// 헤더는 이너 1500px
const [bMenu, setBMenu] = useState(false);
const DepartHeader = () => {
  const MoverOver = [
    {
      id: 1,
      title: "부산의가면",
    },
    {
      id: 2,
      title: "추천여행",
    },
    {
      id: 3,
      title: "여행준비",
    },
    {
      id: 4,
      title: "유용한정보",
    },
  ];
  const bottoMenuSet = [
    {
      title: "부산에가면",
      items: ["명소", "음식", "숙박", "쇼핑", "축제", "내주변"],
    },
    {
      title: "추천여행",
      items: [
        "비짓부산 매거진",
        "일정여행",
        "테마여행",
        "미식투어",
        "체험·해양·웰니스",
        "페스티벌 시월",
        "월드크리에이터 페스티벌",
        "미쉐린 가이드 부산",
        "해양레저관광",
      ],
    },
    {
      title: "여행준비",
      items: [
        "AI 여행 추천 서비스",
        "여행큐레이션",
        "가이드북&지도",
        "무장애여행",
        "문화관광해설사",
        "여행준비정보",
        "뉴스레터",
        "관광안내소",
        "부산형 워케이션",
      ],
    },
    {
      title: "유용한정보",
      items: [
        "공지",
        "이벤트&설문",
        "축제·행사",
        "부산관광 아카이브",
        "부산여행영상",
        "여행공유",
        "로컬관광상품 홍보관",
        "부산관광브랜드",
      ],
    },
  ];
  return (
    <DeaprtHeaderWrap>
      <div className="inner">
        <div className="logo_box">
          <h1 className="logo">
            <Link to="#"></Link>
          </h1>
        </div>
        <nav className="nav_warp">
          <ul className="nav_list">
            <li>
              <Link>부산에가면</Link>
            </li>
            <li>
              <Link>추천여행</Link>
            </li>
            <li>
              <Link>여행준비</Link>
            </li>
            <li>
              <Link>유용한정보</Link>
            </li>
          </ul>
        </nav>
        <div className="other_menu">
          <div className="search_box">
            <input type="text" placeholder="검색어를 입력해주세요" />
            <Icon.search />
          </div>
          <div className="login_box"></div>
        </div>
        <div className="bottom_nav"></div>
      </div>
    </DeaprtHeaderWrap>
  );
};

export default DepartHeader;
