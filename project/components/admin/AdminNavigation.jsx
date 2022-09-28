import React from "react";
import styled from "styled-components";
import SvgArrowDoubleLeftIcon from "../../icons/ArrowDoubleLeftIcon";
import SvgDashboardIcon from "../../icons/DashboardIcon";
import SvgLogoGenz from "../../icons/LogoGenz";
import { useRouter } from "next/router";
import Link from "next/link";
import SvgPostIcon from "../../icons/PostIcon";
import SvgCategoryIcon from "../../icons/CategoryIcon";
import { text24 } from "../../../shared/utils/mixin-styled";

const AdminNavigationStyles = styled.div`
  width: 225px;
  height: 100vh;
  position: relative;
  .navigtaion {
    position: fixed;
    width: 225px;
    height: 100%;
    background: #ffff;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
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
    span{
      font-weight: 700;
      color: ${props => props.theme.primaryColor};
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
      padding:  16px;
      display: flex;
      align-items: center;
      column-gap: 16px;
      color: ${props => props.theme.textColor};;
      cursor: pointer;
      user-select: none;
    }
    .navigtaion-icon {
      height: 24px;
    }
    &:hover {
      a {
        background-color: ${props => props.theme.primaryColor};;
        color: #fff;
      }
    }
    &.active {
      a {
        background-color: ${props => props.theme.primaryColor};;
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
        <span>Tina Cake</span>
          <SvgArrowDoubleLeftIcon></SvgArrowDoubleLeftIcon>
        </div>
        <ul className="navigtaion-list">
          {/* <li
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
          </li> */}
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
