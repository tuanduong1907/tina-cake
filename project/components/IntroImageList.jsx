/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { introImageListData } from "../../data/introImageListData";
import AppIntroHeading from "../controls/app-intro-heading/AppIntroHeading";
import AppIntroText from "../controls/app-intro-text/AppIntroText";

const IntroImageListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  .intro-image-item {
    width: 100%;
    height: 469px;
    overflow: hidden;
    border-radius: 16px;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: linear 0.25s;
      border-radius: inherit;
    }
  }

  /* Responsive */

  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    & {
      gap: 20px;
    }
    .intro-image-item {
      height: 250px;
    }
  }

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const IntroImageList = ({ data }) => {
  return (
    <>
      <AppIntroHeading title="Đội ngũ nhân viên làm bánh đam mê, chuyên nghiệp"></AppIntroHeading>
      <AppIntroText>
        <p>
          Là đầu bếp, chúng tôi hiểu để đảm bảo độ ngon và bảo quản thật tốt,
          bánh không thể thiếu những phụ gia đi kèm. Tuy nhiên, chúng tôi lại đi
          ngược quan điểm đó. Chúng tôi làm bánh với niềm đam mê, sự nhiệt tình,
          tình yêu và trách nhiệm như bản thân chúng tôi, một người cha, mẹ làm
          bánh cho chính con cái và người nhà của mình. Vì thế, từ lúc thành lập
          đến nay, Tina vẫn luôn giữ vững lập trường và phong cách bánh của
          riêng mình, chính là “Home style baking” – dung hòa giữa phong cách
          làm bánh gia đình nhưng vẫn giữ công thức Âu thuần túy theo tiêu chuẩn
          khách sạn.
        </p>
        <p>
          Chúng tôi – một gia đình bắt đầu một ngày nướng, trộn vào buổi sáng,
          trang trí vào buổi chiều. Từng giai đoạn của một ổ bánh đều được tuân
          theo một quy trình và thời gian yêu cầu nghiêm túc theo từng loại bánh
          khác nhau, không thiếu từ khâu nướng trộn, hong, ủ, giữ lạnh trước giờ
          giao khách… Chính vì thế, để có một chiếc bánh sinh nhật, bạn cần đặt
          trước 48g, hay một chiếc bánh nghệ thuật sáng tạo tỉ mỉ hơn, bạn cần
          đặt trước 3-7 ngày để book lịch.
        </p>
      </AppIntroText>
      <IntroImageListStyles>
        {introImageListData.length > 0 &&
          introImageListData.map((item) => (
            <div key={item.id} className="intro-image-item">
              <img src={item.image} alt="" />
            </div>
          ))}
      </IntroImageListStyles>
      <AppIntroText>
        <p>
          Đối với cuộc sống hiện đại, tất cả mọi dịch vụ đều được công nghiệp
          hóa, và giữa hàng trăm tiệm bánh công nghiệp khác, chúng tôi – những
          người làm bánh handmade bỏ thật nhiều công sức, thời gian, và tâm
          huyết. Nhưng đáp lại đó, những lời khen, động viên của khách hàng luôn
          là động lực để chúng tôi tiếp tục duy trì phương pháp thủ công này,
          với niềm tin rằng ” mỗi ổ bánh của khách, là một tác phẩm của chính
          mình”. Hy vọng một ngày không xa, khi xu hướng Slow Food nở rộ tại
          Việt Nam, những người “làm chiếc bánh xanh:” như chúng tôi sẽ tiếp tục
          tồn tại và phát triển hơn nữa.
        </p>
      </AppIntroText>
    </>
  );
};

export default IntroImageList;
