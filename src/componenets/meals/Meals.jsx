// import React, { useEffect, useState } from "react";
// import { fetchApi } from "../../lib/feth";
import { styled } from "@mui/material";
import MealItem from "./meal-item/MealItem";

const Meals = ({ meals, isLoading, error }) => {
  // const [meals, setMeals] = useState([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(true);

  // const getMeals = async () => {
  //   try {
  //     const response = await fetchApi("foods");
  //     setMeals(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError("Failed to loisLoadingad meals");
  //   }
  // };

  // useEffect(() => {
  //   getMeals();
  // }, []);

  return (
    // <Card>
    <Card>
      {isLoading && <p>Loading...........</p>}
      {error && (
        <p
          style={{ color: "red", textTransform: "uppercase", fontSize: "2rem" }}
        >
          {error}
        </p>
      )}
      {meals.map((meal) => {
        return (
          <MealItem
            title={meal.title}
            id={meal._id}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </Card>
    /* </Card> */
  );
};

export default Meals;

const Card = styled("div")(({ theme }) => ({
  background: theme.palette.secondary.light,
  borderRadius: "16px",
  width: "64.9375rem",
  margin: "40px auto",
  padding: "40px 40px 36px 40px",
}));
