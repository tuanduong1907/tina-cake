import React from "react";
import styled from "styled-components";
import NewsItem from "../../../components/NewsItem";
import NewsList from "../../../components/NewsList";
import AppHeaderTitle from "../../../controls/app-header-title/AppHeaderTitle";

const NewsLayoutStyles = styled.section`
  .news-layout {
    margin-top: 40px;
    display: flex;
    gap: 40px;
  }
  .news-main {
    width: 50%;
    background: #fff;
    border-radius: 16px;
  }
  .new-list {
    width: 50%;
    .news-item {
      flex-direction: row;
      .news-image {
        width: 284px;
        height: 198px;
        flex-shrink: 0;
      }
    }
  }

  /* Resonsive */

  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
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
    }
    .new-list {
      width: 100%;
      gap: 20px;
      display: flex;
      flex-direction: column;
      
      .news-item {
        gap: 12px;
        .news-image-link {
          width: 40%;
        }
        .news-image {
          width: 100%;
          height: 100%;
          flex-shrink: initial;
        }
      }
    }
  }
`;

const NewsLayout = ({ title, link, data }) => {
  return (
    <NewsLayoutStyles>
      <div className="container py-layout">
        <AppHeaderTitle title={title} link={link}></AppHeaderTitle>
        <div className="news-layout">
          <div className="news-main">
            <NewsItem
              title="Tri ân nhà giáo Việt Nam"
              link=""
              image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              content="✍️ Tháng 11 - tháng tri ân ngày Nhà giáo Việt Nam 20/11 - đây không chỉ là ngày để các bạn bày tỏ lòng biết ơn công lao dạy dỗ của thầy cô mà đây là dịp thầy trò được gần gũi, gắn kết với nhau hơn."
              className="news-item-main"
            ></NewsItem>
          </div>
          <div className="new-list">
            {data?.length > 0 &&
              data?.map((item) => (
                <NewsItem
                  key={item.id}
                  className="news-item"
                  title={item.title}
                  link={item.link}
                  image={item.image}
                  content={item.content}
                ></NewsItem>
              ))}
          </div>
        </div>
      </div>
    </NewsLayoutStyles>
  );
};

export default NewsLayout;
