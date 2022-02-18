import React from "react";
import "./Calculator/style.css";
import { MovieSearch } from "./movieSearch/movieSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginFrom } from "./LoginFrom/loginFrom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<MovieSearch />} />
          <Route exact path="/" element={<LoginFrom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
