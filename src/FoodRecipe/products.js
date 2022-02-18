import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Products = (data) => {
  return (
    <div className="section">
      {data.data.map((ele) => {
        return (
          <div key={ele.recipe.calories}>
            <div className="container">
              <div className="image">
                <img src={ele.recipe.image} alt={ele.recipe.label} />
              </div>
              <div className="cardBody">
                <center>
                  <h5>{ele.recipe.label}</h5>
                  <p>
                    Total Amount of Calories: {Math.floor(ele.recipe.calories)}
                  </p>
                  <Link to="/orderDetails">Buy</Link>
                </center>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
