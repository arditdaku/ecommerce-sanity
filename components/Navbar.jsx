import React from "react";
import Link from "next/link";

import { Cart } from "./Cart";
import { useStateContext } from "../context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";

export const Navbar = () => {
  const { showCart, showCartHandler, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => showCartHandler(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};
