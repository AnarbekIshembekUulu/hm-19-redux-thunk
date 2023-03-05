import { styled } from "@mui/material";
import React from "react";
import styledComponent from "styled-components";
import { getThene } from "../../lib/constants/theme";
import { ReactComponent as BasketIcons } from "../essets/icon/Component 6/basket-icons.svg";

function BasketButton({ count, ...restProps }) {
  return (
    <StyledButton {...restProps}>
      <BasketIcons />
      <StyledTitle>Your cart</StyledTitle>
      <StyledCounter id="counter">{count || 0}</StyledCounter>
    </StyledButton>
  );
}

export default BasketButton;

const StyledButton = styled("button")(({ theme }) => ({
  background: theme.palette.primary.light,
  borderRadius: "30px",
  padding: "12px 32px",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#ffffff",
  borderStyle: "none",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  "&:hover > #counter ": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const StyledTitle = styledComponent.span`
  margin-left: 12px;
  margin-right: 24px;
`;

const StyledCounter = styledComponent.span`
  background: ${getThene().palette.primary.main};
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: ${getThene().palette.primary.contrastText};
  padding: 4px 20px;
`;
