import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const AppRadioStyles = styled.label`
  .radio-custum-wrap {
    display: flex;
    align-items: center;
    column-gap: 12px;
    font-weight: 500;
    cursor: pointer;
  }
  .radio {
    width: 28px;
    height: 28px;
    border-radius: 100rem;
    background: ${(props) => props.theme.darkGrayColor};
    &.active {
      background-color: ${(props) => props.theme.primaryColor};
    }
  }
`;

const AppRadio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <AppRadioStyles>
      <input
        onChange={() => {}}
        checked={checked}
        type="radio"
        className="hidden-input"
        {...field}
        {...rest}
      />
      <div className="radio-custum-wrap flex items-center gap-x-3 font-medium cursor-pointer">
        <div
          className={`w-7 h-7 rounded-full ${checked ? "active" : ""}`}
        ></div>
        <span>{children}</span>
      </div>
    </AppRadioStyles>
  );
};

export default AppRadio;
