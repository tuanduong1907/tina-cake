import React from "react";
import styled from "styled-components";
import { text14, text16 } from "../../../shared/utils/mixin-styled";
import SvgIconSearch from "../../icons/IconSearch";

const AppSearchFormStyles = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  gap: 8px;
  background-color: #ffff;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.grayColor};
  svg {
    flex-shrink: 0;
  }
  .search-input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    ${text16}
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    width: 100%;
    padding: 8px;
  }
`;

const AppSearchForm = ({
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <AppSearchFormStyles {...props}>
      <SvgIconSearch className="search-icon" stroke="#e5e5e5"></SvgIconSearch>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input"
      />
    </AppSearchFormStyles>
  );
};

export default AppSearchForm;
