import { useState } from "react";
import styled from "styled-components";
import Basket from "./componenets/basket/Basket";
import Header from "./componenets/header/Header";
import Meals from "./componenets/meals/Meals";
import { Provider, useDispatch, useSelector } from "react-redux";
import Summary from "./componenets/summary/Summary";
import { useFoods } from "./hooks/useFoods";
import { store } from "./componenets/store";
import SnackBar from "./componenets/UI/SnackBar";
import { uiActions } from "./componenets/meals/ui/uiSlice";

function AppContent() {
  const dispatch = useDispatch();
  const [isBasketVisible, setBasketVisible] = useState(false);
  const { sortDirection, changeSortDirection, meals, isLoading, error } =
    useFoods();

  const snackbar = useSelector((state) => state.ui.snackbar);

  console.log(snackbar);

  const clickHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };

  return (
    <>
      <Header onShowBasket={clickHandler} />
      <Content>
        <select
          onChange={(e) => changeSortDirection(e.target.value)}
          value={sortDirection}
        >
          <option value={"ASCENDING"}>cheaper</option>
          <option value={"DESCENDING"}>expensive</option>
        </select>
        <Summary />
        <Meals isLoading={isLoading} meals={meals} error={error} />
        {isBasketVisible && <Basket open={clickHandler} onClose={clickHandler} />}
        <SnackBar
          isOpen={snackbar.isOpen}
          severity={snackbar.severity}
          message={snackbar.message}
          onClose={() => dispatch(uiActions.closeSnackBar())}
        />
      </Content>
    </>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;

const Content = styled.div`
  margin-top: 101px;
`;

/* 
GET /foods
Headers: { UserID: "your_name"  } 

GET /basket
Headers: { UserID: "your_name"  } 

POST /foods/:foodId/addToBasket
BODY: { amount: number }
Headers: { UserID: "your_name"  } 
DELETE /basketItem/:id/delete
Headers: { UserID: "your_name"  }

PUT /basketItem/:id/update
BODY: { amount: number }
Headers: { UserID: "your_name"  }
*/
