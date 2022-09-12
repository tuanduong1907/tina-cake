import React from "react";
import styled from "styled-components";
import { text16 } from "../../../shared/utils/mixin-styled";
import AppLoadingSpinner from "../app-loading/AppLoadingSpinner";

const AppButtonAdminStyles = styled.button`
  cursor: pointer;
  line-height: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "48px"};
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
  const { isLoading } = props;
  const child = !!isLoading ? (
    <AppLoadingSpinner></AppLoadingSpinner>
  ) : (
    children
  );
  return (
    <AppButtonAdminStyles type={type} onClick={onClick} {...props}>
      {child}
    </AppButtonAdminStyles>
  );
};

export default AppButtonAdmin;
