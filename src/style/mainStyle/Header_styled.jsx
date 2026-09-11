import styled from "@emotion/styled";
import busanLogo from "/src/assets/svg/busan_logo.svg";
import logoSlogan from "/src/assets/svg/logo_slogan.svg";

const getLogo = (props) =>
  props.scrolled || props.hover ? busanLogo : logoSlogan;
const bgChange = (props) => (props.scrolled || props.hover ? "#000" : "#fff");
export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.scrolled || props.hover ? "#fff" : "none"};
  z-index: 12;
  .header_i {
    display: flex;
    margin: 0 auto;
    max-width: 1600px;
    width: 100%;
    .logo_box {
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
            align-content: center;
            width: 30px;
            height: 100%;
            svg {
              width: 100%;
              height: 100%;
            }
          }
          .site_map {
            width: 25px;
            height: 23px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span {
              display: block;
              width: 100%;
              height: 2px;
              background: ${(props) =>
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
`;
