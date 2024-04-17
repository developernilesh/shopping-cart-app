import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { add,remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({item}) => {

  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch();

  const isPresent = cart.find((cartItem) => cartItem.id === item.id);

  function addToCart(){
    dispatch(add(item));
    toast.success("Item added to Cart")
  }

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item removed from Cart")
  }

  return (
    <div className="flex flex-col items-center justify-between gap-1 shadow-[0_0_10px_rgba(0,0,0,0.4)]
    hover:scale-110 transition-all duration-200 ease-in-out p-4 mt-10 ml-6 rounded-xl">
      <div>
        <p className="text-gray-800 font-semibold text-lg text-left truncate w-40 mt-1">
          {item.title}
        </p>
      </div>

      <div>
        <p className="w-40 text-gray-600 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0,10).join(" ")+"..."}
        </p>
      </div>

      <div className="h-[180px]">
        <img src={item.image} className="w-full h-full"/>
      </div>

      <div className="w-48 flex justify-between items-center mt-2">
        <div>
          <p className="text-green-600 font-bold">${item.price}</p>
        </div>

        <div>
          {
            isPresent ? 
            <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] 
            p-1 px-3 uppercase hover:bg-gray-700 hover:text-slate-100 transition-all duration-200 ease-in-out"
            onClick={removeFromCart}>Remove Item</button> : 
            <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] 
            p-1 px-3 uppercase hover:bg-gray-700 hover:text-slate-100 transition-all duration-200 ease-in-out"
            onClick={addToCart}>Add to Cart</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
