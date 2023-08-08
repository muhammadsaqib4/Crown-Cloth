import { Fragment, useContext, useState } from "react";
import "./header.css";
import crownLogo from "./crownLogo.png";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Context/contextComponent";
// import { ProductContext } from "../Context/ProductContext/ProductContext";
import { Cart, CartContext } from "../Context/CartContext";

function NavigationBar() {
  const { CurrentUser } = useContext(UserContext);
  // const { CurrentProduct } = useContext(ProductContext);
  const { Cart } = useContext(CartContext);

  let [showCart, setShowCart] = useState(false);

  function toggleCartIcon() {
    console.log("toggle function called");
    setShowCart(!showCart);
    console.log(showCart);
  }

  function addToCartHandler(item) {
    Cart(item);
    console.log(Cart);
  }

  return (
    <Fragment>
      <div className="Navbar">
        <div className="logo">
          <a href="/">
            {" "}
            <img src={crownLogo} alt="logo" />
          </a>
        </div>

        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              {CurrentUser ? (
                <Link to="/SignOut">Sign Out </Link>
              ) : (
                <Link to="/SignIn">Sign In</Link>
              )}
            </li>
            <li style={{ cursor: "pointer" }}>
              <span
                className="material-symbols-outlined"
                onClick={toggleCartIcon}
              >
                local_mall
              </span>
              {showCart ? (
                <div className="cartContainer">
                  <div className="cart">
                    {Array.isArray(Cart) && Cart.length > 0 ? (
                      Cart.map((element) => (
                        <div key={element.id}>
                          {" "}
                          {/* Add a unique key for each element */}
                          <img src={element.img} alt={element.name} />
                        </div>
                      ))
                    ) : (
                      <p>Cart is empty</p>
                    )}
                    <button className="btn-checkout">Checkout</button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
      <Outlet />

      {/* -----------------------------Cart ------------------------ */}
    </Fragment>
  );
}

export default NavigationBar;
