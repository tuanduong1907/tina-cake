import React from "react";
import styled from "styled-components";
import AppPagination from "../../../controls/app-pagination/AppPagination";
import TableListPost from "../../table/TableListPost";

const AdminPostLayoutStyles = styled.section`
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    &{
      margin-inline: 0;
    }
  }
`;

const AdminPostLayout = () => {
  return (
    <AdminPostLayoutStyles className="container-admin">
      <TableListPost></TableListPost>
    </AdminPostLayoutStyles>
  );
};

export default AdminPostLayout;
