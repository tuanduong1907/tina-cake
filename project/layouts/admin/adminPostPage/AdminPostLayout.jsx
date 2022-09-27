import React from "react";
import styled from "styled-components";
import AppPagination from "../../../controls/app-pagination/AppPagination";
import TableListPost from "../../table/TableListPost";

const AdminPostLayoutStyles = styled.section`
  .pagination {
    margin-top: 16px;
  }
`;

const AdminPostLayout = () => {
  return (
    <AdminPostLayoutStyles className="container-admin">
      <TableListPost></TableListPost>
      <AppPagination className="pagination"></AppPagination>
    </AdminPostLayoutStyles>
  );
};

export default AdminPostLayout;
