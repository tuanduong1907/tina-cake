import React from "react";
import styled from "styled-components";

const AppFieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const AppField = ({ children, ...props }) => {
  return <AppFieldStyles {...props}>{children}</AppFieldStyles>;
};

export default AppField;
