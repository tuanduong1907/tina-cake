import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    grid-template-columns: repeat(1, 1fr);
    .news-btn,
    .news-body,
    .news-image-link{
      width: 100%;
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
          ></NewsItem>
        ))}
    </NewsListStyles>
  );
};

export default NewsList;
