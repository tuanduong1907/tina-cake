import React from "react";
import styled from "styled-components";

const AppToggleStyles = styled.label`
  .toggle {
    display: inline-block;
    width: 70px;
    height: 42px;
    position: relative;
    cursor: pointer;
    border-radius: 100rem;
    padding: 4px;
    transition: all 0.2s ease;
    background-color: ${(props) => props.theme.grayColor};
    &.active {
      background-color: ${(props) => props.theme.primaryColor};
    }
  }
  .spinner {
    transition: all 0.2s ease;
    width: 34px;
    height: 34px;
    background-color: #ffff;
    border-radius: 100rem;
    display: inline-block;
    &.active {
      transform: translateX(28px);
    }
  }
`;

const AppToggle = ({ on, onClick, ...rest }) => {
  return (
    <AppToggleStyles>
      <input
        type="checked"
        checked={on}
        className="hidden-input"
        onChange={() => {}}
        onClick={onClick}
      />
      <div className={`toggle ${on ? "active" : ""}`} {...rest}>
        <span className={`spinner ${on ? "active" : ""}`}></span>
      </div>
    </AppToggleStyles>
  );
};

export default AppToggle;
