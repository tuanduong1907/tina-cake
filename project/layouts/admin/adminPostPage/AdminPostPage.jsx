import React from "react";
import HeadSeo from "../../../components/SEO";
import AdminLayoutTemplate from "../../../templates/AdminLayoutTemplate";
import AdminPostLayout from "./AdminPostLayout";

const AdminPostPage = () => {
  return (
    <>
      <HeadSeo title="Bài viết | Tina Cake" />
      <AdminLayoutTemplate heading="Quản lý bài viết" writePost={true}>
        <AdminPostLayout /> 
      </AdminLayoutTemplate>
    </>
  );
};

export default AdminPostPage;
