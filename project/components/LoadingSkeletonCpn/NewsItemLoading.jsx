/* eslint-disable @next/next/no-img-element */
import React, {  } from "react";
import styled from "styled-components";
import LoadingSkeleton from "../../../shared/hooks/loading-skeletion/LoadingSkeleton";


const NewsItemStyles = styled.div`
  padding: 16px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  .tag {
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px;
    background-color: ${(props) => props.theme.primaryColor};
    z-index: 2;
    font-weight: 500;
    color: #fff;
  }
  &:hover {
    .news-image {
      img {
        transform: scale(1.1);
      }
    }
  }
  .news-image-link {
    border-radius: inherit;
  }
  .news-image {
    border-radius: inherit;
    overflow: hidden;
    img {
      transition: linear 0.25s;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }

  .new-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .news-title {
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    transition: linear 0.1s;
    &:hover {
      color: ${(props) => props.theme.primaryColor};
      text-decoration: underline;
    }
  }

  .date {
  }
  .news-text {
    display:-webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
  .news-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .news-btn {
    margin-top: auto;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.95)
      ),
      ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
    transition: linear 0.2s;
    &:hover {
      .news-detail-icon {
        left: 8px;
      }
    }
  }
  .news-detail-link {
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .news-detail-icon {
    position: relative;
    left: 0;
    transition: linear 0.1s;
  }

  .news-image {
    height: 200px;
  }

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      gap: 12px;
      .news-image {
        width: 100%;
        height: 100%;
      }
    }
    .news-image-link {
      width: 50%;
    }
    .news-image {
      width: 100%;
      height: 100%;
      flex-shrink: initial;
    }
    .new-content {
      gap: 8px;
    }

    .news-text {
    }
    .news-body {
      width: 60%;
      gap: 8px;
    }
    .news-title {
    }
  }
`;

const NewsItemLoading = () => {
  return (
    <NewsItemStyles >
      <div className="news-image-link">
        <div className={`news-image `}>
          <LoadingSkeleton height="200px"></LoadingSkeleton>
        </div>
      </div>
      <div className="news-body">
        <div className="date">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </div>
        <div className="new-content">
          <div className="news-title">
            <LoadingSkeleton height="20px"></LoadingSkeleton>
          </div>
          <div className="news-text">
            <LoadingSkeleton height="20px"></LoadingSkeleton>
          </div>
        </div>
        <div>
          <LoadingSkeleton height="40px"></LoadingSkeleton>
        </div>
      </div>
    </NewsItemStyles>
  );
};

export default NewsItemLoading;
