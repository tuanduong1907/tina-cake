/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import HeadSeo from "../../components/SEO";
import styled from "styled-components";
import NewsDetailRelated from "../../components/NewsDetailRelated";
import { newsListData } from "../../../data/newsListData";
import { db } from "../../firebase/firebase-config";
import parse from "html-react-parser";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { text34 } from "../../../shared/utils/mixin-styled";

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
  .news-detai-img {
    margin-bottom: 16px;
  }
  .news-detail-title {
    ${text34}
    font-weight: 700;
    margin-bottom: 16px;
  }
  .news-detail-date {
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${(props) => props.theme.darkGrayColor};
    margin-bottom: 16px;
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

const NewsDetailPage = ({ slug }) => {
  const [postInfo, setPostInfo] = useState({});
  console.log("postInfo", postInfo);
  useEffect(() => {
    async function fetchData() {
      if (!slug) return null;
      const colRef = query(collection(db, "posts"), where("slug", "==", slug));
      onSnapshot(colRef, (snapshot) => {
        snapshot.forEach((doc) => {
          doc.data() && setPostInfo(doc.data());
        });
      });
    }
    fetchData();
  }, [slug]);
  if (!postInfo.title) return <>Not Found</>;
  return (
    <>
      <HeadSeo />
      <NewsDetailPageStyles className="container py-layout">
        <div className="news-detail-content entry-content">
          <img
            className="news-detai-img"
            src={postInfo.image}
            alt={postInfo.title}
          />
          <div className="news-detail-date">
            Ngày đăng:
            <span>
              {new Date(postInfo?.createAt?.seconds * 1000).toLocaleDateString(
                "vi-VI"
              )}
            </span>
          </div>
          <h1 className="news-detail-title">{postInfo.title}</h1>

          {parse(postInfo.content || "")}
        </div>
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
