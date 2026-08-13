import styled from "@emotion/styled";
import busanLogo from "/src/assets/svg/busan_logo.svg";
import logoSlogan from "/src/assets/svg/logo_slogan.svg";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => (props.scrolled ? "#fff" : "none")};
  z-index: 12;
  .header_i {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1600px;
    width: 100%;
    height: 100%;
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
          background-image: ${(props) =>
            `url(${props.scrolled ? busanLogo : logoSlogan})`};
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center bottom 0;
        }
      }
    }
    .nav_wrap {
      width: 83%;
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
            padding: 0 10px;
            align-content: center;
            a {
              color: ${(props) => (props.scrolled ? "#000 " : "#fff")};
              font-size: 15px;
              font-weight: 400;
            }
          }
        }
      }
      .gnb_bar {
        display: flex;
        justify-content: space-between;
        height: auto;
        .gnb {
          position: relative;
          width: 1170px;
          align-content: center;
        }
        .gnb .gnb_list {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          height: 100%;
          overflow: hidden;
          li {
            flex: 0 0 20%;
            text-align: center;
            font-size: 21px;
            a {
              display: block;
              height: 65px;
              align-content: center;
              color: ${(props) => (props.scrolled ? "#000" : "#fff ")};
            }
            .lnb_list {
              display: flex;
              flex-direction: column;
            }
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              transform: translate(-50%, -50%);
              right: 0;
              width: 1px;
              height: 16px;
              background-color: #fff;
            }
          }
        }
        .search_box {
          display: flex;
          gap: 25%;
          justify-content: flex-end;
          align-items: center;
          width: 14%;
          height: 65px;
          .search {
            align-content: center;
            width: 30px;
            height: 100%;
            svg {
              height: 100%;
            }
          }
          .site_map {
            width: 23px;
            height: 23px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span {
              display: block;
              width: 100%;
              height: 2px;
              background: ${(props) => (props.scrolled ? "#000" : "#fff")};
              &:nth-child(2) {
                width: 80%;
              }
            }
          }
        }
      }
    }
  }
`;
