import { Fragment} from "react";
import './header.css';
import crownLogo from './crownLogo.png';
import { Link, Outlet} from "react-router-dom";


function NavigationBar(){
    return(
        <Fragment>
        <div className="Navbar">
            <div  className="logo">
             <a href="/"> <img src={crownLogo} alt="logo"/></a>  
            </div>

            <div className="menu">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to="/SignIn">Sign in</Link></li>
                <li><a href="/" ><span class="material-symbols-outlined">local_mall</span></a></li>
                </ul>
                
            </div>
            
           </div>
           <Outlet/>
           
        </Fragment>
    
)

    };
    export default NavigationBar;
    