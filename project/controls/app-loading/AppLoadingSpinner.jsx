import React from "react";
import styled from "styled-components";

const AppLoadingSpinnerStyles = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => props.borderSize} solid white;
  border-top: ${(props) => props.borderSize} solid transparent;
  border-bottom: ${(props) => props.borderSize} solid transparent;
  border-radius: 100rem;
  display: inline-block;
  animation: spinner 1s infinite linear;
  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const AppLoadingSpinner = ({ size = "25px", borderSize = "3px" }) => {

  return (
    <AppLoadingSpinnerStyles
      size={size}
      borderSize={borderSize}
    ></AppLoadingSpinnerStyles>
  );
};

export default AppLoadingSpinner;
