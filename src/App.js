import React from "react";
import "./Calculator/style.css";
import { MovieSearch } from "./movieSearch/movieSearch";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { LoginFrom } from "./LoginFrom/loginFrom";
import { Counter } from "./counter/counter";
import { FoodRecipe } from "./FoodRecipe/FoodRecipe";
import { OrderDetails } from "./FoodRecipe/OrderDetails";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  if (!(isLoggedIn == "true")) {
    return <Navigate to="/" />;
  }

  const liStyle = {
    height: 50,
    width: 200,
    fontWeight: "900",
    textDecoration: "none",
  };
  return (
    <div
      style={{
        height: 300,
        width: 150,
        margin: "auto",
        marginTop: "30vh",
        fontSize: 20,
        listStyleType: "none",
      }}
    >
      <li style={liStyle}>
        <Link to="/counter">Counter</Link>
      </li>
      <li style={liStyle}>
        <Link to="/movieSearch">Movies</Link>
      </li>
      <li style={liStyle}>
        <Link to="/food">Food Recipe</Link>
      </li>
      <button
        onClick={() => {
          window.localStorage.setItem("isLoggedIn", false);
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/movieSearch" element={<MovieSearch />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/food" element={<FoodRecipe />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<LoginFrom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
