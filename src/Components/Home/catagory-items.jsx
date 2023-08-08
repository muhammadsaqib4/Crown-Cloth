import { Fragment } from "react";
import './catagory-items.css';
import { Link} from "react-router-dom";
// import {ProductContext} from "../Context/ProductContext/ProductContext";
// import { useContext } from "react";


function Home(){

  // const [setCurrentProduct] = useContext(ProductContext);
    return(
        <Fragment>
            <div className="App">
        <h2>Your Deals Marketplace-Geniune | Quality | Savings</h2>
        <div className="container">
          <div className="gridBox">
            <div className="box-box1" id="img-img1">
              <div href="/" className="caption">
                <span>Sneakers</span>
                <span>SHOP NOW</span>
              </div>
            </div>
            <div href="/" className="box-box2" id="img-img2">
              <div href="/" className="caption">
                <span>Hats</span> <span>SHOP NOW</span>
              </div>
            </div>
            <div href="/" className="box-box3" id="img-img3">
              <div className="caption">
                <Link to="/Shop"><span>Jackets</span> <span>SHOP NOW</span></Link>
              </div>
            </div>
            <div href="/" className="box-box4" id="img-img4">
              <div href="/" className="caption">
                <span>Mens</span> <span>SHOP NOW</span>
              </div>
            </div>
            <div href="/" className="box-box5" id="img-img5">
              <div href="/" className="caption">
                <span>Woman</span> <span>SHOP NOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Fragment>
    )
}

export default Home;
