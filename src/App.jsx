import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <Routes>
        <Route path='/shopping-cart-app' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;