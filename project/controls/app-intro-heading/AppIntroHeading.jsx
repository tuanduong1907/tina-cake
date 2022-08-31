import React from "react";
import styled from "styled-components";
import { text18, text40 } from "../../../shared/utils/mixin-styled";

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
