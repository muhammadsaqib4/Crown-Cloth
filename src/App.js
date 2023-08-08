// import logo from './logo.svg';

import { Fragment } from "react";
import "./App.css";
import NavigationBar from "./Components/Navigation/Header";
import Shop from './Components/Shop/shop';
import Home from './Components/Home/catagory-items';
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn/signin";
// import AddtoCart from './Components/Cart/cart'
// import { Navigate } from "react-router-dom";

// import { useContext } from "react";
// import { userContext } from "./Components/Context/contextComponent";



function App() {
  return (

    
    <Fragment>
      
      <Routes>
          
          <Route path="/" element={<NavigationBar/>}>
            <Route index element={<Home/>}/>
            <Route path="shop" element={<Shop/>}/>
            {/* <Route path="shop" element={<Home/>}/> */}
            <Route path="SignIn" element={<SignIn/>} />
            <Route path="SignOut" element={<SignIn/>} />
            {/* <Route path="Header" element={<Cart/>} /> */}
          </Route>
          {/* <Route '/sigin' element={SignIn(); */}
             
          
      </Routes>    
      
      {/* <AddtoCart/>  */}
       
      
    </Fragment>


  );
}

export default App;