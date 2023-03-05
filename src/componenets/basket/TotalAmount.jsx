import { styled } from "@mui/material";
import React from "react";
import styledComponent from "styled-components";
import ButtonComponent from "../UI/Button";

function TotalAmount({ price, onClose, onOrder }) {
  const isOrderButton =
    price > 0 ? (
      <ButtonComponent onClick={onOrder}>Order</ButtonComponent>
    ) : null;

  const fixedPrice = price.toFixed(2);

  return (
    <TotalAmountDiv>
      <InfoContainer>
        <Label>Total Amount</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>
      <ActionButtonContainer>
        <ButtonComponent variant="outlined" onClick={onClose}>
          Close
        </ButtonComponent>
        {isOrderButton}
      </ActionButtonContainer>
    </TotalAmountDiv>
  );
}

export default TotalAmount;

const Label = styled("p")(({ theme }) => ({
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  textAlign: "center",
  color: theme.palette.succes.contrastText,
  margin: 0,
}));
const Price = styled("p")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "22px",
  lineHeight: "33px",
  color: theme.palette.succes.contrastText,
  margin: 0,
}));



const InfoContainer = styledComponent.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButtonContainer = styledComponent.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const TotalAmountDiv = styledComponent.div`
  margin-top: 29px;
`;
