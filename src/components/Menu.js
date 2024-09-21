import React from "react";
import { Link } from "react-router-dom";
import "./styles/Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
