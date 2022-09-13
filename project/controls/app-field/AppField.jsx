import React from "react";
import styled from "styled-components";

const AppFieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const AppField = ({ children }) => {
  return <AppFieldStyles>{children}</AppFieldStyles>;
};

export default AppField;
