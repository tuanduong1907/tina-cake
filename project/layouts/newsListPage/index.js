import React from "react";
import { newsListData } from "../../../data/newsListData";
import NewsList from "../../components/NewsList";
import HeadSeo from "../../components/SEO";
import AppHeading from "../../controls/app-heading/AppHeading";
import styled from "styled-components";
import AppSearchForm from "../../controls/app-search-form/AppSearchForm";

const NewsListPageStyles = styled.section`
  margin-top: 40px;
  .new-list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    .new-list-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 20px;
    }
  }
`;

const NewsListPage = () => {
  return (
    <>
      <HeadSeo />
      <NewsListPageStyles className="container py-layout">
        <div className="new-list-header">
          <AppHeading className="heading">Danh sách bài viết</AppHeading>
          <AppSearchForm placeholder="Tìm kiếm bài viết..."></AppSearchForm>
        </div>
        <NewsList data={newsListData}></NewsList>
      </NewsListPageStyles>
    </>
  );
};

export default NewsListPage;
