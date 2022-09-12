import React from "react";
import styled from "styled-components";
import { text16 } from "../../../shared/utils/mixin-styled";

const AppButtonAdminStyles = styled.button`
  cursor: pointer;
  line-height: 1;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${text16}
  font-weight: 600;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 12px;
  border: none;
  color: #ffff;
  transition: all 0.2s linear;
  &:hover {
    background-color: ${(props) => props.theme.darkPrimaryColor};
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const AppButtonAdmin = ({
  type = "button",
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <AppButtonAdminStyles type={type} onClick={onClick} {...props}>
      {children}
    </AppButtonAdminStyles>
  );
};

export default AppButtonAdmin;
