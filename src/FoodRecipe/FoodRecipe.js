import React from "react";
import { useState } from "react";
import { Products } from "./products";
import { Loader } from "../Loader/Loader";
import "./style.css";

export const FoodRecipe = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState("");
  const [found, setFound] = useState(false);

  const YOUR_APP_ID = "85e1ed99";
  const YOUR_APP_KEY = "56accbb9916a510ed73d7e207179bbf2";
  const ChangeHandler = (e) => setSearch(e.target.value);
  const SubmitHandler = (e) => {
    SetError("");
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFound(true);
        setData(data.hits);
        setLoading(false);
      })
      .catch((err) => {
        SetError("Some internal Error");
        setLoading(false);
      });
  };
  return (
    <div className="FoodRecipe">
      <div>
        <h1>Food Recipe App</h1>
      </div>
      <form>
        <input type="text" value={search} onChange={ChangeHandler} />
        <br />
        <button value="search" onClick={SubmitHandler}>
          Submit
        </button>
      </form>
      <Loader loading={loading} />
      {data.length >= 1 ? (
        <Products data={data} />
      ) : found === true ? (
        <h2>No Data Found</h2>
      ) : null}
      <h2>{error}</h2>
    </div>
  );
};
