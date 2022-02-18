import React from "react";
import { useState } from "react";
import { Movies } from "./movies";
import { Loader } from "../Loader/Loader";
import "./style.css";
import { Navigate } from "react-router-dom";

export const MovieSearch = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [soFound, setSoFound] = useState(false);

  const isLoggedIn = window.localStorage.getItem("isLoggedIn");
  if (!(isLoggedIn == "true")) {
    return <Navigate to="/" />;
  }

  const ClickHandler = async (e) => {
    setError("");
    e.preventDefault();
    setLoading(true);
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        setError(" Some Internal Error");
        setLoading(false);
      });
  };

  return (
    <div className="movieSearch">
      <h1>Search Your Favorite Movie</h1>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <br />
      <button onClick={ClickHandler}>Submit</button> <br />
      <Loader loading={loading} />
      {data.length > 1 ? <Movies data={data} /> : <h2>No Data Found</h2>}
      <h2>{error}</h2>
    </div>
  );
};
