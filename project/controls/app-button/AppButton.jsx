import React from "react";
import styled from "styled-components";
import { text16 } from "../../../shared/utils/mixin-styled";

const ButtonStyles = styled.button`
  height: 40px;
  padding-inline: 16px;
  border-radius: 100rem;
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  ${text16};
  font-weight: 500;
  color: #fff;
  min-width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`;
const AppButton = ({ children, ...props }) => {
  return <ButtonStyles {...props}>{children}</ButtonStyles>;
};

export default AppButton;
