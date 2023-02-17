import React from "react";
import styled from "styled-components";

function Button({
  children,
  variant = "contained",
  borderStyle = "roundet",
  onClick
}) {
  return (
    <StyledButton variant={variant} borderStyle={borderStyle} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? " #8a2b06" : "#ffffff";
};

const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8A2B06";
};
const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#8a2b06";
};

const getBorderRadius = (props) => {
  return props.borderStyle === "roundet" ? "20px" : "6px";
};

const StyledButton = styled.button`
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${getColor};
  border-style: none;
  background: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  border: ${getBorder};
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #7e2a0a;
  }
  :active {
    background: #993108;
  }
`;
