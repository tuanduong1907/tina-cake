import React from "react";
import styled from "styled-components";
import { text16, text26 } from "../../../shared/utils/mixin-styled";

const AppIntroHeadingStyles = styled.div`
  text-align: center;
  margin-inline: auto;
  margin-bottom: 20px;
  .title {
    font-size: 44px;
    line-height: 1.4;
    font-weight: 700;
  }
  .desc {
    width: 640px;
    margin-inline: auto;
    ${text16};
    font-weight: 600;
  }
  /* Responsive */

  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      margin-bottom: 20px;
    }
    .title {
      ${text26};
      width: 100%;
      margin-bottom: 12px;
      text-align: left;
    }
  }
  /* Tablet: width >= 740px and width < 1024px */
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    .title {
      margin-bottom: 12px;
    }
  }
`;

const AppIntroHeading = ({ title = "", desc = "" }) => {
  return (
    <AppIntroHeadingStyles>
      <h2 className="title">{title}</h2>
      {desc && <p className="desc">{desc}</p>}
    </AppIntroHeadingStyles>
  );
};

export default AppIntroHeading;
