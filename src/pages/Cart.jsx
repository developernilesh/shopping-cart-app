import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state)
  const [totalAmount, settotalAmount] = useState(0);
  
  useEffect(() => {
    settotalAmount( cart.reduce((acc,curr) => acc + curr.price,0))
  })

  return (
    <div className="mt-16 min-h-screen">
      <h1 className="mb-4 text-center text-3xl text-gray-700 font-bold">
        {cart.length > 0 ? <span>Cart Items</span> : <span>Cart Empty</span>}
      </h1>
      {
        cart.length > 0 ?
        (<div className="flex flex-col-reverse md:flex-row justify-between max-w-5xl mx-auto px-6 gap-6 xl:px-0">
          <div className="flex flex-col">
            {
              cart.map((item)=>(
                <CartItem item={item} key={item.id}/>
              ))
            }
          </div>

          <div className="w-full flex flex-col gap-10 md:mt-0 mt-2 h-full rounded-lg border p-6 shadow-[0_0_10px_rgba(0,0,0,0.4)]">
            <div className="w-full flex flex-col text-green-600">
              <h2 className="uppercase font-bold">Your Cart</h2>
              <p className="uppercase text-3xl font-bold">Summary</p>
              <p className="text-gray-800 text-[18px] font-semibold mt-6">
                Total Items: <span>{cart.length}</span>
              </p>
            </div>

            <div className="w-full flex flex-col justify-between">
              <p className="text-lg font-bold text-gray-800">
                Total Amount: $<span>{totalAmount.toFixed(2)}</span>
              </p>
              <button className="w-full mt-3 rounded-md bg-green-600 py-1.5 font-medium text-white hover:bg-green-700">
                Checkout Now
              </button>
            </div>
          </div>
        </div>

        
        ) :
        (<div className="w-full flex justify-center mt-40">
          
          <NavLink to='/shopping-cart-app'>
            <button className="w-max mt-3 rounded-md bg-green-600 py-1 px-3 text-white hover:bg-green-700 text-xl font-bold">
              Shop Now
            </button>
          </NavLink>
        </div>)
      } 
    </div>
  );
};

export default Cart;
