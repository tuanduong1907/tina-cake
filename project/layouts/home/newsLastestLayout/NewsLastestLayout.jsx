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
import NewsItemLoading from "../../../components/LoadingSkeletonCpn/NewsItemLoading";
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
        height: 100%;
        flex-shrink: 0;
      }
    }
  }

  .news-main-image {
    height: 450px;
  }

  .news-list-loading {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  /* Resonsive */

  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    .new-list {
      grid-template-columns: repeat(1, 1fr);
    }
    .news-list-loading {
      grid-template-columns: repeat(1, 1fr);
      .news-image-link {
        width: 100%;
      }
      .news-body {
        width: 100%;
      }
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
          width: 50%;
        }
        .news-image {
          width: 100%;
          height: 200px;
          flex-shrink: initial;
        }
      }
    }
    .news-main-image {
      width: 100%;
      height: 100% !important;
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
  const [postDay, setPostDay] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data post day
  useEffect(() => {
    async function fetctData() {
      setLoading(true);
      try {
        const colRef = collection(db, "posts");
        const queries = query(colRef, limit(4), orderBy("createAt", "desc"));
        onSnapshot(queries, (snapshot) => {
          let resultPostDay = [];
          snapshot.forEach((doc) => {
            resultPostDay.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setPostDay(resultPostDay);
          setLoading(false);
        });
      } catch (error) {
        setLoading(false);
      }
    }
    fetctData();
  }, []);
  // end fetch data post day
  return (
    <NewsLayoutStyles>
      <div className="container py-layout">
        <AppHeaderTitle
          title={title}
          link="/danh-sach-bai-viet"
        ></AppHeaderTitle>

        <div className="news-layout">
          {postDay && !loading && (
            <div className="new-list">
              {postDay?.length > 0 &&
                postDay
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
          )}
        </div>
        {loading && (
          <div className="news-list-loading">
            {Array(2)
              .fill(null)
              .map((item, index) => (
                <NewsItemLoading key={index}></NewsItemLoading>
              ))}
          </div>
        )}
        {postDay.length === 0 && loading === false && (
          <>
            <EmtyLayout
              text="không tìm thấy bài viết"
            ></EmtyLayout>
          </>
        )}
      </div>
    </NewsLayoutStyles>
  );
};

export default NewsLatestLayout;
