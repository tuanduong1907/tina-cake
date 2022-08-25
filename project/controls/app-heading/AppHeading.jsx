import React from "react";
import styled from "styled-components";
import { text18, text34 } from "../../../shared/utils/mixin-styled";

// styles
const HeadingStyles = styled.h2`
  color: ${(props) => props.theme.darkBlueColor};
  ${text34}
  font-weight: 700;

  /* Responsive */

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      ${text18}
    }
  }
`;
// end styles

const AppHeading = ({ children, ...props }) => {
  return (
    <HeadingStyles className="HeadingStyles" {...props}>
      {children}
    </HeadingStyles>
  );
};

export default AppHeading;
