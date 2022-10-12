import React from "react";
import HeadSeo from "../../../components/SEO";
import styled from "styled-components";
import { text36 } from "../../../../shared/utils/mixin-styled";
import AdminPostLayout from "../adminPostPage/AdminPostLayout";
import AdminLayoutTemplate from "../../../templates/AdminLayoutTemplate";
import TableListBanner from "../../table/TableListBanner";

const CommingSoonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${text36};
  font-weight: 700;
  color: ${(props) => props.theme.primaryColor};
`;

const AdminBannerPage = () => {
  return (
    <>
      <HeadSeo title="Danh mục | Tina Cake" />
      <AdminLayoutTemplate heading="Quản lý banner" writePost={true}>
        <TableListBanner />
      </AdminLayoutTemplate>
    </>
  );
};

export default AdminBannerPage;
