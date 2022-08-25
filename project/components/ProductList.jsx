import React from "react";
import styled from "styled-components";
import { productData } from "../../data/productData";
import ProductItem from "./ProductItem";

const ProductListStyles = styled.section`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

const ProductList = ({ data, ...props }) => {
  return (
    <ProductListStyles {...props}>
      {data?.length > 0 &&
        data?.map((item) => (
          <ProductItem
            key={item.id}
            link={item.link}
            image={item.image}
            name={item.name}
            price={item.price}
          ></ProductItem>
        ))}
    </ProductListStyles>
  );
};

export default ProductList;
