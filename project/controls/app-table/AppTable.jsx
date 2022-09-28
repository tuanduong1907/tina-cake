import React from "react";
import styled from "styled-components";
import { text16 } from "../../../shared/utils/mixin-styled";

const AppTableStyles = styled.div`
  margin-top: 32px;
  border-radius: 8px;
  overflow-x: auto;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    color: #ffff;
    background-color: ${(props) => props.theme.primaryColor};
  }
  tbody {
    ${text16}

    tr {
      border-bottom: 1px solid #e5e5e5;
      &:last-child {
        border-bottom: none;
      }
    }
  }
  th {
    text-align: left;
    white-space: nowrap;
  }

  th,
  td {
    vertical-align: middle;
  }
  th {
    padding: 20px 30px;
    font-weight: 600;
    text-align: left;
  }
  td {
    padding: 15px 30px;
    font-weight: 500;
  }
`;

const AppTable = ({ children }) => {
  return (
    <AppTableStyles>
      <table>{children}</table>
    </AppTableStyles>
  );
};

export default AppTable;
