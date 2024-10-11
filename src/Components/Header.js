import { LOGO_IMG } from "../Config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  let totalCartItems = 0;
  cartItems.forEach((item) => {
    totalCartItems += item.cartQty;
  });

  return (
    <div className="flex justify-around bg-pink-50 shadow-lg">
      <img data-testid="logo" className="w-20 p-2" alt="logo" src={LOGO_IMG} />
      <div className="nav-items">
        <ul className="flex p-5 ">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block mx-1 align-bottom"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span
                className="bg-green-500 py-1 px-1.5 text-sm font-bold text-white rounded-md"
                data-testid="cartlength"
              >
                {totalCartItems}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
