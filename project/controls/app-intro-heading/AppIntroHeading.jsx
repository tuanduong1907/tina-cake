import React from "react";
import styled from "styled-components";
import {
  text14,
  text16,
  text18,
  text26,
} from "../../../shared/utils/mixin-styled";

const AppIntroHeadingStyles = styled.div`
  width: 633px;
  text-align: center;
  margin-inline: auto;
  margin-bottom: 40px;
  .title {
    font-size: 44px;
    line-height: 1.4;
    font-weight: 700;
  }
  .desc {
    width: 620px;
    margin-inline: auto;
    ${text18}
  }

  /* Responsive */

  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      width: 100%;
      margin-bottom: 20px;
    }
    .title {
      ${text26};
      margin-bottom: 12px;
      text-align: left;
    }
    .desc {
      width: 100%;
      ${text16}
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

const AppIntroHeading = ({ title = "", desc }) => {
  return (
    <AppIntroHeadingStyles>
      <h2 className="title">{title}</h2>
      {desc && <p className="desc">{desc}</p>}
    </AppIntroHeadingStyles>
  );
};

export default AppIntroHeading;
