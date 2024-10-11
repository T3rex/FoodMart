import React from "react";
import { useSelector } from "react-redux";
import MenuItemCard from "./MenuItemCard";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  let itemtotal = 0;
  cartItems.forEach((item) => {
    itemtotal = itemtotal + item.cartQty * (item.price / 100).toFixed(2);
  });

  return (
    <div className="w-1/2 flex align-startjustify-center  m-auto">
      <div className=" w-8/12">
        {cartItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
      <div className="w-4/12 bg-gray-100 p-3">
        <h1 className="font-bold">Bill Details</h1>
        <div className="flex justify-between font-extralight text-sm">
          <p>Item total</p>
          <p className="">₹{itemtotal}</p>
        </div>
        <div className="flex justify-between font-extralight text-sm">
          <p>Delivery Fee | </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
