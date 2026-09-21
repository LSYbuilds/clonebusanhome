import styled from "@emotion/styled";
import busanLogo from "/src/assets/svg/busan_logo.svg";
import logoSlogan from "/src/assets/svg/logo_slogan.svg";
import { motion } from "framer-motion";

/*
반응형 분기점
-PC-
1620px
1500px
1400px
1300px
1280px
-테블릿-
1280px
1040px
768px
-모바일-
425px
375px
320px
*/

const getLogo = (props) =>
  props.scrolled || props.hover ? busanLogo : logoSlogan;
const bgChange = (props) => (props.scrolled || props.hover ? "#000" : "#fff");
const tabletLogo = (props) =>
  props.tabletCall || props.scrolled ? busanLogo : logoSlogan;
const tabletScroll = (props) =>
  props.tabletCall || props.scrolled ? "#000" : "#fff";

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.2s ease-in-out;
  z-index: 12;
  .header_i {
    position: relative;
    display: flex;
    margin: 0 auto;
    max-width: 1600px;
    background-color: ${(props) =>
      props.scrolled || props.hover ? "#fff" : "none"};
    width: 100%;
    &::before {
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 100vw;
      height: 100%;
      content: "";
      background-color: ${(props) =>
        props.scrolled || props.hover ? "#fff" : "none"};
    }
    .logo_box {
      position: relative;
      width: 170px;
      height: 110px;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 14px 0px;
        a {
          display: block;
          width: 170px;
          height: 100%;
          background-image: url(${(props) => getLogo(props)});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center bottom 0;
        }
      }
    }
    .nav_wrap {
      width: calc(100% - 170px);
      height: 100%;
      display: flex;
      flex-direction: column;
      .info_bar {
        height: 45px;
        .nav_list {
          display: flex;
          justify-content: flex-end;
          height: 100%;
          li {
            position: relative;
            padding: 0 10px;
            align-content: center;
            a {
              display: flex;
              gap: 10px;
              color: ${(props) =>
                props.scrolled || props.hover ? "#000 " : "#fff"};
              font-size: 15px;
              font-weight: 400;
            }
            &:hover {
              color: #fff;
              text-decoration: underline;
            }
            .lang_change {
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translate(-50%, 0%);
              padding: 10% 3%;
              background-color: #fff;
              border-radius: 16px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              li {
                a {
                  color: #000;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
        .tablet_search {
          display: none;
        }
        .tablet_gnb_call {
          display: none;
        }
      }
      .gnb_bar {
        display: flex;
        justify-content: flex-end;
        height: 65px;
        .gnb {
          width: calc(100% - 105px);
          padding: 0% 5%;
          align-content: center;
          .gnb_list {
            display: flex;
            height: 100%;
            overflow: hidden;
            .gnb_item {
              position: relative;
              flex: 0 0 20%;
              height: 100%;
              text-align: center;
              a {
                display: block;
                height: 100%;
                font-size: 21px;
                align-content: center;
                color: ${(props) =>
                  props.scrolled || props.hover ? "#000" : "#fff "};
                .lnb_list {
                  display: flex;
                }
                &:hover {
                  color: #0086cd;
                }
              }
              &::after {
                position: absolute;
                right: 0px;
                top: 50%;
                transform: translate(0%, -50%);
                content: "";
                width: 1px;
                height: 21px;
                background-color: #fff;
              }
              &:last-child {
                &::after {
                  display: none;
                }
              }
            }
          }
        }
        .search_box {
          display: flex;
          gap: 50px;
          justify-content: flex-end;
          align-items: center;
          .search {
            position: relative;
            align-content: center;
            width: 30px;
            height: 100%;
            svg {
              width: 100%;
              height: 100%;
              path {
                stroke: ${(props) =>
                  props.scrolled || props.hover ? "#000" : "#fff"};
              }
            }
          }
          .site_map {
            position: relative;
            width: 25px;
            height: 23px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            span {
              display: block;
              width: 100%;
              height: 2px;
              background-color: ${(props) =>
                props.scrolled || props.hover ? "#000" : "#fff"};
              &:nth-child(2) {
                width: 80%;
              }
            }
          }
        }
      }
    }
  }
  .lnb_wrap {
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    z-index: 998;
    background-color: #fff;
    border-top: 1px solid #ddd;
    .lnb_i {
      margin: 0 auto;
      max-width: 1600px;
      width: 100%;
      height: 100%;
      padding-left: 170px;
      padding-right: 105px;

      .lnb_list {
        position: relative;
        display: flex;
        padding: 0% 5%;
        .lnb_item {
          position: relative;
          flex: 0 0 20%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 2% 0px;
          border-right: 1px solid #ddd;
          li {
            width: 100%;
            cursor: pointer;
            padding: 0% 15%;
            a {
              display: flex;
              justify-content: flex-start;
              width: 100%;
              font-size: 18px;
              .icon {
                position: relative;
                display: inline-block;
                width: 16px;
                height: 100%;
                svg {
                  position: absolute;
                  top: 0px;
                  left: -100%;
                  width: 30px;
                  height: 30px;
                }
              }
              &:hover {
                color: #0086cd;
              }
            }
          }
          &:first-child {
            border-left: 1px solid #ddd;
          }
        }
      }
    }
  }
  .header_hover_bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 800;
    top: 100%;
    left: 0px;
    background-color: rgb(0, 0, 0, 0.7);
  }
  .tablet_call_bg {
    display: none;
  }
  @media (max-width: 1620px) {
    .header_i > .nav_wrap > .gnb_bar {
      .gnb > .gnb_list > .gnb_item > a {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 1280px) {
    .header_i {
      justify-content: space-between;
      max-width: 100%;
      width: 100%;
      height: 60px;
      padding: 0 3%;
      background-color: ${(props) =>
        props.tabletCall || props.scrolled ? "#fff" : "none"};
      .logo_box {
        width: auto;
        height: 100%;
        .logo {
          justify-content: flex-start;
          a {
            width: 98px;
            background-image: url(${(props) => tabletLogo(props)});
          }
        }
      }
      .nav_wrap {
        width: auto;
        height: 100%;
        .info_bar {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 10px;
          width: auto;
          height: 100%;
          .nav_list > li > a {
            color: ${(props) =>
              props.tabletCall || props.scrolled ? "#000" : "#fff"};
          }
          .tablet_search {
            display: block;
            align-content: center;
            height: 100%;
            margin: 0px 10px;
            svg {
              width: 100%;
              height: 50%;
              path {
                stroke: ${(props) =>
                  props.tabletCall || props.scrolled ? "#000" : "#fff"};
              }
            }
          }
          .tablet_gnb_call {
            display: block;
            align-content: center;
            height: 100%;
            font-size: 15px;
            color: ${(props) =>
              props.tabletCall || props.scrolled ? "#000" : "#fff"};
            cursor: pointer;
          }
        }
      }
    }
    .header_i > .nav_wrap > .gnb_bar {
      display: none;
    }
    .tablet_call_bg {
      display: block;
      position: absolute;
      width: 100vw;
      height: 100vh;
      z-index: 800;
      top: 100%;
      left: 0px;
      background-color: rgb(0, 0, 0, 0.7);
    }
  }
  @media (max-width: 1080px) {
    .header_i > .nav_wrap > .info_bar {
      .nav_list {
        li {
          display: none;
        }
        li {
          &:nth-of-type(7) {
            display: block;
          }
        }
      }
    }
  }
`;

export const TabletNav = styled(motion.div)`
  display: none;
  transition-duration: 0.3s;
  @media (max-width: 1280px) {
    position: fixed;
    z-index: 900;
    right: 0px;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100vh;
    background-color: aliceblue;
    .tab_login_wrap {
      display: flex;
      width: 100%;
      padding: 10px;
      .login_inner {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 130px;
        background-color: #0086ce;
        padding-top: 35px;
        padding-bottom: 15px;
        border-radius: 15px;
        .login_box {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0px 2.5%;
          /* 공통 */
          div {
            flex: 0 0 48%;
            border-bottom: 2px solid #fff;
            a {
              display: flex;
              justify-content: space-between;
              width: 100%;
              font-size: 15px;
              font-family: "KohiLearn", "Noto Sans KR", sans-serif;
              color: #fff;
              span {
              }
            }
          }
        }
        .site_helper {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 0 2.5%;
          div {
            a {
              align-items: center;
              display: flex;
              font-size: 15px;
              color: #fff;
              svg {
                width: 25px;
              }
            }
          }
        }
      }
    }
    .tab_nav {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      .gnb_box {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgb(241, 241, 241);
        padding-top: 2%;
        .gnb_list {
          display: flex;
          flex-direction: column;
          li {
            width: 23%;
            height: 50px;
            align-content: center;
            padding: 0px 2%;
            color: rgb(34, 34, 34);
            font-size: 15px;
            cursor: pointer;
            transition-duration: 0.3s;
          }
          .gnb_list_click {
            position: relative;
            z-index: 1;
            background-color: #0086ce;
            color: #fff;
            padding-left: 5%;
            border-top-right-radius: 100px;
            border-bottom-right-radius: 100px;
            box-shadow: 1px 5px 11px rgba(0, 0, 0, 0.3);
          }
        }
      }
      .lnb_box {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 80%;
        height: 100%;
        background-color: #fff;
        padding-top: 2%;
        padding-left: 5%;
        overflow: scroll;
        li {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #ddd;
          .list_title {
            display: flex;
            justify-content: space-between;
            height: 44px;
            align-content: center;
            align-items: center;
            color: rgb(34, 34, 34);
            font-size: 15px;
            cursor: pointer;
            span {
              cursor: pointer;
            }
            &:hover {
              color: #0086ce;
            }
          }
          .children_list {
            position: relative;
            display: flex;
            flex-direction: column;
            background-color: #f8f8f8;
            li {
              position: relative;
              border: none;
              a {
                display: block;
                padding: 6px 1.6em;
                font-size: 15px;
                &:hover {
                  color: #0086ce;
                }
              }
              &:before {
                position: absolute;
                top: 50%;
                left: 3%;
                transform: translate(-50%, 0%);
                content: "";
                background-color: #a3a3a3;
                width: 4px;
                height: 4px;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    right: 0px;
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
