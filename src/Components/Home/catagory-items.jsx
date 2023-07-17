import { Fragment } from "react";
import './catagory-items.css';


function Home(){
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
              <div href="/" className="caption">
                <span>Jackets</span> <span>SHOP NOW</span>
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
