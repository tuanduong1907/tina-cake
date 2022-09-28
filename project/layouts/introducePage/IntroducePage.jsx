/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import GoogleMap from "../../components/GoogleMap";
import IntroImageList from "../../components/IntroImageList";
import IntroduceTopLayout from "./introduceTopLayout/IntroduceTopLayout";
import HeadSeo from "../../components/SEO/index.js";

const IntroducePageStyles = styled.section`
  margin-top: 40px;
  padding-top: 80px;
  .intro-top-layout {
    margin-bottom: 40px;
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      padding-top: 45px;
    }
  }
`;

const IntroducePage = () => {
  return (
    <>
      <HeadSeo title="Giới thiệu | Tina Cake" />

      <IntroducePageStyles>
        <div className="container">
          <IntroduceTopLayout className="intro-top-layout"></IntroduceTopLayout>
          <IntroImageList></IntroImageList>
          <GoogleMap></GoogleMap>
        </div>
      </IntroducePageStyles>
    </>
  );
};

export default IntroducePage;
