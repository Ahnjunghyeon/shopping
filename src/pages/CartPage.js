import React from "react";
import CartItem from "../components/CartItem";
import "./styles/Cart.css";

function CartPage() {
  return (
    <div className="cart-page">
      <h2>장바구니</h2>
      <CartItem />
      {/* 여러 개의 CartItem을 여기에 추가할 수 있어 */}
    </div>
  );
}

export default CartPage;
