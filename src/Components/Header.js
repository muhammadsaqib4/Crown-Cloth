import { Fragment } from "react";
import './header.css';
import './crownLogo.png';




function NavigationBar(){
    return(
        <Fragment>
        <div className="Navbar">
            <div className="logo">
                <img src="crownLogo.png" alt="logo"/>
            </div>

            <div className="menu">
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Shop</a></li>
                <li><a href="/">Sign in</a></li>
                <li><a href="/" ><i class="fa-regular fa-bag-shopping"></i></a></li>
                </ul>
                
            </div>
           </div>

           
        </Fragment>
    
)

    };
    export default NavigationBar;
    