import React, { useState } from "react";
import { FooterWrap } from "../../style/mainStyle/Footer_styled";
import { Link } from "react-router-dom";
import Icon from "../common/SvgComponents";
import busanLogo from "../../assets/svg/busan_logo.svg";

const MainFooter = () => {
  const [tabOne, setTabOne] = useState(false);
  const [tabTwo, setTabTwo] = useState(false);
  const snsList = [
    "insta",
    "twitter",
    "facebook",
    "naverblog",
    "kakaostory",
    "youtube",
    "badatv",
  ];
  return (
    <FooterWrap tabOne={tabOne} tabTwo={tabTwo}>
      <div className="footer_top">
        <div className="footer_top_i">
          <ul className="link_list">
            <li>
              <div
                to="#"
                className="list_head"
                onClick={() => setTabOne((props) => !props)}
              >
                사업소 누리집
                <Icon.downallow className="tabOne" />
              </div>
              {tabOne ? (
                <ul className="sub_list">
                  <li>
                    <Link to="/gunsul">건설본부</Link>
                  </li>
                  <li>
                    <Link to="/gunan">건설안전시험사업소</Link>
                  </li>
                  <li>
                    <Link to="http://its.busan.go.kr">교통정보서비스센터</Link>
                  </li>
                  <li>
                    <Link to="/fishmarket">국제수산물유통시설관리사업소</Link>
                  </li>
                  <li>
                    <Link to="/youth">금련산청소년수련원</Link>
                  </li>
                  <li>
                    <Link to="/nakdong">낙동강관리본부</Link>
                  </li>
                  <li>
                    <Link to="/wetland">낙동강하구에코센터</Link>
                  </li>
                  <li>
                    <Link to="/southport">남항관리사업소</Link>
                  </li>
                  <li>
                    <Link to="/nongup">농업기술센터</Link>
                  </li>
                  <li>
                    <Link to="/bymarket">반여농산물도매시장관리사업소</Link>
                  </li>
                  <li>
                    <Link to="/ihe">보건환경연구원</Link>
                  </li>
                  <li>
                    <Link to="/mmch/index">부산근현대역사관</Link>
                  </li>
                  <li>
                    <Link to="https://library.busan.go.kr/busanlibrary/index.do">
                      부산도서관
                    </Link>
                  </li>
                  <li>
                    <Link to="/water">상수도사업본부</Link>
                  </li>
                  <li>
                    <Link to="/busaninseoul">서울본부</Link>
                  </li>
                  <li>
                    <Link to="http://119.busan.go.kr">소방재난본부</Link>
                  </li>
                  <li>
                    <Link to="/fisheries">수산자원연구소</Link>
                  </li>
                  <li>
                    <Link to="http://art.busan.go.kr/">시립미술관</Link>
                  </li>
                  <li>
                    <Link to="http://museum.busan.go.kr/">시립박물관</Link>
                  </li>
                  <li>
                    <Link to="/adong">아동보호종합센터</Link>
                  </li>
                  <li>
                    <Link to="/egmarket">엄궁농산물도매시장관리사업소</Link>
                  </li>
                  <li>
                    <Link to="/wcc">여성문화회관</Link>
                  </li>
                  <li>
                    <Link to="/woman">여성회관</Link>
                  </li>
                  <li>
                    <Link to="/hrd">인재개발원</Link>
                  </li>
                  <li>
                    <Link to="/car">차량등록사업소</Link>
                  </li>
                  <li>
                    <Link to="/stadium">체육시설관리사업소</Link>
                  </li>
                  <li>
                    <Link to="/cys">충렬사관리사무소</Link>
                  </li>
                  <li>
                    <Link to="/green">푸른도시가꾸기사업소</Link>
                  </li>
                  <li>
                    <Link to="/sea">해양자연사박물관</Link>
                  </li>
                  <li>
                    <Link to="/moca">현대미술관</Link>
                  </li>
                  <li>
                    <Link to="https://classicbusan.busan.go.kr">
                      클래식부산
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
          </ul>
          <ul className="link_list">
            <li>
              <div
                className="list_head"
                onClick={() => setTabTwo((props) => !props)}
              >
                관련기관 누리집
                <Icon.downallow className="tabTwo" />
              </div>
              {tabTwo ? (
                <ul className="sub_list">
                  <li>
                    <Link to="/relationsite#international">국제자매도시</Link>
                  </li>
                  <li>
                    <Link to="/relationsite#public2">부산소재 공공기관</Link>
                  </li>
                  <li>
                    <Link to="https://council.busan.go.kr/council/index">
                      부산광역시의회
                    </Link>
                  </li>
                  <li>
                    <Link to="/relationsite#si_direct">시 관련 홈페이지</Link>
                  </li>
                  <li>
                    <Link to="/relationsite#sido_homepage">시·도 홈페이지</Link>
                  </li>
                  <li>
                    <Link to="/relationsite#related">유관기관 및 타기관</Link>
                  </li>
                  <li>
                    <Link to="https://www.busan.go.kr/bsapc">
                      자치경찰위원회
                    </Link>
                  </li>
                  <li>
                    <Link to="/relationsite#region">자치구·군</Link>
                  </li>
                  <li>
                    <Link to="/relationsite#council">자치구·군 의회</Link>
                  </li>
                  <li>
                    <Link to="/relationsite#public">지방공기업</Link>
                  </li>
                  <li>
                    <Link to="/relationsite#financing">출자·출연기관</Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_i">
          <div className="left_info">
            <ul className="f_left_menu">
              <li>
                <Link to="#">약관</Link>
              </li>
              <li>
                <Link to="#">저작권 보호정책</Link>
              </li>
              <li>
                <Link to="#">개인정보 처리방침</Link>
              </li>
              <li>
                <Link to="#">개인정보 지키미 서비스</Link>
              </li>
              <li>
                <Link to="#">행정서비스헌장</Link>
              </li>
              <li>
                <Link to="#">뷰어다운로드</Link>
              </li>
              <li>
                <Link to="#">홈페이지 개선의견</Link>
              </li>
            </ul>
            <div className="f_logo_way">
              <div className="footer_address">
                <div className="footer_logo">
                  <Link to="#">
                    <img src="/img/busan_logo.svg" alt="" />
                  </Link>
                </div>
                <div className="address_box">
                  <p className="address">
                    (우 47545) 부산광역시 연제구 중앙대로 1001(연산동)
                  </p>
                  <ul className="way_list">
                    <li>
                      <Link to="#">시청 찾아오시는길</Link>
                    </li>
                    <li>
                      <Link to="#">주차안내</Link>
                    </li>
                    <li>
                      <Link to="#">이용안내</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <p>Copyright © Busan Metropolitan City. All rights reserved.</p>
            </div>
          </div>
          <div className="right_info">
            <ul className="f_sns_list">
              {snsList.map((sns) => (
                <li key={sns}>
                  <Link className={sns} to="#"></Link>
                </li>
              ))}
            </ul>
            <div className="site_call">
              <div className="call_number">
                <p>
                  <span>부산시 120 콜센터</span>
                  <span>(지역번호 051,유료)</span>
                </p>
                <p>051-120</p>
              </div>
              <div className="vacation">
                <p>평일 08:30 ~ 18:30 야간․공휴일 당직실 전환</p>
              </div>
            </div>
            <div className="flag">
              <Link>
                <img src="/img/ft_symbol.png" alt="하단 이미지" />
              </Link>
              <Link>
                <img src="/img/footer_wa.png" alt="하단 이미지" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default MainFooter;
