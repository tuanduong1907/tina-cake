import React from "react";
import HeadSeo from "../../../components/SEO";
import AdminLayoutTemplate from "../../../templates/AdminLayoutTemplate";
import AdminAddNewPostForm from "./AdminAddNewPostForm";

const AdminAddNewPostPage = () => {
  return (
    <>
      <HeadSeo title="Thêm bài viết mới | Tina Cake" />
      <AdminLayoutTemplate heading="Thêm bài viết mới" writePost={false}>
      <AdminAddNewPostForm></AdminAddNewPostForm>
      </AdminLayoutTemplate>
    </>
  );
};

export default AdminAddNewPostPage;
