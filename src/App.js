// import logo from './logo.svg';

import { Fragment } from "react";
import "./App.css";
import NavigationBar from "./Components/Navigation/Header";
import Shop from './Components/Shop/shop';
import Home from './Components/Home/catagory-items';
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn/signin";

function App() {
  return (

  
    <Fragment>
      <Routes>
          
          <Route path="/" element={<NavigationBar/>}>
            <Route index element={<Home/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="SignIn" element={<SignIn/>} />
          </Route>
      </Routes>    
      
      
      {/* <Home/> */}
      {/* <Shop/>   */}
      
    </Fragment>


  );
}

export default App;
