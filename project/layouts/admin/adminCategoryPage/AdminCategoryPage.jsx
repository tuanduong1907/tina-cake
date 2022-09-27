import React from "react";
import HeadSeo from "../../../components/SEO";
import AdminLayoutTemplate from "../../../templates/AdminLayoutTemplate";

const AdminCategoryPage = () => {
  return (
    <>
      <HeadSeo title="Danh mục | Tina Cake" />
      <AdminLayoutTemplate heading="Danh mục">
        <div>Danh mục</div>
      </AdminLayoutTemplate>
    </>
  );
};

export default AdminCategoryPage;
