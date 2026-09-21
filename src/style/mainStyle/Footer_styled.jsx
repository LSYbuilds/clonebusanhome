import styled from "@emotion/styled";
import busanLogo from "/src/assets/svg/busan_logo.svg";

export const FooterWrap = styled.div`
  width: 100%;
  padding-bottom: 100px;
  .footer_top {
    width: 100%;
    height: 54px;
    border-top: 1px solid rgb(34, 34, 34);
    border-bottom: 1px solid rgb(34, 34, 34);
    .footer_top_i {
      margin: 0 auto;
      max-width: 1600px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      .link_list {
        width: 318px;
        height: 100%;
        border-right: 1px solid rgb(34, 34, 34);
        li {
          position: relative;
          width: 100%;
          height: 100%;
          .list_head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 0px 20px;
            font-size: 18px;
            svg {
              path {
                stroke: black;
              }
            }
            .tabOne {
              rotate: ${(props) => (props.tabOne ? "180deg" : "0deg")};
              transition-duration: 0.5s;
            }
            .tabTwo {
              rotate: ${(props) => (props.tabTwo ? "180deg" : "0deg")};
              transition-duration: 0.5s;
            }
          }
          .sub_list {
            position: absolute;
            bottom: 101%;
            left: 0px;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 180px;
            padding: 20px;
            overflow-y: scroll;
            background-color: rgb(241, 241, 241);
          }
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
  .footer_bottom {
    margin-top: 50px;
    width: 100%;
    .footer_bottom_i {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1600px;
      width: 100%;
      .left_info {
        display: flex;
        flex-direction: column;
        height: auto;
        .f_left_menu {
          display: flex;
          font-size: 18px;
          li {
            padding: 0px 18px;
            position: relative;
            &:nth-of-type() {
              font-size: 20px;
              a {
                color: rgb(15, 108, 161);
              }
            }
            &::after {
              position: absolute;
              right: 0px;
              top: 50%;
              transform: translate(0, -50%);
              content: "";
              width: 1px;
              height: 18px;
              background-color: rgb(34, 34, 34);
            }
          }
        }
        .f_logo_way {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          .footer_address {
            display: flex;
            gap: 20px;
            .footer_logo {
              width: 110px;
              height: 40px;
              img {
                width: 100%;
                object-fit: contain;
              }
            }
            .address_box {
              display: flex;
              flex-direction: column;
              font-size: 1.6em;
              .way_list {
                display: flex;
                justify-content: space-between;
                a {
                  color: rgb(15, 108, 161);
                  border-bottom: 1px solid rgb(15, 108, 161);
                }
              }
            }
          }
          .copy_right {
            font-size: 1.6em;
          }
        }
      }
      .right_info {
        .f_sns_list {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .f_sns_list li a {
          display: block;
          width: 40px;
          height: 40px;
          &::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            gap: 20px;
            background-repeat: no-repeat;
            background-size: auto 80%;
          }
        }
        .f_sns_list li {
          .mail::before {
          }
          .twitter::before {
            background-image: url("/img/f_sns/twitterX.png");
          }
          .facebook::before {
            background-image: url("/img/f_sns/facebook.png");
          }
          .naverblog::before {
            background-image: url("/img/f_sns/naverBlog.png");
          }
          .kakaostory::before {
            background-image: url("/img/f_sns/KakaoStory.png");
          }
          .youtube::before {
            background-image: url("/img/f_sns/youtube.png");
          }
          .badatv {
            width: 60px;
          }
          .badatv::before {
            width: 90px;
            background-image: url("/img/f_sns/befm.png");
          }
          .insta::before {
            background-image: url("/img/f_sns/instar.png");
          }
        }
        .site_call {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .call_number {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            gap: 10px;
            p {
              &:nth-of-type(1) {
                display: flex;
                flex-direction: column;
                span {
                  text-align: right;
                  font-size: 18px;
                  &:nth-of-type(1) {
                    font-weight: bold;
                  }
                }
              }
              &:nth-of-type(2) {
                font-size: 45px;
              }
            }
          }
          .vacation {
            text-align: right;
          }
        }
        .flag {
          display: flex;
          justify-content: flex-end;
          a {
            display: flex;
            width: fit-content;
            height: fit-content;
            &:nth-of-type(1) {
              margin-right: 2.5em;
              img {
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1280px) {
    margin: 0 auto;
    width: 90%;
    .footer_top {
      height: auto;
      border: none;
      .footer_top_i {
        flex-direction: column;
        .link_list {
          width: 100%;
          padding: 10px 0px;
          border: 1px solid black;
          li {
            .list_head {
              font-size: 1.5em;
            }
            .sub_list {
              font-size: 1.5em;
              bottom: calc(100% + 11px);
            }
          }
          &:last-child {
            border: 1px solid black;
            border-top: none;
          }
        }
      }
    }
    .footer_bottom {
      .footer_bottom_i {
        flex-direction: column;
        .left_info {
          width: 100%;
          .f_left_menu {
            flex-wrap: wrap;
            justify-content: center;
            li {
              padding: 0px 5px;
              a {
                font-size: 12.75px;
              }
              &::after {
                height: 30%;
              }
              &:nth-of-type(3) {
                a {
                  font-size: 20px;
                  color: rgb(15, 108, 161);
                }
              }
            }
          }
          .f_logo_way {
            .footer_address {
              flex-direction: column;
              align-items: center;
              .address_box {
                font-size: 12.75px;
              }
            }
            .copy_right {
              text-align: center;
              font-size: 12.75px;
            }
          }
        }
        .right_info {
          margin: 20px 0px;
          .f_sns_list {
            justify-content: center;
          }
          .f_sns_list li a {
            display: block;
            width: 2.5em;
            height: 2.5em;
            &::before {
              content: "";
              display: block;
              width: 100%;
              height: 100%;
              gap: 20px;
              background-repeat: no-repeat;
              background-size: auto 80%;
            }
          }
          .site_call {
            align-items: center;
            .call_number {
              p {
                &:nth-of-type(1) {
                  span {
                    font-size: 1.3em;
                  }
                }
                &:nth-of-type(2) {
                  font-size: 3em;
                }
              }
            }
          }
          .flag {
            margin: 20px 0;
            justify-content: center;
          }
        }
      }
    }
  }
`;
