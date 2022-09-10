import React from "react";
import styled from "styled-components";
import { text16 } from "../../../shared/utils/mixin-styled";

const AppIntroTextStyles = styled.div`
  p {
    ${text16}
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const AppIntroText = ({ children }) => {
  return <AppIntroTextStyles>{children}</AppIntroTextStyles>;
};

export default AppIntroText;
