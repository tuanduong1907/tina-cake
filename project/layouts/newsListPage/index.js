import React from "react";
import { newsListData } from "../../../data/newsListData";
import NewsList from "../../components/NewsList";
import HeadSeo from "../../components/SEO";
import AppHeading from "../../controls/app-heading/AppHeading";
import styled from "styled-components";
import AppSearchForm from "../../controls/app-search-form/AppSearchForm";
import { useState } from "react";

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
  const [value, setValue] = useState("");
  const [activeInput, setActiveInput] = useState(false);
  console.log("activeInput", activeInput);
  const dataFilter = (text) => {
    const data = newsListData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    if (text) {
      return data;
    } else {
      return null;
    }
  };
  return (
    <>
      <HeadSeo />
      <NewsListPageStyles className={`container py-layout `}>
        <div className="new-list-header">
          <AppHeading className="heading">Danh sách bài viết</AppHeading>
          <AppSearchForm
            className={`input-filter ${activeInput ? "active" : ""}`}
            value={value}
            onFocus={() => setActiveInput(true)}
            onBlur={() => setActiveInput(false)}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Tìm kiếm bài viết..."
          ></AppSearchForm>
        </div>
        <NewsList data={dataFilter(value) || newsListData}></NewsList>
      </NewsListPageStyles>
    </>
  );
};

export default NewsListPage;
