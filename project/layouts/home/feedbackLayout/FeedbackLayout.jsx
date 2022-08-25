import React from "react";
import styled from "styled-components";
import FeedbackCard from "../../../components/FeedbackCard";
import AppHeaderTitle from "../../../controls/app-header-title/AppHeaderTitle";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// end swiper

const FeedbackLayoutStyles = styled.section`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  .HeadingStyles {
    color: #ffff;
  }
  .link-detail {
    color: ${(props) => props.theme.primaryColor};
  }
  .icon-right {
    fill: ${(props) => props.theme.primaryColor};
  }
  .feedback-list {
    margin-top: 40px;
    .swiper-slide {
      width: 33.3333%;
    }
  }
  /* Responsive */
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    .feedback-list {
    .swiper-slide {
      width: 85% !important;
    }
  }
  }
`;

const FeedbackLayout = ({ title = "", link = "", data }) => {
  return (
    <FeedbackLayoutStyles>
      <div className="container py-layout">
        <AppHeaderTitle title={title} link={link}></AppHeaderTitle>
        <div className="feedback-list">
          <Swiper
            pagination={
              (true,
              {
                clickable: true,
              })
            }
            modules={[Pagination]}
            grabCursor={true}
            spaceBetween={24}
            slidesPerView={"auto"}
          >
            {data?.length > 0 &&
              data?.map((item) => (
                <SwiperSlide key={item.id}>
                  <FeedbackCard
                    content={item.content}
                    image={item.image}
                    username={item.username}
                  ></FeedbackCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </FeedbackLayoutStyles>
  );
};

export default FeedbackLayout;
