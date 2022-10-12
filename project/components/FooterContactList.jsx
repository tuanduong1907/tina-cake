import Link from "next/link";
import React from "react";
import SvgEmailIcon from "../icons/EmailIcon";
import SvgLocationIcon from "../icons/LocationIcon";
import SvgPhoneIcon from "../icons/PhoneIcon";
import SvgWebIcon from "../icons/WebIcon";
import styled from "styled-components";
import { text16 } from "../../shared/utils/mixin-styled";

const FooterContactListStyles = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 14px;

  .footer-info-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .footer-icon {
    flex-shrink: 0;
    &.footer-icon-web {
      height: 16px;
    }
  }
  .footer-link {
    transition: linear 0.1s;
    ${text16}
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }

`;

const FooterContactList = () => {
  return (
    <FooterContactListStyles className="footer-info-list">
      <li className="footer-info-item">
        <SvgEmailIcon className="footer-icon"></SvgEmailIcon>
        <Link href="mailto:tinacakesnhatrang@gmail.com">
          <a className="footer-link" target="_blank">
            tinacakesnhatrang@gmail.com
          </a>
        </Link>
      </li>
      <li className="footer-info-item">
        <SvgPhoneIcon className="footer-icon"></SvgPhoneIcon>
        <Link href="tel:0935323287">
          <a className="footer-link">
            0935323287 (Check lịch - Thông tin bánh kem)
          </a>
        </Link>
      </li>
      <li className="footer-info-item">
        <SvgPhoneIcon className="footer-icon"></SvgPhoneIcon>
        <Link href="tel:0568888479">
          <a className="footer-link">0568888479 (Giao nhận)</a>
        </Link>
      </li>
      <li className="footer-info-item">
        <SvgLocationIcon className="footer-icon"></SvgLocationIcon>
        <Link href="https://g.page/Tiembanhkemsinhnhat?share">
          <a className="footer-link" target="_blank">
            56 Nguyễn Hữu Huân, Tân Lập, Nha Trang
          </a>
        </Link>
      </li>
      <li className="footer-info-item">
        <SvgWebIcon className="footer-icon footer-icon-web"></SvgWebIcon>
        <Link href="https://www.banhkemnhatrangtina.com/">
          <a className="footer-link" target="_blank">
            https://www.banhkemnhatrangtina.com/
          </a>
        </Link>
      </li>
    </FooterContactListStyles>
  );
};

export default FooterContactList;
