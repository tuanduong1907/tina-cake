import React from "react";
import SvgNotFound from "../../icons/NotFound";
import styled from "styled-components";

const EmtyLayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  span {
    color: #989FB0;
  }
`;

const EmtyLayout = ({ text = "" }) => {
  return (
    <EmtyLayoutStyles>
      <SvgNotFound></SvgNotFound>
      <span>{text}</span>
    </EmtyLayoutStyles>
  );
};

export default EmtyLayout;
