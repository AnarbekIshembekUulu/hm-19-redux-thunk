import { styled } from "@mui/material";
import styledComponent from "styled-components";
import MealItemForm from "./MealItemForm";

function MealItem({ title, description, price, id }) {
  return (
    <ListStyle>
      <StyledItemInfo>
        <StyledTitle>{title}</StyledTitle>
        <p>{description}</p>
        <span>$ {price}</span>
      </StyledItemInfo>
      <MealItemForm id={id} price={price} title={title} />
    </ListStyle>
  );
}

export default MealItem;

const ListStyle = styledComponent.div`
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

const StyledItemInfo = styled("div")(({ theme }) => ({
  marginBottom: "20px",
  p: {
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "4px",
    marginBottom: "4px",
    color: theme.palette.secondary.contrastText,
  },
  span: {
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "30px",
    color: "#ad5502",
    marginTop: "4px",
  },
}));

const StyledTitle = styled("h6")(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "27px",
  color: theme.palette.secondary.contrastText,
  marginBottom: "4px",
}));

// const Description = styledComponent.p`
//   margin-bottom: 4px;
// `;
