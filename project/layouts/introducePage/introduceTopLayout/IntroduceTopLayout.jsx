/* eslint-disable @next/next/no-img-element */
import React from "react";
import FooterContactList from "../../../components/FooterContactList";
import styled from "styled-components";

const IntroTopLayoutStyles = styled.section`
  display: flex;
  gap: 40px;
  .intro-image {
    height: 469px;
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }
  .intro-contact {
    flex: 1;
  }
  .intro-contact-image {
    height: 252px;
    object-fit: cover;
    border-radius: 16px;
    width: 100%;
    margin-bottom: 40px;
  }
`;

const IntroduceTopLayout = () => {
  return (
    <IntroTopLayoutStyles className="intro-top-layout">
      <div className="intro-image">
        <img
          src="https://media.istockphoto.com/photos/baker-taking-strawberry-cake-from-store-counter-picture-id1412161845?b=1&k=20&m=1412161845&s=170667a&w=0&h=rKB_6SGj8PuptOEurZiMJQXZpdhvfyHhwwBstA2R0Yc="
          alt=""
        />
      </div>
      <div className="intro-contact">
        <img
          src="https://images.unsplash.com/photo-1603664113651-2f4fde639823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80"
          alt=""
          className="intro-contact-image"
        />
        <FooterContactList></FooterContactList>
      </div>
    </IntroTopLayoutStyles>
  );
};

export default IntroduceTopLayout;
