import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import MyPage from "./pages/MyPage";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
