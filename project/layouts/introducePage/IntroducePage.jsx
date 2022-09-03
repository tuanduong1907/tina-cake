/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import IntroImageList from "../../components/IntroImageList";
import AppIntroHeading from "../../controls/app-intro-heading/AppIntroHeading";
import IntroduceTopLayout from "./introduceTopLayout/IntroduceTopLayout";

const IntroducePageStyles = styled.section`
  margin-top: 40px;
  .intro-top-layout {
    margin-bottom: 84px;
  }
`;

const IntroducePage = () => {
  return (
    <IntroducePageStyles>
      <div className="container py-layout">
        <AppIntroHeading
          title="Nhận làm bánh kem các ngày Lễ, Sinh nhật, sự kiện, ..."
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.."
        ></AppIntroHeading>
        <IntroduceTopLayout className="intro-top-layout"></IntroduceTopLayout>
        <AppIntroHeading title="Đội ngũ nhân viên làm bánh đam mê, chuyên nghiệp"></AppIntroHeading>
        <IntroImageList></IntroImageList>
      </div>
    </IntroducePageStyles>
  );
};

export default IntroducePage;
