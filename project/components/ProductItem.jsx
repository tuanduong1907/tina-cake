/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { text18, text20 } from "../../shared/utils/mixin-styled";

const ProdcutItemStyles = styled.div`
  background-color: #ffff;
  padding: 16px;
  border-radius: 16px;
  transition: linear 0.25s;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .product-image {
      img {
        transform: scale(1.1);
      }
    }
  }
  .product-link {
    border-radius: inherit;
  }
  .product-image {
    border-radius: 8px;
    overflow: hidden;
    height: 209px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: linear 0.25s;
    }
  }
  .product-body {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${text20}
  }
  .product-name {
    ${text20}
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
  .product-price {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 500;
    span {
      font-weight: 400;
    }
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    .product-name {
      ${text18}
    }
  }
`;

const ProductItem = ({ link, image, name, price }) => {
  return (
    <ProdcutItemStyles className="ProdcutItemStyles">
      <Link href={`/${link}`}>
        <a className="product-link">
          <div className="product-image">
            <img src={image} alt="product" />
          </div>
          <div className="product-body">
            <h3 className="product-name">{name}</h3>
            <p className="product-price">
              {price} <span>VND</span>
            </p>
          </div>
        </a>
      </Link>
    </ProdcutItemStyles>
  );
};

export default ProductItem;
