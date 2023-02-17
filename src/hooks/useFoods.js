import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../componenets/store/meals/mealsReducer";

export const useFoods = () => {
  const dispatch = useDispatch();
  const [sortDirection, setSortDirection] = useState("ASCENDING");
  const { meals, isLoading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  const changeSortDirection = (direction) => {
    setSortDirection(direction);
  };

  const sortedMeals = useMemo(() => {
    const notSorted = [...meals];

    return notSorted.sort((a, b) => {
      if (sortDirection === "ASCENDING") {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
  }, [sortDirection, meals]);

  return {
    meals: sortedMeals,
    sortDirection,
    changeSortDirection,
    isLoading,
    error,
  };
};
