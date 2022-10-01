/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  text16,
  text18,
  text36,
  text48,
} from "../../../shared/utils/mixin-styled";
import AppButton from "../../controls/app-button/AppButton";
import { dataBanner } from "../../../data/bannerData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const BannerStyles = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: rgba(82, 189, 148, 0.5);
  .banner-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin-inline: 0;
    padding-inline: 0;
    max-width: 100%;
  }
  .banner-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    height: 100%;
    width: 100%;
    padding-inline: 300px;
    background-attachment: fixed;
    position: relative;
    /* background-size: cover;
    background-repeat: no-repeat; */
  }
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(6px);
  }
  .banner-content {
    width: 600px;
    margin-left: 60px;
    z-index: 3;
  }
  .banner-title {
    ${text48};
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
  .banner-text {
    ${text18}
    margin-top: 24px;
    margin-bottom: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
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
  .swiper {
    height: 100%;
    width: 100%;
  }
  .swiper-pagination {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 60px;
    width: auto;
    margin-left: 200px;
    &::after {
      content: "";
      display: block;
      height: 60%;
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

  /* Tablet: width >= 740px and width < 1024px */
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    .banner-image {
      height: 100%;
    }
  }

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      height: auto;
      padding-block: 0;
      background-attachment: initial;
    }
    .banner-item {
      flex-direction: column;
      padding: 102px 20px 72px 20px;
    }
    .banner-content {
      width: 100%;
      margin-left: 0;
    }
    .banner-title {
      ${text36}
    }
    .banner-text {
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
  const [postBanner, setPostBanner] = useState([]);
  const [imageBanner, setImageBanner] = useState("");
  console.log("imageBanner", imageBanner);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(colRef, where("banner", "==", true), limit(4));
    onSnapshot(queries, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPostBanner(result);
    });
  }, []);
  return (
    <BannerStyles className="BannerStyles">
      <div className="container banner-wrap">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          grabCursor={true}
          spaceBetween={0}
          autoplay={true}
        >
          {postBanner?.length > 0 &&
            postBanner?.map((item) => (
              <SwiperSlide key={item.id} style={{}}>
                <div
                  className="banner-item"
                  style={{
                    background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${item.image})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay"></div>
                  <div className="banner-content">
                    <h2 className="banner-title">{item.title}</h2>
                    <p className="banner-text">{item.desc}</p>
                    <Link href={`${item.slug}`}>
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
                    <Link href={`/${item.slug}`}>
                      <a>
                        <img src={item.image} alt="banner" />
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
