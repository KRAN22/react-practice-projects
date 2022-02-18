import React from "react";
import "./Calculator/style.css";
import { MovieSearch } from "./movieSearch/movieSearch";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { LoginFrom } from "./LoginFrom/loginFrom";
import { Counter } from "./counter/counter";

const Home = () => {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");
  if (!(isLoggedIn == "true")) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/movieSearch">Movies</Link>
      </li>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/movieSearch" element={<MovieSearch />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<LoginFrom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
