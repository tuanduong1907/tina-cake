/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import {
  text14,
  text16,
  text18,
  text24,
} from "../../../shared/utils/mixin-styled";
import SvgMoreIcon from "../../icons/MoreIcon";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import toast from "react-hot-toast";
import useClickOutside from "../../../shared/hooks/useClickOutSite";
import AppButtonAdmin from "../../controls/app-button-admin/AppButtonAdmin";
import SvgLogoutIcon from "../../icons/LogoutIcon";

const HeaderMenuAdminStyles = styled.header`
  position: fixed;
  top: 0;
  left: 225px;
  right: 0;
  height: 72px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 32px;
  margin-inline: 8px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  z-index: 20;
  .header-heading {
    ${text24};
    font-weight: 700;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 12px;
    svg {
      height: 24px;
      width: 24px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    column-gap: 24px;
  }

  .header-info-wrap {
    display: flex;
    align-items: center;
    column-gap: 8px;
    flex-shrink: 0;
  }

  .header-logo {
    width: 50px;
    height: 50px;
    border-radius: 100rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .header-info {
  }
  .header-name {
    ${text16}
    font-weight: 600;
  }
  .header-sub-name {
    ${text14}
    color: #999999;
  }
  .more-icon {
    cursor: pointer;
  }
  .header-option {
    position: relative;
  }
  .sub-menu {
    position: absolute;
    width: 180px;
    right: 0;
    top: 170%;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    text-align: right;
    border-radius: 8px;
    animation: fadeIn 0.25s linear;
  }
  .sub-menu-item {
    padding: 12px;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 8px;
    transition: linear 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.lightGrayColor};
    }
  }
  .sub-menu-title {
    padding: 16px;
    padding-bottom: 0;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 8px;
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      left: 0;
      padding-inline: 20px;
      margin-inline: 0;
      border-radius: 4px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .btn-admin-wrap {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 16px 32px;
      background-color: #fff;
      border-top: 1px solid #e6e8ec;
      z-index: 3;
    }
    .btn-admin {
      width: 100%;
      height: 48px;
    }
    .header-info {
      display: none;
    }
    .header-right{
      gap: 4px;
    }
  }
  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    & {
      width: 100%;
      left: 0;
    }
    .header-heading {
      ${text16}
    }
    .header-left {
      margin-left: 30px;
    }
  }
`;

const HeaderMenuAdmin = ({ heading = "", writePost }) => {
  const router = useRouter();
  const { userInfo } = useAuth();
  const [showSubmenu, setShowSubmenu] = useState(false);
  const { nodeRef, show, setShow } = useClickOutside();

  useEffect(() => {
    if (!userInfo) router.push("/dang-nhap");
  }, [router, userInfo]);

  const handleSignOut = () => {
    signOut(auth);
    toast.success("Đăng xuất thành công!");
  };
  return (
    <HeaderMenuAdminStyles ref={nodeRef}>
      <div className="header-left">
        <div className="header-heading">{heading}</div>
      </div>
      <div className="header-right">
        {writePost && (
          <div className="btn-admin-wrap">
            <AppButtonAdmin
              height="40px"
              className="btn-admin"
              onClick={() => router.push("/admin/them-bai-viet-moi")}
            >
              Viết bài mới
            </AppButtonAdmin>
          </div>
        )}

        <div className="header-info-wrap">
          <div className="header-logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/backend-tina-cake.appspot.com/o/avatar.jpg?alt=media&token=93c15490-efec-4d4d-9574-0f0cf008d76a"
              alt="avatar"
            />
          </div>
          <div className="header-info">
            <div className="header-name">Na Na</div>
            <div className="header-sub-name">Quản trị viên</div>
          </div>
        </div>
        <div className="header-option">
          <SvgMoreIcon
            className="more-icon"
            onClick={() => setShow(!show)}
          ></SvgMoreIcon>
          {show && (
            <ul className="sub-menu">
              <h4 className="sub-menu-title">Xin chào Na Na!</h4>
              <div className="sub-menu-list">
                <li className="sub-menu-item" onClick={handleSignOut}>
                  Đăng xuất <SvgLogoutIcon></SvgLogoutIcon>
                </li>
              </div>
            </ul>
          )}
        </div>
      </div>
    </HeaderMenuAdminStyles>
  );
};

export default HeaderMenuAdmin;
