import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FoodRecipe } from "./FoodRecipe/FoodRecipe";
import { OrderDetails } from "./FoodRecipe/OrderDetails";

export const FoodRecipeRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FoodRecipe />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
