import Link from "next/link";
import React from "react";
import SvgRightIcon from "../../icons/RightIcon";
import AppHeading from "../app-heading/AppHeading";
import styled from "styled-components";

const HeaderTitleStyles = styled.div`
  &.header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title-wrap {
    display: flex;
    flex-direction: column;
    gap: 18px;
    position: relative;
  }
  .title-line {
    border: 1px solid ${(props) => props.theme.grayColor};
    width: 207px;
    position: absolute;
    top: 120%;

    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 6px;
      position: absolute;
      top: 50%;
      left: 20%;
      transform: translateY(-50%);
      background-color: ${(props) => props.theme.primaryColor};
      border-radius: 100rem;
    }
  }
  .link-detail {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #4e8b74;
    &:hover {
      .icon-right {
        left: 8px;
      }
    }
  }
  .icon-right {
    position: relative;
    left: 0;
    transition: linear 0.1s;
  }

  /* Responsive */

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    .title-line {
      width: 50%;
      &::after {
        width: 24px;
        height: 5px;
      }
    }
  }
`;

const AppHeaderTitle = ({ title = "", link = "" }) => {
  return (
    <HeaderTitleStyles className="header-title">
      <div className="title-wrap">
        <AppHeading>{title}</AppHeading>
        <div className="title-line"></div>
      </div>
      <div>
        <Link href={`/${link}`}>
          <a className="link-detail">
            Xem tất cả
            <SvgRightIcon className="icon-right"></SvgRightIcon>
          </a>
        </Link>
      </div>
    </HeaderTitleStyles>
  );
};

export default AppHeaderTitle;
