/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { introImageListData } from "../../data/IntroImageListData";

const IntroImageListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  .intro-image-item {
    width: 100%;
    height: 469px;
    overflow: hidden;
    border-radius: 16px;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: linear 0.25s;
      border-radius: inherit;
    }
  }

  /* Responsive */

  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    & {
      gap: 20px;
    }
    .intro-image-item {
      height: 250px;
    }
  }

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const IntroImageList = ({ data }) => {
  return (
    <IntroImageListStyles>
      {introImageListData.length > 0 &&
        introImageListData.map((item) => (
          <div key={item.id} className="intro-image-item">
            <img src={item.image} alt="" />
          </div>
        ))}
    </IntroImageListStyles>
  );
};

export default IntroImageList;
