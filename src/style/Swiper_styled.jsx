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
  width: 1260px;
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
        font-size: 0.825em;
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
