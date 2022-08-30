
import React from "react";
import NewsDetailPage from "../../project/layouts/newsDetaiLayout";
import { Footer } from "../../project/components/footer";
import { Header } from "../../project/components/header";

export default function index() {
  return (
    <>
      <Header></Header>
      <NewsDetailPage></NewsDetailPage>
      <Footer></Footer>
    </>
  );
}

