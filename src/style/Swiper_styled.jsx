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
    bottom: 8%;
    .swiper-pagination-bullet-active {
      width: 2%;
      border-radius: 100px;
      background-color: blue;
    }
  }
`;
