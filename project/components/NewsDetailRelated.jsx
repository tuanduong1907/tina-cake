import Link from "next/link";
import React, { Fragment } from "react";
import styled from "styled-components";
import { text16, text30 } from "../../shared/utils/mixin-styled";

const NewsDetailRelatedStyles = styled.div`
  padding: 24px;
  height: auto;
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  .news-related-title {
    ${text30}
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  }
  .news-related-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .news-related-link {
    ${text16}
    display: block;
    transition: linear 0.1s;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  /* Responsive */
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    width: auto;
  }
  /* PC: width >= 1024px */
  @media only screen and (min-width: 1024px) {
    & {
      position: fixed;
      width: 344px;
    }
  }
  /* PC Low */
  @media (min-width: 1024px) and (max-width: 1239px) {
    & {
      position: fixed;
      width: 255.2px;
    }
  }
`;

const NewsDetailRelated = ({ data, ...props }) => {
  return (
    <NewsDetailRelatedStyles {...props}>
      <h3 className="news-related-title">Bài viết liên quan</h3>
      <ul className="news-related-list">
        {data.length > 0 &&
          data.map((item) => (
            <Fragment key={item.id}>
              <li className={`news-related-item`}>
                <Link href={item.slug}>
                  <a
                    className={`news-related-link  ${
                      item.active === true ? "active" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            </Fragment>
          ))}
      </ul>
    </NewsDetailRelatedStyles>
  );
};

export default NewsDetailRelated;
