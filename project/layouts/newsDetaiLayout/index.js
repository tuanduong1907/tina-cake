import React from "react";
import HeadSeo from "../../components/SEO";
import styled from "styled-components";
import NewsDetailContent from "../../components/NewsDetailContent";
import NewsDetailRelated from "../../components/NewsDetailRelated";
import { newsListData } from "../../../data/newsListData";

const NewsDetailPageStyles = styled.section`
  display: flex;
  margin-top: 40px;
  gap: 40px;
  .news-detail-content {
    width: 70%;
  }
  .news-detail-releated-wrap {
    flex: 1;
  }
  /* Responsive */
  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 20px;
    .news-detail-content {
      width: 100%;
    }
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
  }
`;

const NewsDetailPage = () => {
  return (
    <>
      <HeadSeo />
      <NewsDetailPageStyles className="container py-layout">
        <NewsDetailContent className="news-detail-content"></NewsDetailContent>
        <div className="news-detail-releated-wrap">
          <NewsDetailRelated
            data={newsListData}
            className="news-detail-releated"
          ></NewsDetailRelated>
        </div>
      </NewsDetailPageStyles>
    </>
  );
};

export default NewsDetailPage;
