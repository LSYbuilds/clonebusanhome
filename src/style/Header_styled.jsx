import styled from "@emotion/styled";
import busanLogo from "/src/assets/svg/busan_logo.svg";
import logoSlogan from "/src/assets/svg/logo_slogan.svg";

const getLogo = (props) =>
  props.scrolled || props.hover ? busanLogo : logoSlogan;
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
            padding: 0 10px;
            align-content: center;
            a {
              color: ${(props) =>
                props.scrolled || props.hover ? "#000 " : "#fff"};
              font-size: 15px;
              font-weight: 400;
            }
          }
        }
      }
      .gnb_bar {
        display: flex;
        justify-content: flex-end;
        height: auto;
      }
    }
  }
`;

// export const HeaderWrap = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   transition: all 0.2s ease-in-out;
//   background-color: ${(props) =>
//     props.scrolled || props.hover ? "#fff" : "none"};
//   z-index: 12;
//   .header_i {
//     display: flex;
//     justify-content: space-between;
//     margin: 0 auto;
//     max-width: 1600px;
//     width: 100%;
//     height: 100%;
//     .logo_box {
//       width: 170px;
//       height: 110px;
//       .logo {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         width: 100%;
//         height: 100%;
//         padding: 14px 0px;
//         a {
//           display: block;
//           width: 170px;
//           height: 100%;
//           background-image: ${(props) =>
//             `url(${props.scrolled || props.hover ? busanLogo : logoSlogan})`};
//           background-repeat: no-repeat;
//           background-size: contain;
//           background-position: center bottom 0;
//         }
//       }
//     }
//     .nav_wrap {
//       width: calc(100% - 170px);
//       height: 100%;
//       display: flex;
//       flex-direction: column;
//       .info_bar {
//         height: 45px;
//         .nav_list {
//           display: flex;
//           justify-content: flex-end;
//           height: 100%;
//           li {
//             padding: 0 10px;
//             align-content: center;
//             a {
//               color: ${(props) =>
//                 props.scrolled || props.hover ? "#000 " : "#fff"};
//               font-size: 15px;
//               font-weight: 400;
//             }
//           }
//         }
//       }
//       .gnb_bar {
//         display: flex;
//         justify-content: flex-end;
//         height: auto;
//         .gnb {
//           position: relative;
//           width: 1170px;
//           align-content: center;
//         }
//         .gnb .gnb_list {
//           display: flex;
//           justify-content: space-between;
//           align-items: stretch;
//           height: 100%;
//           overflow: hidden;
//           .gnb_item {
//             flex: 0 0 20%;
//             height: 100%;
//             text-align: center;
//             font-size: 21px;
//             a {
//               display: block;
//               height: 65px;
//               align-content: center;
//               color: ${(props) =>
//                 props.scrolled || props.hover ? "#000" : "#fff "};
//             }
//             .lnb_list {
//               display: flex;
//               flex-direction: column;
//               padding: 15px;
//               background-color: #ffffff;
//               li {
//                 a {
//                   display: block;
//                   width: 100%;
//                   height: auto;
//                   text-align: left;
//                   padding: 5px 10px;
//                   font-size: 0.825em;
//                   color: #000;
//                 }
//               }
//             }
//             &::after {
//               content: "";
//               position: absolute;
//               top: 50%;
//               transform: translate(-50%, -50%);
//               right: 0;
//               width: 1px;
//               height: 16px;
//               background-color: #fff;
//             }
//           }
//         }
//         .search_box {
//           display: flex;
//           gap: 25%;
//           justify-content: flex-end;
//           align-items: center;
//           width: 14%;
//           height: 65px;
//           .search {
//             align-content: center;
//             width: 30px;
//             height: 100%;
//             svg {
//               height: 100%;
//             }
//           }
//           .site_map {
//             width: 23px;
//             height: 23px;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//             span {
//               display: block;
//               width: 100%;
//               height: 2px;
//               background: ${(props) =>
//                 props.scrolled || props.hover ? "#000" : "#fff"};
//               &:nth-child(2) {
//                 width: 80%;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
