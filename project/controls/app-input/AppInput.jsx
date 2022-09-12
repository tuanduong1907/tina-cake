import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import { text16 } from "../../../shared/utils/mixin-styled";

const AppInputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    border: 1px solid #fff;
    border-radius: 8px;
    background-color: transparent;
    padding: ${(props) => (props.hasIcon ? "12px 60px 12px 12px" : "12px")};
    border: 1px solid ${(props) => props.theme.lightGrayColor2};
    display: block;
    width: 100%;
    ${text16}
    transition: all 0.2s linear;
    &:focus {
      border-color: ${(props) => props.theme.primaryColor};
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const AppInput = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <AppInputStyles hasIcon={children ? true : false}>
      <input type={type} id={name} {...field} {...props} />
      {children ? <span className="input-icon">{children}</span> : null}
    </AppInputStyles>
  );
};

export default AppInput;
