import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  /* Responsive */

  /* Tablet: width >= 740px and width < 1024px */
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    grid-template-columns: repeat(1, 1fr);
    .news-btn,
    .news-body,
    .news-image-link {
      width: 100%;
    }
    .news-image {
      height: 250px;
    }
  }
`;

const NewsList = ({ data, ...props }) => {
  return (
    <NewsListStyles {...props}>
      {data.length > 0 &&
        data.map((item) => (
          <NewsItem
            key={item.id}
            image={item.image}
            content={item.content}
            link={item.link}
            title={item.title}
            className="news-item"
          ></NewsItem>
        ))}
    </NewsListStyles>
  );
};

export default NewsList;
