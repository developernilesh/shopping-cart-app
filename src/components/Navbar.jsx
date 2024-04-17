import React from "react";
import logoImage from '../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"

const Navbar = () => {

  const {cart} = useSelector((state) => state)

  return (
    <nav className="w-full bg-slate-800 py-1 fixed top-0">
      <div className="w-11/12 max-w-[1178px] mx-auto flex flex-row justify-between items-center">
        <NavLink to='/shopping-cart-app'>
          <div>
            <img src={logoImage} className="w-[50px]" id="logo-img"/>
          </div>
        </NavLink>

        <div className="flex items-center gap-8">
          <NavLink to='/shopping-cart-app'>
            <p className="text-white text-lg font-semibold">Home</p>
          </NavLink>
          <NavLink to='/cart'>
            <div className="relative">
              <FaShoppingCart className="text-white text-2xl"/>
              {
                cart.length>0 && 
                  <div className="text-white absolute -top-1 -right-3 bg-green-600 w-5 h-5
                  text-sm flex justify-center items-center font-semibold rounded-full animate-bounce">
                    <span className="-mt-[2px]">{cart.length}</span>
                  </div>
              }
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
