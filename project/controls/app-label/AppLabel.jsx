import React from "react";
import styled from "styled-components";
import { text16 } from "../../../shared/utils/mixin-styled";

const AppLabelStyles = styled.label`
  ${text16}
  font-weight: 500;
  align-items: flex-start;
`;

const AppLabel = ({ htmlFor = "", children, ...props }) => {
  return (
    <AppLabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </AppLabelStyles>
  );
};

export default AppLabel;
