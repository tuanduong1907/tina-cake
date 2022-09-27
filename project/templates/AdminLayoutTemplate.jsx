import React from "react";
import AdminNavigation from "../components/admin/AdminNavigation";
import BodyLayout from "../layouts/admin/BodyLayout";

import styled from "styled-components";

const AdminLayoutTemplateStyles = styled.div`
  display: flex;
`;

const AdminLayoutTemplate = ({ heading, children }) => {
  return (
    <AdminLayoutTemplateStyles>
      <AdminNavigation />
      <BodyLayout heading={heading}>{children}</BodyLayout>
    </AdminLayoutTemplateStyles>
  );
};

export default AdminLayoutTemplate;
