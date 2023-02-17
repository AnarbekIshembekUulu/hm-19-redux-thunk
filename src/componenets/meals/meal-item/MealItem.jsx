import styled from "styled-components";
import MealItemForm from "./MealItemForm";

function MealItem({ title, description, price, id }) {
  
  return (
    <ListStyle>
      <StyledItemInfo>
        <StyledTitle>{title}</StyledTitle>
        <Description>{description}</Description>
        <span>$ {price}</span>
      </StyledItemInfo>
      <MealItemForm id={id} price={price}  title={title} />
    </ListStyle>
  );
}

export default MealItem;

const ListStyle = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  &:last-child {
    border: none;
    margin-bottom: 0;
  }
`;

const StyledItemInfo = styled.div`
  margin-bottom: 20px;
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-top: 4px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
    margin-top: 4px;
  }
`;

const StyledTitle = styled.h6`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin-bottom: 4px;
`;

const Description = styled.p`
  margin-bottom: 4px;
`;
