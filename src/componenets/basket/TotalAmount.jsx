import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";

function TotalAmount({ price, onClose, onOrder }) {
  const isOrderButton =
    price > 0 ? <Button onClick={onOrder}>Order</Button> : null;

    const fixedPrice = price.toFixed(2);

  return (
    <TotalAmountDiv>
      <InfoContainer>
        <Label>Total Amount</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>
      <ActionButtonContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {isOrderButton}
      </ActionButtonContainer>
    </TotalAmountDiv>
  );
}

export default TotalAmount;

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
  
const TotalAmountDiv=styled.div`
  margin-top: 29px;
`

