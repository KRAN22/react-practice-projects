import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const OrderDetails = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <center>
        <h1>Your Order is placed </h1>
        <h1 style={{ marginBottom: "60px" }}>Your order Amount is : $</h1>
        <Link
          style={{
            marginTop: "60px",
            borderRadius: "10px",
            fontSize: "20px",
            color: "white",
            backgroundColor: "black",
            padding: "10px",
            textDecoration: "none",
          }}
          to="/"
        >
          Continues Order
        </Link>
      </center>
    </div>
  );
};
