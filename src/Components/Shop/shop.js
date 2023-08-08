import { Fragment, useContext } from "react";
import "./shop.css";
// import { Link} from "react-router-dom";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import { CartContext } from "../Context/CartContext";

function Shop() {
  // const {ProductContext} = useContext(ProductContext);
  const { Cart, setCart } = useContext(CartContext);

  let { CurrentProduct, setCurrentProduct } = useContext(ProductContext);

  function productHandler(item) {
    setCart(item);
    console.log(Cart);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="productName">
          <h1>J A C K E T S</h1>
        </div>

        <div className="productItems">
          {/* <div className="ImgDiv">
            <div className="productImg Img1"> */}

          {CurrentProduct.map((el) => (
            <div className="ImgDiv">
              <div className="productImg">
                <img src={el.img} alt="/" />
                <div className="addToCart">
                  <a
                    onClick={(item) => {
                      productHandler(el);
                    }}
                  >
                    ADD TO CARD
                  </a>
                </div>
              </div>
              <div className="productCaption">
                <span>{el.name} </span>
                <span>{el.price}</span>
              </div>
            </div>
          ))}

          {/* <div className="ImgDiv">
            <div className="productImg Img2">
              <div className="addToCart">ADD TO CART </div>
            </div>
            <div className="productCaption">
              <span>Black Jeans Jacket </span>
              <span>125</span>
            </div>
          </div>

          <div className="ImgDiv">
            <div className="productImg Img3">
              <div className="addToCart">
                <a href="/">ADD TO CARD</a>
              </div>
            </div>
            <div className="productCaption">
              <span>Grey Jeans Jacket </span>
              <span>125</span>
            </div>
          </div>

          <div className="ImgDiv">
            <div className="productImg Img4">
              <div className="addToCart">
                <a href="/">ADD TO CARD</a>
              </div>
            </div>
            <div className="productCaption">
              <span>Black Jeans Shearling </span>
              <span>125</span>
            </div>
          </div>

          <div className="ImgDiv">
            <div className="productImg Img5">
              <div className="addToCart">ADD TO CARD</div>
            </div>
            <div className="productCaption">
              <span>Blue Jeans Jacket </span>
              <span>125</span>
            </div>
          </div>

          <div className="ImgDiv">
            <div className="productImg Img6">
              <div className="addToCart">
                <a href="/">ADD TO CARD</a>
              </div>
            </div>
            <div className="productCaption">
              <span>Brown Trech Jacket </span>
              <span>125</span>
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}
export default Shop;
