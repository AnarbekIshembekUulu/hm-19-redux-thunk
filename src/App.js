import { useState } from "react";
// import styled from "styled-components";
import { styled } from "@mui/system";
import Basket from "./componenets/basket/Basket";
import Header from "./componenets/header/Header";
import Meals from "./componenets/meals/Meals";
import { Provider, useDispatch, useSelector } from "react-redux";
import Summary from "./componenets/summary/Summary";
import { useFoods } from "./hooks/useFoods";
import { store } from "./componenets/store";
import SnackBar from "./componenets/UI/SnackBar";
import { uiActions } from "./componenets/meals/ui/uiSlice";
import { createTheme, MenuItem, Select, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./lib/constants/theme";

const OPTIONS = [
  { label: "Cheaper", value: "ASCENDING" },
  { label: "Expensive", value: "DESCENDING" },
];

const meals = [
  {
    price: "100",
    id: Date.now().toString(),
    title: "food",
    description: "lagman",
  },
  {
    price: "100",
    id: Date.now().toString(),
    title: "food",
    description: "lagman",
  },
  {
    price: "100",
    id: Date.now().toString(),
    title: "food",
    description: "lagman",
  },
  {
    price: "100",
    id: Date.now().toString(),
    title: "food",
    description: "lagman",
  },
];

function AppContent() {
  const dispatch = useDispatch();
  const [isBasketVisible, setBasketVisible] = useState(false);
  const { sortDirection, changeSortDirection, mealss, isLoading, error } =
    useFoods();
  const snackbar = useSelector((state) => state.ui.snackbar);
  const themeMode = useSelector((state) => state.basket.themeMode);

  console.log(snackbar);

  const clickHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };

  const themeColor =
    themeMode === "light" ? { ...lightTheme } : { ...darkTheme };

  const theme = createTheme(themeColor);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header onShowBasket={clickHandler} />
        <Content>
          <SelectStyle
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortDirection}
            options={OPTIONS}
            onChange={(e) => changeSortDirection(e.target.value)}
          >
            {OPTIONS.map((item) => (
              <MenuItemStyleCheaper value={item.value}>
                {item.label}
              </MenuItemStyleCheaper>
            ))}
          </SelectStyle>
          {/* <select
          onChange={(e) => changeSortDirection(e.target.value)}
          value={sortDirection}
        >
          <option value={"ASCENDING"}>Cheaper</option>
          <option value={"DESCENDING"}>Expensive</option>
        </select> */}
          <Summary />
          <Meals isLoading={isLoading} meals={meals} error={error} />
          {isBasketVisible && (
            <Basket open={clickHandler} onClose={clickHandler} />
          )}
          <SnackBar
            isOpen={snackbar.isOpen}
            severity={snackbar.severity}
            message={snackbar.message}
            onClose={() => dispatch(uiActions.closeSnackBar())}
          />
        </Content>
      </ThemeProvider>
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

const Content = styled("div")(() => ({
  "&": {
    marginTop: "101px",
  },
}));

const SelectStyle = styled(Select)(({ theme }) => ({
  "&": {
    margin: "20px  20px 20px  46%",
    backgroundColor: theme.palette.primary.main,
    color: "whiteSmoke",
    textTransform: "uppercase",
    cursor: "pointer",
    width: "230px",
  },
  "&.Mui-focusVisible": {
    color: "red",
  },
  "&:hover": { backgroundColor: "#ff0000" },
}));

const MenuItemStyleCheaper = styled(MenuItem)(() => ({
  "&": {
    backgroundColor: "black",
    color: "blue",
    width: "300px",
    padding: "5px 0px 5px 110px",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    margin: "20px 10px 20px 10px",
    marginTop: "10px",
    borderRadius: "10px",
  },
}));
// // const MenuItemStyleExpensive = styled(MenuItem)(() => ({
//   "&": {
//     backgroundColor: "black",
//     color: "white",
//   },
//   "&.Mui-focusVisible": {
//     color: "red",
//   },
// }));

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
