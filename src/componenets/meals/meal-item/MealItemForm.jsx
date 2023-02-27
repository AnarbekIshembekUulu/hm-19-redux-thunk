import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../essets/icon/Component 6/System icons.svg";
import Button from "../../UI/Button";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../store/basket/baskekSlice";

function MealItemForm({ id, title, price }) {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const basketItem = {
      id,
      title,
      price,
      amount,
    };
    dispatch(addToBasket(basketItem));
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <Container>
        <label htmlFor={id}>Amount</label>
        <StyledInput
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          id={id}
          min={1}
          max={5}
          defaultValue={1}
        />
      </Container>
      <Button>
        <StyledIcon /> Add
      </Button>
    </StyledForm>
  );
}

export default MealItemForm;
const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;

const Container = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 12px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledInput = styled.input`
  width: 60px;
  height: 32px;
  left: 1140px;
  top: 708px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  box-sizing: border-box;
  margin-left: 20px;
  font-size: 16px;
  cursor: pointer;
`;
