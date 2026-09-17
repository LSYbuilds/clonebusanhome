import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import bannerIcon from "/src/assets/svg/icon/ico_img.svg";
import bannerIconW from "/src/assets/svg/icon/ico_img_w.svg";

const AnimateBorder2 = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const AnimateBorder1 = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

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
  @media (max-width: 1620px) {
    .inner {
      width: 90%;
      .event_banner {
        display: flex;
        justify-content: space-between;
        height: auto;
        li {
          width: calc(100% / 4);
          height: fit-content;
          a {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
    .inner {
      section {
        padding-bottom: 0px;
        .head_title_box {
          margin-bottom: 20px;
          .head_title {
            font-size: 2.1em;
          }
        }
      }
      .event_banner {
        margin-top: 70px;
      }
    }
  }
  @media (max-width: 768px) {
    .inner {
      section {
        .head_title_box .tag_list li a {
          font-size: 1.2em;
        }
      }
      .event_banner {
        height: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 2fr);
        gap: 16px;
        li {
          width: 100%;
        }
      }
    }
  }
`;

export const GuideSection = styled.section`
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
          font-size: 1.8em;
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
      position: relative;
      flex: 0 0 23%;
      height: 200px;
      border-radius: 30px;
      cursor: pointer;
      box-shadow: 15px 15px 50px 1px rgba(51, 51, 51, 0.09);
      transition: box-shadow 0.3s ease;
      .card_bg {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 35px;
        overflow: hidden;
        transition-duration: 0.3s;
        z-index: 1;
        &::after {
          content: "";
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            45deg,
            #e50048 0%,
            #ff6596 47%,
            #6fd2c3 58%,
            #4eb4a4 67%,
            #00967f 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
      }
      .card_inset {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        padding: 32px 32px 16px 32px;
        font-size: 14px;
        overflow: hidden;
        background-color: #fff;
        border-radius: 30px;
        transition-duration: 0.3s;
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
            .m_text {
              display: none;
            }
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
        background-color: #033d99;

        background-image:
          url("/img/sijang_new3.png"),
          linear-gradient(to right, #033d99, #0190cf);

        background-position:
          left 15px bottom,
          center;
        background-repeat: no-repeat;
        background-size:
          auto 100%,
          cover;
        /* background:
          url("/img/sijang_new3.png") left 15px bottom no-repeat,
          linear-gradient(to right, #033d99, #0190cf); */
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
      &:hover {
        box-shadow: 20px 20px 10px 1px rgba(0, 0, 0, 0.2);
        .card_inset {
          top: 50%;
        }
        .card_bg {
          top: 50%;
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          display: block;
          opacity: 1;
          &::after {
            opacity: 1;
            width: 500%;
            height: 500%;
            animation: ${AnimateBorder2} 3s ease infinite;
          }
        }
      }
    }
  }
  .service_slide {
    margin-top: 100px;
    width: 100%;
    height: 125px;
    .service_in {
      margin: 0 auto;
      width: 100%;
      max-width: 1260px;
      height: 100%;
    }
  }
  @media (max-width: 1620px) {
    .gra_card_wrap {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
      .card_item {
        flex: 0 1 49%;
      }
    }
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    .head_title_box .tag_list li a {
      font-size: 1.2em;
    }
    .gra_card_wrap {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      overflow: hidden;
      .card_item {
        position: static;
        flex: none;
        height: auto;
        padding: 10px 0px;
        .card_bg {
          display: none;
        }
        .card_inset {
          position: static;
          top: auto;
          left: auto;
          transform: none;
          padding: 16px 32px 16px 32px;
        }
        .card_inset a .title_box {
          gap: 10px;
        }
        .card_inset a .title_box > .card_title {
          font-size: 17px;
        }
        .date {
          a {
            .title_box .card_title {
              font-size: 17px;
            }
            .icon_box {
              display: none;
            }
            .text {
              p {
                display: none;
              }
              .m_text {
                display: block;
              }
            }
          }
        }
        .cul {
          background-size: 50px;
          gap: 20px;
          .card_title {
            font-size: 17px;
          }
          .cul_list {
          }
        }
        .tour {
          flex-direction: column;
          gap: 16px;
          .card_title_box {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .card_title {
              display: none;
            }
            .card_btn {
              width: auto;
              font-size: 12px;
            }
          }
          .card_list {
            position: static;
            transform: none;
            display: flex;
            justify-content: space-between;
            li {
              width: 60px;
              height: 60px;
            }
          }
        }
        .mayor {
        }
        &:hover {
          box-shadow: none;
          .card_bg {
            display: none;
          }
        }
      }
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
        border-bottom: 2px solid #585858;
        .sub_title_box {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 1620px) {
  }
  @media (max-width: 1024px) {
    .notice_wrap .sub_title_box {
      width: 100%;
      justify-content: space-between;
    }
    .head_title_box .head_title {
      font-size: 2.1em;
    }
  }
  @media (max-width: 768px) {
    .inform_list {
      flex-direction: column;
      gap: 30px;
      width: 100%;
      .inform_item {
        flex: none;
        padding: 0px;
        border-bottom: 2px solid #585858;
        .sub_title_box {
          padding: 0px;
          span {
            font-size: 1.7em;
          }
          .more_btn {
            font-size: 1.3em;
          }
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
          flex: 0 0 48%;
          padding: 40px;
          height: 410px;
          .news_inset {
            position: relative;
            height: 410px;
            .news_inset_bg {
              position: absolute;
              z-index: 9;
              top: 50%;
              left: 50%;
              opacity: 0;
              transition-duration: 0.3s;
              transform: translate(-50%, -50%);
              width: calc(100% + 10px);
              height: calc(100% + 10px);
              border-radius: 40px;
              overflow: hidden;
              &::after {
                content: "";
                position: absolute;
                top: 0px;
                left: 0px;
                width: 500%;
                height: 500%;
                background-image: linear-gradient(
                  45deg,
                  #e50048 0%,
                  #ff6596 47%,
                  #6fd2c3 58%,
                  #4eb4a4 67%,
                  #00967f 100%
                );
                opacity: 1;
                transition: opacity 0.3s ease-in-out;
              }
            }
            .news_in {
              position: absolute;
              z-index: 10;
              top: 0px;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              height: 410px;
              overflow: hidden;
              border-radius: 35px;
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
                  font-size: 1.4em;
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
          }
          &:hover {
            .news_inset > .news_inset_bg {
              opacity: 1;
              &::after {
                animation: ${AnimateBorder2} 3s ease infinite;
              }
            }
          }
          &:nth-child(2) {
            .news_inset > .news_in {
              top: 40px;
            }
            .news_inset_bg {
              top: calc(50% + 40px);
            }
          }
          &:nth-child(4) {
            .news_inset > .news_in {
              top: 40px;
            }
            .news_inset_bg {
              top: calc(50% + 40px);
            }
          }
        }
      }
    }
    .mobile_scrap_swiper_wrap {
      display: none;
    }
  }
  @media (max-width: 1280px) {
    .news_area {
      flex-direction: column;
      .tag_news {
        width: 100%;
        flex: none;
        .tag_list {
          padding: 0px;
          gap: 10px;
          justify-content: flex-start;
          .tag_item {
            font-size: 1.6em;
            padding: 5px 10px;
          }
        }
      }
      .news_scrap {
        width: 100%;
        flex: none;
        display: none;
      }
      .mobile_scrap_swiper_wrap {
        display: block;
        width: 100%;
        height: 600px;
        padding: 20px 0px;
      }
    }
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
`;

export const BannerSection = styled.section`
  .banner_slide_area {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    height: 500px;
    overflow: hidden;
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
      font-size: 1.8em;
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

  @media (max-width: 1600px) {
    .banner_link {
      margin-top: 50px;
      a {
        padding: 10px 40px 10px 80px;
      }
    }
  }
  @media (max-width: 1280px) {
    .banner_slide_area {
      max-width: 1000px;
      width: 100%;
      height: 400px;
    }
  }

  @media (max-width: 1024px) {
    .banner_slide_area {
      max-width: 760px;
      width: 100%;
      height: 50vw;
    }
  }
  @media (max-width: 768px) {
  }
`;
