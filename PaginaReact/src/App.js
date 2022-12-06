import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";


import Home from './components/home';
import Signup from './components/signup';
import Contact from './components/contact';
import About from "./components/about";
import Menu from "./components/menu";
import Cart from "./components/cart";
import Carro from "./components/Carro";
import Login from "./components/login";
import ForgotPassword from "./components/forgotPassword";

function App() {

  return (
    <>
      <div className = 'App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="carro" element={<Carro />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot_password" element={<ForgotPassword />} />
        </Routes>
        
      </div>
  </>
  );
}



export default App;
