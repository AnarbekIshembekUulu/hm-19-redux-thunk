import { styled } from "@mui/material";
import React from "react";
// import { useSelector } from "react-redux";
import styledComponent from "styled-components";

function SummaryInfoCard() {
  // const themeMode = useSelector((state) => state.basket.themeMode);
  return (
    <Card>
      <StyledTitle>Delicious Food, Delivered To You</StyledTitle>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </p>
    </Card>
  );
}

export default SummaryInfoCard;

const Card = styled("div")(({ theme }) => ({
  maxWidth: "53.375rem",
  backgroundColor: theme.palette.secondary.main,
  padding: "36px 54px",
  boxShadow:"0px 6px 16px rgba(0, 0, 0, 0.3)",
  borderRadius: "16px",
  position: "relative",
  margin: "-12rem auto",
  color: theme.palette.secondary.contrastText,
  textAlign: "center",
}));

const StyledTitle = styledComponent.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
`;
