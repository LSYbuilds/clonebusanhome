import styled from "@emotion/styled";
import { Swiper } from "swiper/react";
export const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    color: #fff;
    width: auto;
    height: 100%;
    div {
      width: 100%;
      overflow: hidden;
      .imgbox {
        width: 100%;
        height: 100%;
        img {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .img_info {
          position: absolute;
          bottom: 50px;
          right: 50px;
          width: auto;
          font-size: 26px;
          font-weight: 500;
          text-shadow: 3px 2px 10px #000;
        }
      }
    }
  }
  .swiper-pagination {
    left: -41%;
    bottom: 6%;
    .swiper-pagination-bullet-active {
      width: 2%;
      border-radius: 100px;
      background-color: blue;
    }
  }
`;

export const ServiceSwiper = styled(Swiper)`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #fff;
    width: auto;
    height: 100%;
    .swiper-slide {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      gap: 20px;
      .icon {
        text-align: center;
        svg {
          width: 50%;
          height: 100%;
          transition: transform 1s ease-in-out;
        }
      }
      .icon_title {
        text-align: center;
        font-size: 1.4em;
        color: #000;
      }
      &:hover {
        .icon {
          svg {
            transform: rotateY(360deg);
          }
        }
      }
    }
  }
`;

export const NoticeSwiper = styled(Swiper)`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 195px;
  overflow: hidden;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
    width: auto;
    .swiper-slide {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 30px;
      border-radius: 25px;
      color: #000;
      box-shadow: 15px 15px 50px 1px rgba(51, 51, 51, 0.09);
      .notice_title {
        font-size: 18px;
        font-weight: 600;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        letter-spacing: -0.1rem;
        color: #585858;
      }
      .notice_text {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        letter-spacing: -0.1rem;
        color: #888;
      }
    }
  }
`;

export const BannerSwiper = styled(Swiper)`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 90%;
    .swiper-slide {
      position: relative;
      align-content: center;
      width: 800px;
      height: 100%;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        height: 100%;
        border-radius: 20px;
        border: 2px solid rgb(136, 136, 136, 0.3);
        transition-duration: 1s;
      }
    }
    .swiper-slide:not(.swiper-slide-active) {
      position: relative;
      img {
        border-radius: 20px;
        height: 80%;
      }
    }
    ::after {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      content: "";
      height: 100%;
      background-color: rgb(255, 255, 255, 0.7);
    }
    .swiper-slide-active {
      opacity: 1;
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 17px;
      height: 17px;
      background-color: #ccc;
    }
    .swiper-pagination-bullet-active {
      width: calc(17 * 3px);
      border-radius: 100px;
      background-color: #1e4da4;
    }
  }
`;
