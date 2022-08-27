import Link from "next/link";
import styled from "styled-components";
import { text16, text20 } from "../../../shared/utils/mixin-styled";
import SvgEmailIcon from "../../icons/EmailIcon";
import SvgLocationIcon from "../../icons/LocationIcon";
import SvgPhoneIcon from "../../icons/PhoneIcon";
import SvgWebIcon from "../../icons/WebIcon";

// styles
const FooterStyles = styled.footer`
  .footer-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .footer-title {
    ${text20}
    margin-bottom: 20px;
  }
  .footer-info-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .footer-info-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .footer-icon {
    height: 16px;
    flex-shrink: 0;
  }
  .footer-link {
    transition: linear 0.1s;
    ${text16}
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
  .footer-text {
    line-height: 1.4;
  }
  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    .footer-list {
      grid-template-columns: repeat(1, 1fr);
    }
    .footer-wrap {
      padding-block: 40px;
    }
    .footer-title {
      margin-bottom: 14px;
    }
  }
`;

// end styles

export const Footer = () => {
  return (
    <FooterStyles className="FooterStyles">
      <div className="container py-layout footer-wrap">
        <div className="footer-list">
          <div className="footer-item">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbanhkemnhatrangtina&tabs=timeline&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="300"
              height="130"
              style={{ border: "none", overFlow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="footer-item">
            <h3 className="footer-title">Bánh Kem Nha Trang Tina</h3>
            <ul className="footer-info-list">
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
                <SvgWebIcon className="footer-icon"></SvgWebIcon>
                <Link href="https://www.banhkemnhatrangtina.com/">
                  <a className="footer-link" target="_blank">
                    https://www.banhkemnhatrangtina.com/
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h3 className="footer-title">Về chúng tôi</h3>
            <p className="footer-text">
              Bánh Kem Sinh Nhật Nha Trang nhận đặt và làm tươi các loại bánh
              kem nhanh trong vòng 1-8 giờ nhận đơn. Mẫu mã hiện đại, đáp ứng
              nhu cầu của những khách hàng cần bánh gấp, đòi hỏi cao về chất
              lượng bánh và kem (mới ra lò), đặc biệt là khách du lịch.
            </p>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};
