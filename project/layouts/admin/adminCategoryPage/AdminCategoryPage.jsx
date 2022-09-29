import React from "react";
import HeadSeo from "../../../components/SEO";
import AdminLayoutTemplate from "../../../templates/AdminLayoutTemplate";
import styled from "styled-components";
import { text36 } from "../../../../shared/utils/mixin-styled";

const CommingSoonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${text36};
  font-weight: 700;
  color: ${props => props.theme.primaryColor};
`;

const AdminCategoryPage = () => {
  return (
    <>
      <HeadSeo title="Danh mục | Tina Cake" />
      <AdminLayoutTemplate heading="Danh mục">
        <CommingSoonStyles>Comming soon...</CommingSoonStyles>
      </AdminLayoutTemplate>
    </>
  );
};

export default AdminCategoryPage;
