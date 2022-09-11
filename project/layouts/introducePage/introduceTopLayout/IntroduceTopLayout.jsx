/* eslint-disable @next/next/no-img-element */
import React from "react";
import FooterContactList from "../../../components/FooterContactList";
import styled from "styled-components";
import AppIntroHeading from "../../../controls/app-intro-heading/AppIntroHeading";
import AppIntroText from "../../../controls/app-intro-text/AppIntroText";

const IntroTopLayoutStyles = styled.section`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
  .intro-image {
    height: 469px;
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }
  .intro-contact {
    flex: 1;
  }
  .intro-contact-image {
    height: 252px;
    object-fit: cover;
    border-radius: 16px;
    width: 100%;
    margin-bottom: 40px;
  }
  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 20px !important;
    }
    .intro-contact-image {
      margin-bottom: 20px;
    }
  }
`;

const IntroduceTopLayout = ({ className = "" }) => {
  return (
    <section className={`${className}`}>
      <AppIntroHeading
        title="BÁNH KEM NHA TRANG TINA "
        desc=""
      ></AppIntroHeading>
      <AppIntroText>
        <p>
          <strong>
            Tiệm bánh sinh nhật - bánh cưới Nha Trang chuyên bán sẵn, nhận đặt,
            làm tươi và giao nhanh các loại bánh kem sinh nhật, thôi nôi. Nhận
            đặt các loại bánh Âu sinh nhật, bánh kem sinh nhật fondant và
            cupcake tại Nha Trang
          </strong>
        </p>
        <p>
          <strong>Tina</strong> là một tiệm bánh ngọt gia đình chuyên các loại
          bánh Âu được hình thành từ năm 2013 dưới tên{" "}
          <strong>Tina Cafeteria</strong>, kinh doanh online từ năm 2011.{" "}
          <strong>Tina Cake</strong> nguyên thủy là một tiệm Cafe Bánh chuyên các
          loại bánh Âu, bánh Cupcakes, các món tráng miệng được phục vụ theo mô
          hình Dessert Plate. Đội ngũ chúng tôi xuất thân từ những đầu bếp khách
          sạn, mong muốn đem các món ăn hương vị Âu về với giới trẻ thành phố
          Nha Trang một cách gần gũi nhất.
        </p>
      </AppIntroText>
      <IntroTopLayoutStyles>
        <div className="intro-image">
          <img
            src="https://media.istockphoto.com/photos/baker-taking-strawberry-cake-from-store-counter-picture-id1412161845?b=1&k=20&m=1412161845&s=170667a&w=0&h=rKB_6SGj8PuptOEurZiMJQXZpdhvfyHhwwBstA2R0Yc="
            alt=""
          />
        </div>
        <div className="intro-contact">
          <img
            src="https://images.unsplash.com/photo-1603664113651-2f4fde639823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80"
            alt=""
            className="intro-contact-image"
          />
          <FooterContactList></FooterContactList>
        </div>
      </IntroTopLayoutStyles>
      <AppIntroText>
        <p>
          Từ năm 2014, khi thị trường bánh ngọt trong thành phố bắt đầu bão hòa
          vì xu thế làm bánh online của các bạn trẻ nghiệp dư, chúng tôi nỗ lực
          hơn vào mảng bánh sự kiện, với phong cách riêng, hương vị riêng. Và
          đây chính là bước ngoặc lớn, mở ra một loại hình kinh doanh bánh sự
          kiện hoàn toàn khác biệt với thị trường lúc bấy giờ: BÁNH TƯƠI, THỰC
          HIỆN THEO TỪNG ORDER. Cho đến ngày hôm nay chúng tôi vẫn giữ nguyên
          quan điểm kinh doanh không đặt lợi nhuận lên hàng đầu như vậy.
        </p>
        <img
          src="https://images.unsplash.com/photo-1532444482250-cb75e6bbd1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </AppIntroText>
    </section>
  );
};

export default IntroduceTopLayout;
