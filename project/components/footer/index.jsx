import Link from "next/link";
import styled from "styled-components";
import { text14, text20 } from "../../../shared/utils/mixin-styled";

import FooterContactList from "../FooterContactList";

// styles
const FooterStyles = styled.footer`
  background-color: #ffff;
  border-top: 1px solid #e5e5e5;
  .footer-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding-bottom: 40px;
    border-bottom: 1px solid ${(props) => props.theme.textColor};
  }
  .footer-title {
    ${text20}
    margin-bottom: 20px;
  }
  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    gap: 12px;
  }
  .copyright-text {
    text-align: center;
    ${text14}
    a {
      transition: linear 0.1s;
      &:hover {
        color: ${(props) => props.theme.primaryColor};
      }
    }
    span {
      font-weight: 700;
    }
  }
  .footer-text {
    line-height: 1.6;
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

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      padding-bottom: 40px;
    }
    .copyright {
      flex-direction: column;
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
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="footer-item">
            <h3 className="footer-title">B??nh Kem Nha Trang Tina</h3>
            <FooterContactList></FooterContactList>
          </div>
          <div className="footer-item">
            <h3 className="footer-title">V??? ch??ng t??i</h3>
            <p className="footer-text">
              B??nh Kem Sinh Nh???t Nha Trang nh???n ?????t v?? l??m t????i c??c lo???i b??nh
              kem nhanh trong v??ng 1-8 gi??? nh???n ????n. M???u m?? hi???n ?????i, ????p ???ng
              nhu c???u c???a nh???ng kh??ch h??ng c???n b??nh g???p, ????i h???i cao v??? ch???t
              l?????ng b??nh v?? kem (m???i ra l??), ?????c bi???t l?? kh??ch du l???ch.
            </p>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-text">
            Copyright ?? 2022
            <Link href="">
              <a> B??nh Kem Nha Trang Tina Cake</a>
            </Link>
          </div>
          <div className="copyright-text">
            Thi???t k??? v?? ph??t tri???n b???i{" "}
            <Link href="https://genztech.vn/">
              <a target="_blank">
                <span> GenZ Tech Team</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};
