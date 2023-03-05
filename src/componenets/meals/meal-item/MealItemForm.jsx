import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../essets/icon/Component 6/System icons.svg";
import styleComponent from "styled-components";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material";
import { addToBasket } from "../../store/basket/baskekSlice";
import { TextField } from "@mui/material";
import ButtonComponent from "../../UI/Button";

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
        <StyledTextField
          id={id}
          label=""
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          value={amount}
          onChange={amountChangeHandler}
          maxRows={"5"}
          minRows={"1"}
        />
      </Container>
      <ButtonComponent>
        <StyledIcon /> Add
      </ButtonComponent>
    </StyledForm>
  );
}

export default MealItemForm;

const StyledTextField = styled(TextField)(({ theme }) => ({
  "&": {
    width: "80px",
    backgroundColor: theme.palette.succes.contrastText,
  },
  "&.MuiOutlinedInput-input": {
    padding: "20px",
    color: theme.palette.primary.contrastText,
  },
}));

const StyledIcon = styleComponent(PlusIcon)`
  margin-right: 10px;
`;

const Container = styled("div")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "18px",
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  label: {
    paddingRight: "10px",
    color: theme.palette.primary.contrastText,
  },
}));
const StyledForm = styleComponent.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

// const StyledInput = styledComponent.input`
//   width: 60px;
//   height: 32px;
//   left: 1140px;
//   top: 708px;
//   border: 1px solid #d6d6d6;
//   border-radius: 6px;
//   box-sizing: border-box;
//   margin-left: 20px;
//   font-size: 16px;
//   cursor: pointer;
// `;
