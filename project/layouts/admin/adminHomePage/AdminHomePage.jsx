import React from "react";
import HeadSeo from "../../../components/SEO";
import AdminLayoutTemplate from "../../../templates/AdminLayoutTemplate";

const AdminHomePage = () => {
  return (
    <>
      <HeadSeo title="Dashboard | Tina Cake" />
      <AdminLayoutTemplate heading="Dashboard">
        <div>Dashboard</div>
      </AdminLayoutTemplate>
    </>
  );
};

export default AdminHomePage;
