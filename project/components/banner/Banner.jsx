/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { text16, text18, text36, text48 } from "../../../shared/utils/mixin-styled";
import AppButton from "../../controls/app-button/AppButton";
import { dataBanner } from "../../../data/bannerData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const BannerStyles = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .banner-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .banner-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  .banner-content {
    width: 600px;
    margin-left: 60px;
  }
  .banner-title {
    ${text48};
    line-height: 1.3;
  }
  .banner-text {
    ${text18}
    margin-top: 24px;
    margin-bottom: 30px;
    display:-webkit-box;
    -webkit-line-clamp:5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
  svg {
    position: relative;
    left: 0;
    transition: linear 0.1s;
  }
  .banner-btn {
    &:hover {
      svg {
        left: 2px;
      }
    }
  }

  .banner-image {
    border-radius: 16px;
    overflow: hidden;
    width: 416px;
    height: 496px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    &:hover {
      img {
        transform: scale(1.1);
      }
      .banner-image-title {
        color: ${(props) => props.theme.primaryColor};
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.2s linear;
    }
  }
  .banner-image-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    padding: 16px;
    ${text16}
    font-weight: 600;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(16px);
    display: flex;
    align-items: center;
    transition: all 0.25s linear;
  }

  /* Swiper */
  .swiper-pagination {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 60px;
    width: auto;
    &::after {
      content: "";
      display: block;
      height: 100%;
      background-color: #606060;
      position: absolute;
      left: 10px;
      width: 1px;
    }
  }
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: transparent;
    opacity: 1;
    background: #606060;
    display: flex;
    justify-content: center;
    align-items: center;
    ${text16}
    z-index: 2;
  }
  .swiper-pagination-bullet-active {
    width: 24px;
    height: 24px;
    color: #fff;
    background: ${(props) => props.theme.primaryColor};
    position: relative;
    right: 4px;
    z-index: 2;
  }
  /* end Swiper */

  /* Responsive */
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      height: auto;
      padding-block: 72px;
    }
    .banner-item {
      margin-top: 40px;
      flex-direction: column;
    }
    .banner-content {
      width: 100%;
      margin-left: 0;
    }
    .banner-title{
      ${text36}
    }
    .banner-text{
      ${text16}
      text-align: justify;
    }
    .banner-btn {
      background-color: transparent;
      font-weight: 600;
      text-decoration: underline;
    }
    .banner-image {
      width: 100%;
      height: 400px;
    }

    /* Swiper */
    .swiper-pagination {
      display: none;
    }
    /* end Swiper */
  }
`;

const Banner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <BannerStyles className="BannerStyles">
      <div className="container banner-wrap">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          grabCursor={true}
          spaceBetween={40}
        >
          {dataBanner.length > 0 &&
            dataBanner.map((item) => (
              <SwiperSlide key={item.id} style={{}}>
                <div className="banner-item">
                  <div className="banner-content">
                    <h2 className="banner-title">{item.title}</h2>
                    <p className="banner-text">{item.content}</p>
                    <Link href={`${item.link}`}>
                      <a
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <AppButton className="banner-btn">
                          Xem chi tiết{" "}
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.6667 7.81706L3.66675 7.81706"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.63354 3.80083L13.6669 7.81683L9.63354 11.8335"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </AppButton>
                      </a>
                    </Link>
                  </div>
                  <div className="banner-image">
                    <Link href={`/${item.link}`}>
                      <a>
                        <img
                          src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
                          alt="banner"
                        />
                        <div className="banner-image-title">
                          Hộp Socola Valentine Tp Nha Trang – Quà Tặng 14/2
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </BannerStyles>
  );
};

export default Banner;
