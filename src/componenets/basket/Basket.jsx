// import Modal from "../UI/Modal";
import TotalAmount from "./TotalAmount";
import styled from "styled-components";
import BasketItem from "./BasketItem";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBasketItem,
  submitOrder,
  updateBasketItem,
} from "../store/basket/baskekSlice";
import { uiActions } from "../meals/ui/uiSlice";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "10px",
  width: "40rem",
  p: 4,
};

function Basket({ onClose, open }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);

  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };

  const decrementAmount = (id, amount) => {
    if (amount > 0) {
      dispatch(updateBasketItem({ amount: amount - 1, id }));
    } else {
      dispatch(deleteBasketItem(id));
    }
  };

  const inrementAmount = (id, amount) => {
    dispatch(updateBasketItem({ amount: amount + 1, id }));
  };

  const orderSubmitHandler = async () => {
    try {
      await dispatch(
        submitOrder({
          orderData: { items },
        })
      ).unwrap();
      dispatch(
        uiActions.showSnackBar({
          severity: "success",
          message: "Order completed successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showSnackBar({
          severity: "error",
          message: "Failed ! ! !",
        })
      );
    } finally {
      onClose();
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Content>
            {items.length ? (
              <FixedHeightContainer>
                {items.map((item) => {
                  return (
                    <BasketItem
                      key={item._id}
                      decrementAmount={() =>
                        decrementAmount(item._id, item.amount)
                      }
                      incrementAmount={() =>
                        inrementAmount(item._id, item.amount)
                      }
                      deleteBasketItem={() => deleteBasketItem(item._id)}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                    />
                  );
                })}
              </FixedHeightContainer>
            ) : null}

            <TotalAmount
              price={getTotalPrice()}
              onClose={onClose}
              onOrder={orderSubmitHandler}
              onCloseModal={onClose}
            />
          </Content>
        </Box>
      </Modal>
    </>
  );
}

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
