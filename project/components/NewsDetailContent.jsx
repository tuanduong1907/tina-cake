/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import {
  text16,
  text24,
  text26,
  text34,
} from "../../shared/utils/mixin-styled";

const NewsDetailContentStyles = styled.div`
  .news-detail-image {
    height: 486px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    margin-bottom: 32px;
  }
  .news-detail-image-sub {
    height: 329px;
    width: 100%;
    margin-bottom: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .news-detail-heading {
    ${text34}
    margin-bottom: 8px;
  }
  .news-detail-text {
    margin-bottom: 20px;
    ${text16}
    line-height: 1.6;
  }
  .news-detail-title {
    margin-bottom: 16px;
    ${text26}
  }

  /* Responsive */
  /* Mobile */
  @media only screen and (max-width: 739px) {
    .news-detail-heading {
      ${text24}
      margin-bottom: 8px;
    }
    .news-detail-image {
      height: 300px;
    }
    .news-detail-image-sub {
      height: 200px;
    }
  }
`;

const NewsDetailContent = ({ ...props }) => {
  return (
    <NewsDetailContentStyles {...props}>
      <div className="news-detail-image">
        <img
          src="https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
      </div>
      <h1 className="news-detail-heading">CARAMEL CHOCOLATE CAKE MOUSSE</h1>
      <p className="news-detail-text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet..
      </p>
      <p className="news-detail-text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet..Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet..
      </p>
      <h2 className="news-detail-title">1.Amet minim mollit non deserunt</h2>
      <div className="news-detail-image-sub">
        <img
          src="https://images.unsplash.com/photo-1602663491496-73f07481dbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <p className="news-detail-text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet..
      </p>
      <p className="news-detail-text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet..Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet..
      </p>
      <h2 className="news-detail-title">2.Amet minim mollit non deserunt</h2>
      <div className="news-detail-image-sub">
        <img
          src="https://images.unsplash.com/photo-1602663491496-73f07481dbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <p className="news-detail-text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet..
      </p>
      <p className="news-detail-text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet..Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet..
      </p>
    </NewsDetailContentStyles>
  );
};

export default NewsDetailContent;
