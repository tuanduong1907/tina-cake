/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { newsListData } from "../../../data/newsListData";
import NewsList from "../../components/NewsList";
import HeadSeo from "../../components/SEO";
import AppHeading from "../../controls/app-heading/AppHeading";
import styled from "styled-components";
import AppSearchForm from "../../controls/app-search-form/AppSearchForm";
import { useState } from "react";
import ReactPaginate from "react-paginate";

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
    .pagination-wrap {
      flex-wrap: wrap;
      li {
        a {
          width: 30px !important;
          height: 30px !important;
        }
      }
    }
  }
  .pagination-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 40px;
    .next {
      display: none;
    }
    .previous {
      display: none;
    }
    li {
      &.selected {
        background-color: ${(props) => props.theme.primaryColor};
        color: #ffff;
        border-radius: 100rem;
      }
      a {
        display: block;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100rem;
        cursor: pointer;
        transition: linear 0.2s;
        &:hover {
          background-color: rgba(82, 189, 148, 0.5);
          color: #fff;
        }
      }
    }
  }
`;

const NewsListPage = () => {
  const [value, setValue] = useState("");
  const [activeInput, setActiveInput] = useState(false);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(newsListData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(newsListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, newsListData]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newsListData.length;
    setItemOffset(newOffset);
  };

  // Search Filter News
  const dataFilter = (text) => {
    const data = newsListData?.filter((item) =>
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
      <HeadSeo title="Danh sách bài viết | Tina Cake" />
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
        <NewsList data={dataFilter(value) || currentItems}></NewsList>
        <ReactPaginate
          className="pagination-wrap"
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </NewsListPageStyles>
    </>
  );
};

export default NewsListPage;
