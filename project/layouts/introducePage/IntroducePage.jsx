/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { text48 } from "../../../shared/utils/mixin-styled";
import FooterContactList from "../../components/FooterContactList";
import AppIntroHeading from "../../controls/app-intro-heading/AppIntroHeading";
import IntroduceTopLayout from "./introduceTopLayout/IntroduceTopLayout";

const IntroducePageStyles = styled.section`
  margin-top: 40px;
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
        <IntroduceTopLayout></IntroduceTopLayout>
      </div>
    </IntroducePageStyles>
  );
};

export default IntroducePage;
