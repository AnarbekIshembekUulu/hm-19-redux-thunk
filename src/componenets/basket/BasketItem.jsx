import styled from "styled-components";
import Button from "../UI/Button";


function BasketItem({
  title,
  price,
  amount,
  incrementAmount,
  decrementAmount,
}) {
  return (
    <Container>
      <Title>{title}</Title>

      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>X {amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <Button
            size
            borderStyle={"squared"}
            variant="outlined"
            onClick={(decrementAmount)}
          >
            -
          </Button>
          <Button
            borderStyle={"squared"}
            variant="outlined"
            onClick={incrementAmount}
          >
            +
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
}

export default BasketItem;

const Container = styled.div`
  padding: 24px 0px;
  width: 100%;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px 0;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
  margin: 0;
`;

const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 6px 14px;
  display: block;
`;

const PriceAndAmountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 153px;
  justify-content: space-between;
`;

const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
