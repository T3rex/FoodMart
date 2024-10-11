import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_IMG } from "../Config";
import { addItem, removeItem } from "../utils/cartSlice";
import { useParams } from "react-router-dom";

function MenuItemCard(props) {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  let cartItem = items.filter((item) => item.id === props.item.id);
  const resId = useParams();

  function handleAddItem() {
    dispatch(addItem({ ...props.item, resId: resId.id }));
  }
  function handleRemoveItem() {
    dispatch(removeItem(props.item));
  }

  return (
    <div className="flex justify-start items-center rounded-lg bg-white border-2 w-full my-3 m-auto p-3">
      {props.item?.imageId ? (
        <img
          className="w-1/4 rounded-lg"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            props.item.imageId
          }
        />
      ) : (
        <img className="w-1/4  rounded-lg" src={LOGO_IMG} />
      )}
      <div className="flex flex-col justify-between items-stretch pl-2 ml-2 w-2/4">
        <p className="font-bold">
          {props.item?.name} <span> - </span>
          <span>
            ₹
            {(props.item.defaultPrice
              ? props.item.defaultPrice / 100
              : props.item.price / 100
            ).toFixed(2)}
          </span>
        </p>
        <p className="text-sm font-extralight">{props.item?.description}</p>
        <div>
          {props.item.isVeg ? (
            <img
              className="w-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/800px-Veg_symbol.svg.png"
            />
          ) : (
            <img
              className="w-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
            />
          )}
        </div>
      </div>
      <div className="flex justify-center items-end w-1/4">
        {cartItem[0]?.cartQty ? (
          <div className="flex">
            <button
              className="rounded-l-lg border border-grey-500 w-5 h-10 border-r-0 text-orange-400 font-semibold"
              onClick={() => handleRemoveItem()}
            >
              -
            </button>
            <div className="w-6 border border-grey-500 text-sm text-center pt-2 border-l-0 border-r-0 font-bold text-orange-400">
              {cartItem[0].cartQty}
            </div>
            <button
              className="rounded-r-lg border border-grey-500 w-5 border-l-0 text-orange-400 font-semibold"
              onClick={() => handleAddItem()}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="bg-white text-orange-400 rounded-lg border-2 w-16 font-bold p-1 hover:bg-slate-100"
            onClick={() => handleAddItem()}
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuItemCard;
