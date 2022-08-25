import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListStyles = styled.div``;

const NewsList = ({ ...props }) => {
  return (
    <NewsListStyles {...props}>
      <NewsItem className="news-item"></NewsItem>
      <NewsItem className="news-item"></NewsItem>
      <NewsItem className="news-item"></NewsItem>
    </NewsListStyles>
  );
};

export default NewsList;
