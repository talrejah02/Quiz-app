import React from "react";
import "./CategoryCards.css";
import { NavLink } from "react-router-dom";

function CategoryCards() {
  return (
    <section class="card shadow">
      <img class="card-img" src="Images/cloud.jpg" alt="" />
      <section class="card-description">
        <section class="card-detail">
          <span class="card-title">product title</span>
        </section>
        <NavLink className="cart-btn" to="/Rules">
          Play Now
        </NavLink>
      </section>
    </section>
  );
}

export default CategoryCards;
