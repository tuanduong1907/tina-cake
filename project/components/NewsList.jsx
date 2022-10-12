import React, { Fragment } from "react";
import styled from "styled-components";
import EmtyLayout from "../layouts/emtyLayout/EmtyLayout";
import NewsItem from "./NewsItem";

const NewsListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  /* Responsive */

  /* Tablet: width >= 740px and width < 1024px */
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    & {
      grid-template-columns: repeat(2, 1fr);
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
  /* PC Low */
  @media (min-width: 1024px) and (max-width: 1239px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NewsList = ({ data, valueEmty, ...props }) => {
  return (
    <>
      {data?.length > 0 ? (
        <NewsListStyles {...props}>
          {data?.length > 0 &&
            data
              ?.sort((a, b) =>
                a.createAt.seconds < b.createAt.seconds ? 1 : -1
              )
              .map((item) => (
                <Fragment key={item.id}>
                  <NewsItem
                    key={item.id}
                    className="news-item"
                    classNameImage="home-new-image"
                    title={item.title}
                    slug={item.slug}
                    image={item.image}
                    desc={item.desc}
                    category={item.categoryId}
                    date={`${new Date(
                      item?.createAt?.seconds * 1000
                    ).toLocaleTimeString("vi-VI")} - ${new Date(
                      item?.createAt?.seconds * 1000
                    ).toLocaleDateString("vi-VI")}`}
                  ></NewsItem>
                </Fragment>
              ))}
        </NewsListStyles>
      ) : (
        <EmtyLayout
          text={`Xin lỗi, không tìm thấy bất kỳ kết quả phù hợp nào cho “${valueEmty}”`}
        ></EmtyLayout>
      )}
    </>
  );
};

export default NewsList;
