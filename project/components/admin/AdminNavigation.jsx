import React from "react";
import styled from "styled-components";
import SvgArrowDoubleLeftIcon from "../../icons/ArrowDoubleLeftIcon";
import SvgDashboardIcon from "../../icons/DashboardIcon";
import SvgLogoGenz from "../../icons/LogoGenz";
import { useRouter } from "next/router";
import Link from "next/link";
import SvgPostIcon from "../../icons/PostIcon";
import SvgCategoryIcon from "../../icons/CategoryIcon";

const AdminNavigationStyles = styled.div`
  width: 225px;
  height: 100vh;
  position: relative;
  .navigtaion {
    position: fixed;
    width: 225px;
    height: 100%;
    background: black;
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
  }
  .navigtaion-list {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  .navigtaion-item {
    a {
      padding: 8px 16px;
      display: flex;
      align-items: center;
      column-gap: 16px;
      color: #999999;
      cursor: pointer;
      user-select: none;
    }
    .navigtaion-icon {
      height: 24px;
    }
    &:hover {
      a {
        background-color: rgba(255, 255, 255, 0.03);
        color: #fff;
      }
    }
    &.active {
      a {
        background-color: rgba(255, 255, 255, 0.03);
        color: #fff;
      }
    }
  }
`;

const AdminNavigation = () => {
  const router = useRouter();
  return (
    <AdminNavigationStyles>
      <div className="navigtaion">
        <div className="navigtaion-logo">
          <SvgLogoGenz></SvgLogoGenz>
          <SvgArrowDoubleLeftIcon></SvgArrowDoubleLeftIcon>
        </div>
        <ul className="navigtaion-list">
          <li
            className={`navigtaion-item ${
              router.pathname == "/admin" ? "active" : ""
            }`}
          >
            <Link href="/admin">
              <a>
                <SvgDashboardIcon className="navigtaion-icon"></SvgDashboardIcon>
                Dashboard
              </a>
            </Link>
          </li>
          <li
            className={`navigtaion-item ${
              router.pathname == "/admin/bai-viet" ? "active" : ""
            }`}
          >
            <Link href="/admin/bai-viet">
              <a>
                <SvgPostIcon className="navigtaion-icon"></SvgPostIcon>
                Bài viết
              </a>
            </Link>
          </li>
          <li
            className={`navigtaion-item ${
              router.pathname == "/admin/danh-muc" ? "active" : ""
            }`}
          >
            <Link href="/admin/danh-muc">
              <a>
                <SvgCategoryIcon className="navigtaion-icon"></SvgCategoryIcon>
                Danh mục
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </AdminNavigationStyles>
  );
};

export default AdminNavigation;
