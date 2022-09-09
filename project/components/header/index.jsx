/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dataHeader, dataSubMenuHeader } from "../../../data/headerData";
import { text11, text16 } from "../../../shared/utils/mixin-styled";
import AppButton from "../../controls/app-button/AppButton";
import SvgCakeIcon from "../../icons/CakeIcon";

const HeaderStyles = styled.header`
  height: 72px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: all 0.25s linear;
  &.active-shadow {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #ffff;
    color: inherit !important;
    .nav-item {
      color: inherit;
    }
  }
  .header-logo {
    img {
      height: 55px;
    }
  }

  .nav-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    font-weight: 500;
    ${text16}
    gap: 32px;
  }

  .nav-item {
    &:hover {
      .submenu-list {
        display: block;
      }
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      top: 140%;
    }
    to {
      opacity: 1;
      top: 100%;
    }
  }

  .submenu-list {
    position: absolute;
    top: 100%;
    width: 350px;
    background: ${(props) => props.theme.primaryColor};
    padding-block: 12px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: none;
    animation: fadeIn linear 0.3s;
  }
  .submenu-item a {
    display: block;
    padding: 8px 12px;
  }
  .header-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  }

  .nav-icon {
    display: none;
    svg {
      height: 15px;
    }
  }

  .sub-menu-list {
    position: absolute;
    top: 190%;
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      height: 65px;
      backdrop-filter: initial;
      position: absolute;
    }
    .nav-list {
      position: fixed;
      bottom: 0;
      top: auto;
      left: 0;
      transform: translate(0);
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(16px);
      height: 50px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding-inline: 20px;
      li {
        ${text11}
      }
    }

    .nav-item {
      color: #fff !important;
    }

    .nav-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .nav-icon {
        display: block;
        text-align: center;
        svg {
          fill: #fff;
        }
      }
    }
  }
  /* PC: width >= 1024px */
  @media only screen and (min-width: 1024px) {
    .nav-link {
      line-height: 67px;
      display: block;
      padding-inline: 8px;
    }
  }
`;

export const Header = ({ className = "" }) => {
  const [showShadowHeader, setShowShadowHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowShadowHeader(window.scrollY >= 1);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderStyles
      className={`${showShadowHeader ? "active-shadow" : ""} ${className}`}
    >
      <ul className="nav-list">
        {dataHeader.length > 0 &&
          dataHeader.map((item) => (
            <li className="nav-item" key={item.id}>
              <Link href={item.link}>
                <a className="nav-link">
                  <div className="nav-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox={item.viewBox}
                    >
                      <path d={item.path} />
                    </svg>
                  </div>
                  <span>{item.title}</span>
                </a>
              </Link>
            </li>
          ))}
      </ul>
      <div className="">
        <div className="container header-wrap">
          <div className="header-logo">
            <Link href="/">
              <a>
                <img
                  src="https://d3rzzb9pdm93i0.cloudfront.net/2021/12/1639409961f24e427f68f7ff71812edee6d360e9a4.png"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <Link href="https://www.banhkemnhatrangtina.com/">
            <a target="_blank">
              <AppButton>
                Đặt bánh
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.17017 7.43994L12.0002 12.5499L20.7701 7.46991"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0002 21.6099V12.5399"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.93011 2.48L4.59012 5.45003C3.38012 6.12003 2.39014 7.80001 2.39014 9.18001V14.83C2.39014 16.21 3.38012 17.89 4.59012 18.56L9.93011 21.53C11.0701 22.16 12.9401 22.16 14.0801 21.53L19.4201 18.56C20.6301 17.89 21.6201 16.21 21.6201 14.83V9.18001C21.6201 7.80001 20.6301 6.12003 19.4201 5.45003L14.0801 2.48C12.9301 1.84 11.0701 1.84 9.93011 2.48Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 13.24V9.58002L7.51001 4.09998"
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
      </div>
    </HeaderStyles>
  );
};
