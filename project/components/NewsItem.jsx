/* eslint-disable @next/next/no-img-element */
import { collection, onSnapshot, query } from "firebase/firestore";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import {
  text14,
  text16,
  text18,
  text20,
} from "../../shared/utils/mixin-styled";
import AppButton from "../controls/app-button/AppButton";
import { db } from "../firebase/firebase-config";

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
    ${text14}
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
    ${text20}
    display:-webkit-box;
    -webkit-line-clamp: 1;
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
    ${text14}
  }
  .news-text {
    ${text18}
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

  /* Tablet: width >= 740px and width < 1024px */
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    .news-text {
      ${text16}
    }
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
      width: 40%;
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
      ${text16}
    }
    .news-body {
      width: 60%;
      gap: 8px;
    }
  }
`;

const NewsItem = ({
  classNameImage,
  image,
  content,
  slug,
  title,
  category,
  date,
  ...props
}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const colRefCategories = collection(db, "categories");
    const queries = query(colRefCategories);
    onSnapshot(queries, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
    });
  }, []);
  return (
    <NewsItemStyles {...props}>
      <div className="tag">
        {categories?.map((categoryItem) => (
          <Fragment key={categoryItem.id}>
            {categoryItem.id == category && categoryItem.value}
          </Fragment>
        ))}
      </div>
      <Link href={`/${slug}`}>
        <a className="news-image-link">
          <div className={`news-image ${classNameImage}`}>
            <img src={image} alt={title} />
          </div>
        </a>
      </Link>
      <div className="news-body">
        <div className="date">{date}</div>
        <div className="new-content">
          <Link href={`/${slug}`}>
            <a>
              <h4 className="news-title">{title}</h4>
            </a>
          </Link>
          <p className="news-text">{title}</p>
        </div>
        <div>
          <AppButton className="news-btn">
            <Link href={`/${slug}`}>
              <a className="news-detail-link">
                Chi tiết{" "}
                <svg
                  className="news-detail-icon"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5253 4.229L9.58469 5.17402L11.7648 7.34399L2.69482 7.35312L2.69617 8.68645L11.7413 8.67735L9.59791 10.8308L10.5429 11.7714L14.3053 7.9914L10.5253 4.229Z"
                    fill="#52BD94"
                  />
                </svg>
              </a>
            </Link>
          </AppButton>
        </div>
      </div>
    </NewsItemStyles>
  );
};

export default NewsItem;
