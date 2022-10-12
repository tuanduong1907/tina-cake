import React, { useState } from "react";
import styled from "styled-components";
import SvgArrowDoubleLeftIcon from "../../icons/ArrowDoubleLeftIcon";
import SvgDashboardIcon from "../../icons/DashboardIcon";
import SvgLogoGenz from "../../icons/LogoGenz";
import { useRouter } from "next/router";
import Link from "next/link";
import SvgPostIcon from "../../icons/PostIcon";
import SvgCategoryIcon from "../../icons/CategoryIcon";
import { text14, text24 } from "../../../shared/utils/mixin-styled";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminNavigationStyles = styled.div`
  .navigation-wrap {
    width: 225px;
    height: 100vh;
    position: relative;
    background-color: #ffff;
    z-index: 50;
    transition: linear 0.25s;
  }
  .navigtaion {
    position: fixed;
    width: 225px;
    height: 100%;
    background: #ffff;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 0px 8px;
    overflow: auto;
  }
  .navigtaion-logo {
    height: 64px;
    background: rgba(255, 255, 255, 0.03);
    display: flex;
    align-items: center;
    padding-inline: 16px;
    justify-content: space-between;
    margin-bottom: 18px;
    span {
      font-weight: 700;
      color: ${(props) => props.theme.primaryColor};
      ${text24}
    }
  }
  .navigtaion-list {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
  .navigtaion-item {
    a {
      padding: 16px;
      display: flex;
      align-items: center;
      column-gap: 16px;
      color: ${(props) => props.theme.textColor};
      cursor: pointer;
      user-select: none;
    }
    .navigtaion-icon {
      height: 24px;
    }
    &:hover {
      a {
        background-color: ${(props) => props.theme.primaryColor};
        color: #fff;
      }
    }
    &.active {
      a {
        background-color: ${(props) => props.theme.primaryColor};
        color: #fff;
      }
    }
  }
  .menu-icon-btn {
    position: fixed;
    z-index: 30;
    left: 12px;
    top: 21px;
    svg {
      width: 24px;
      height: 24px;
    }
    display: none;
  }
  .commingsoon {
    ${text14}
    display: block;
    margin-top: 4px;
  }
  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    .navigation-wrap {
      position: fixed;
      transform: translateX(-200%);
      &.active {
        transform: translateX(0);
      }
    }
    .menu-icon-btn {
      display: block;
    }
  }
`;

const AdminNavigation = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <AdminNavigationStyles>
        <div className="menu-icon-btn" onClick={() => setShowNav(!showNav)}>
          <GiHamburgerMenu />
        </div>
        <div className={`navigation-wrap ${showNav ? "active" : ""}`}>
          <div className="navigtaion">
            <div className="navigtaion-logo">
              <span>Tina Cake</span>
              <SvgArrowDoubleLeftIcon
                onClick={() => setShowNav(false)}
              ></SvgArrowDoubleLeftIcon>
            </div>
            <ul className="navigtaion-list">
              <li
                className={`navigtaion-item ${
                  router.pathname == "/admin" ? "active" : ""
                }`}
                onClick={() => router.push("/admin")}
              >
                <Link href="/admin">
                  <a>
                    <SvgPostIcon className="navigtaion-icon"></SvgPostIcon>
                    Quản lý bài viết
                  </a>
                </Link>
              </li>
              <li
                className={`navigtaion-item ${
                  router.pathname == "/admin/quan-ly-banner" ? "active" : ""
                }`}
                onClick={() => router.push("/admin/quan-ly-banner")}
              >
                <Link href="/admin">
                  <a>
                    <SvgPostIcon className="navigtaion-icon"></SvgPostIcon>
                    Quản lý Banner
                  </a>
                </Link>
              </li>

              <li className={`navigtaion-item `}>
                <Link href="#">
                  <a style={{ pointerEvents: "none", cursor: "default" }}>
                    <SvgCategoryIcon className="navigtaion-icon"></SvgCategoryIcon>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      Quản lý danh mục
                      <span className="commingsoon">(Chưa có)</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className={`navigtaion-item `}>
                <Link href="#">
                  <a style={{ pointerEvents: "none", cursor: "default" }}>
                    <SvgCategoryIcon className="navigtaion-icon"></SvgCategoryIcon>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        pointerEvents: "none",
                        cursor: "default",
                      }}
                    >
                      Quản lý sản phẩm
                      <span className="commingsoon">(Chưa có)</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className={`navigtaion-item`}>
                <Link href="#">
                  <a style={{ pointerEvents: "none", cursor: "default" }}>
                    <SvgCategoryIcon className="navigtaion-icon"></SvgCategoryIcon>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        pointerEvents: "none",
                        cursor: "default",
                      }}
                    >
                      Quản lý phản hồi
                      <span className="commingsoon">(Chưa có)</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className={`navigtaion-item`}>
                <Link href="#">
                  <a style={{ pointerEvents: "none", cursor: "default" }}>
                    <SvgCategoryIcon className="navigtaion-icon"></SvgCategoryIcon>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        pointerEvents: "none",
                        cursor: "default",
                      }}
                    >
                      Quản lý người dùng
                      <span className="commingsoon">(Chưa có)</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </AdminNavigationStyles>
    </>
  );
};

export default AdminNavigation;
