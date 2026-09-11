import styled from "@emotion/styled";
import bannerIcon from "/src/assets/svg/icon/ico_img.svg";
import bannerIconW from "/src/assets/svg/icon/ico_img_w.svg";

export const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  .main_slide {
    width: 100vw;
    height: 100vh;
  }
  .inner {
    margin: 0 auto;
    max-width: 1600px;
    width: 100%;
    padding-bottom: 100px;
    section {
      padding-top: 50px;
      padding-bottom: 100px;
    }
    .head_title_box {
      margin-bottom: 100px;
    }
    .head_title {
      text-align: center;
      font-size: 32px;
      font-family: "KohiLearn", "Noto Sans KR", sans-serif;
      color: #585858;
    }
    .event_banner {
      display: flex;
      justify-content: flex-start;
      align-content: stretch;
      width: 100%;
      height: 319px;
      gap: 0 33px;
      li {
        max-width: 375px;
        width: 25%;
        aspect-ratio: 375 / 319;
        a {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export const GuideSection = styled.section`
  @keyframes AnimateBorder {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimateBorder2 {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  width: 100%;
  .head_title_box {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 100px;
    .tag_list {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      li {
        padding: 10px;
        a {
          font-size: 18px;
          padding: 5px 30px;
          border: 2px solid rgb(34, 34, 34);
          border-radius: 30px;
        }
      }
    }
  }
  .gra_card_wrap {
    display: flex;
    justify-content: space-between;
    .card_item {
      z-index: 1;
      position: relative;
      flex: 0 0 23%;
      height: 200px;
      padding: 32px 32px 16px 32px;
      font-size: 14px;
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 15px 15px 50px 1px rgba(51, 51, 51, 0.09);
      .card_title {
        font-family: "KohiLearn", "Noto Sans KR";
        font-size: 25px;
        color: #333;
      }
    }
    .date {
      a {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .calender_icon {
          position: absolute;
          width: auto;
          height: 50px;
          top: 0px;
          right: 0px;
        }
        .title_box {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .icon_box {
          position: relative;
          width: 35px;
          height: 35px;
          border: 1px solid #333;
          border-radius: 100%;
          .arrowhalf_icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .cul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-image: url("img/ico_cult.png");
      background-repeat: no-repeat;
      background-position: right 36px top 30px;
      background-size: auto;
      .cul_list {
        width: 100%;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          flex: 0 0 48%;
          a {
            display: block;
            width: 100%;
            text-align: center;
            padding: 8px 0px;
            border-radius: 100px;
            box-shadow: 0 0 1px #333;
            font-size: 16px;
          }
        }
      }
    }
    .tour {
      position: relative;
      display: flex;
      justify-content: space-between;
      background-image: url("/img/tour_thum.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      .card_title_box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #fff;
        .card_title {
          color: #fff;
        }
        .card_btn {
          border-radius: 100px;
          border: 1px solid #fff;
          padding: 4px 10px;
        }
      }
      .card_list {
        position: absolute;
        top: 50%;
        right: 32px;
        transform: translate(0%, -50%);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        flex-wrap: wrap;
        li {
          width: 80px;
          height: 80px;
          border-radius: 100%;
          background-color: #fff;
          background-repeat: no-repeat;
          background-position: center;
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
          &:first-child {
            background-image: url("/img/ico_main_tour01.png");
          }
          &:nth-child(2) {
            background-image: url("/img/ico_visitbusan.png");
          }
          &:nth-child(3) {
            background-image: url("/img/ico_galmaet.png");
          }
          &:nth-child(4) {
            background-image: url("/img/ico_medicalbusan.png");
          }
        }
      }
    }
    .mayor {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background:
        url("/img/sijang_new3.png") left 15px bottom no-repeat,
        linear-gradient(to right, #033d99, #0190cf);
      .card_title {
        display: flex;
        justify-content: flex-end;
        gap: 4px;
        align-items: end;
        font-family: "Noto Sans KR", sans-serif;
        color: #fff;
        font-size: 13px;
        .name {
          font-size: 22px;
          font-weight: bold;
        }
      }
      .card_list_box {
        display: flex;
        justify-content: flex-end;
        .card_list {
          display: grid;
          gap: 10px;
          grid-template-columns: 120px 100px;
          align-items: flex-end;
          li {
            text-align: left;
            a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: #fff;
              padding: 8px 16px;
              border: 1px solid rgba(255, 255, 255, 0.8);
              border-radius: 30px;
              text-decoration: none;
              font-size: 14px;
              box-sizing: border-box;
              width: 100%;
            }
            &:nth-child(1) {
              grid-column: 2;
              grid-row: 1;
            }
            &:nth-child(2) {
              grid-column: 1;
              grid-row: 2;
            }
            &:nth-child(3) {
              grid-column: 2;
              grid-row: 2;
            }
          }
        }
      }
    }
  }
  .service_slide {
    margin-top: 100px;
    width: 100%;
    height: 90px;
    .service_in {
      margin: 0 auto;
      width: 1260px;
      height: 100%;
    }
  }
`;

export const NoticeSection = styled.section`
  .notice_wrap {
    width: 100%;
    height: auto;
    .sub_title_box {
      width: 31%;
      display: flex;
      justify-content: space-between;
      height: auto;
      padding: 20px 0px;
      .sub_title {
        font-family: "KohiLearn", "Noto Sans KR", sans-serif;
        font-size: 20px;
        color: rgb(88, 88, 88);
      }
      .more_btn {
        font-size: 13px;
        padding: 0 9px 4px;
        text-align: center;
        border: 1px solid #000;
        border-radius: 200px;
      }
    }
    .notice_list {
      width: 100%;
      padding: 20px 0px;
      margin-bottom: 40px;
    }
    .inform_list {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .inform_item {
        flex: 0 0 31%;
        padding: 10px 0px;
        border-bottom: 4px solid #585858;
        .sub_title_box {
          width: 100%;
        }
      }
    }
  }
`;

export const CommuSection = styled.section`
  .news_area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    .tag_news {
      flex: 0 0 40%;
      .tag_list {
        display: flex;
        flex-wrap: wrap;
        padding-right: 15%;
        gap: 20px;
        .tag_item {
          cursor: pointer;
          display: flex;
          justify-content: center;
          border-radius: 100px;
          box-shadow: 0px 0px 2px black;
          padding: 10px 20px;
          font-size: 18px;
          gap: 8px;
          align-items: center;
          .svg_box {
            svg {
              width: auto;
              height: 20px;
            }
          }
          img {
            height: 20px;
          }
          .today {
            color: #0086ce;
          }
          .blog {
            color: #03c75a;
          }
          &:hover {
            background-color: #191919;
            color: #fff;
            .today {
              color: #fff;
            }
            .blog {
              color: #fff;
            }
          }
        }
      }
    }
    .news_scrap {
      flex: 0 0 52%;
      max-width: 52%;
      .news_list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 38px;
        justify-content: space-between;
        width: 100%;
        .news_item {
          position: relative;
          flex: 0 0 48%;
          padding: 40px;
          height: 410px;
          .news_in {
            position: absolute;
            top: 0px;
            display: flex;
            flex-direction: column;
            height: 410px;
            border-radius: 35px;
            overflow: hidden;
            box-shadow: 15px 15px 50px 1px rgba(51, 51, 51, 0.09);
            .item_info {
              display: flex;
              flex-direction: column;
              padding: 35px;
              .info_title {
                display: flex;
                flex-direction: column;
                color: #585858;
                line-height: 28px;
                font-size: 25px;
                font-family: "KohiLearn", "Noto Sans KR", sans-serif;
                margin-bottom: 10px;
              }
              .info_text {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
            }
            .news_img {
              height: 255px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
              }
            }
          }
          &:nth-child(2) {
            .news_in {
              top: 40px;
            }
          }
          &:nth-child(4) {
            .news_in {
              top: 40px;
            }
          }
        }
      }
    }
  }
`;

export const BannerSection = styled.section`
  .banner_slide_area {
    margin: 0 auto;
    width: 1400px;
    height: 500px;
  }
  .banner_link {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    width: 100%;
    a {
      position: relative;
      display: block;
      align-items: center;
      align-content: center;
      text-align: center;
      padding: 17px 120px 17px 160px;
      height: 100%;
      border-radius: 200px;
      border: 1px solid black;
      &::after {
        position: absolute;
        content: "";
        top: 50%;
        left: 15%;
        transform: translate(-0%, -50%);
        width: 42px;
        height: 26px;
        background-image: url(/img/ico_img.svg);
        background-repeat: no-repeat;
      }
    }
  }
`;
