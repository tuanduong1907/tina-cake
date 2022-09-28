import React from "react";
import styled from "styled-components";
import Select from "react-select";

const AppSelectStyles = styled.div`
  .css-1s2u09g-control {
    height: 50px;
    border-radius: 8px;
  }
  .css-1pahdxg-control {
    height: 50px;
    border-color: ${(props) => props.theme.primaryColor};
    box-shadow: none;
    border-radius: 8px;
  }
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#52bd94" : "white",
    padding: 12,
  }),
  control: (provided) => ({
    ...provided,
  }),
};

const AppSelect = ({ options, control, name, ...rest }) => {
  return (
    <AppSelectStyles>
      <Select
        className="mt-4 col-md-8 col-offset-4"
        options={options}
        styles={customStyles}
        {...rest}
      />
    </AppSelectStyles>
  );
};

export default AppSelect;
