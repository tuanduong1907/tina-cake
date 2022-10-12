import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "../../../components/NewsItem";
import AppHeaderTitle from "../../../controls/app-header-title/AppHeaderTitle";
import { db } from "../../../firebase/firebase-config";
import EmtyLayout from "../../emtyLayout/EmtyLayout";

const NewsLayoutStyles = styled.section`
  .emty-data {
    width: 100%;
  }
  .news-layout {
    margin-top: 40px;
    display: flex;
    gap: 40px;
  }
  .new-list {
    width: 100%;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .news-item {
      flex-direction: row;
      .news-image {
        width: 284px;
        height: 198px;
        flex-shrink: 0;
      }
    }
  }

  .news-main-image {
    height: 450px;
  }

  /* Resonsive */

  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    .new-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  /* Tablet: width >= 740px and width < 1024px */
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    .news-layout {
      gap: 20px;
    }
    .news-main-image {
      height: 300px;
    }
    .new-list {
      .news-image {
        width: 150px !important;
        height: 160px !important;
      }
    }
  }

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    .news-layout {
      flex-direction: column;
      gap: 20px;
    }
    .news-main {
      width: 100%;
    }
    .news-item-main {
      flex-direction: row;
      .news-image {
        height: 100%;
      }
    }
    .new-list {
      width: 100%;
      .news-item {
        gap: 12px;
        .news-image-link {
          width: 40%;
        }
        .news-image {
          width: 100%;
          height: 150px;
          flex-shrink: initial;
        }
      }
    }
    .news-main-image {
      width: 100%;
      height: 150px !important;
    }
  }

  /* PC Low */
  @media (min-width: 1024px) and (max-width: 1239px) {
    .new-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const NewsLatestLayout = ({ title, data }) => {
  const [postMain, setPostMain] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(colRef, where("banner", "==", true), limit(1));
    onSnapshot(q, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPostMain(result);
    });
  }, []);

  // const date = new Date( * 1000)
  return (
    <NewsLayoutStyles>
      <div className="container py-layout">
        <AppHeaderTitle
          title={title}
          link="/danh-sach-bai-viet"
        ></AppHeaderTitle>

        <div className="news-layout">
          {data?.length > 0 ? (
            <div className="new-list">
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
            </div>
          ) : (
            <EmtyLayout
              text="Không có bài viết nào"
              className="emty-data"
            ></EmtyLayout>
          )}
        </div>
      </div>
    </NewsLayoutStyles>
  );
};

export default NewsLatestLayout;
