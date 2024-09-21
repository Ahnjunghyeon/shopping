import React from "react";
import "./styles/CartItem.css";

function CartItem() {
  return (
    <div className="cart-item">
      <h3>상품 이름</h3>
      <p>가격: 상품 가격 원</p>
      {/* 기타 정보 */}
    </div>
  );
}

export default CartItem;
