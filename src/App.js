// import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import NavigationBar from "./Components/Header.js";
// import './src/shirts.jpg';


function App() {
  return (
    <Fragment>
      <NavigationBar/>
    <div className="App">
             <div className="container">
              <div className='box1' id='img-img1'>
                <div className='caption'><span>SHIRTS</span> <span>Shop now</span></div>
              </div>
              <div className='box2' id='img-img2'>
              <div className='caption'><span>HATS</span> <span>Shop now</span></div>
              </div>
              <div className='box3' id='img img3'>box 3</div>
              <div className='box4' id='img img4'>box 4</div>
              <div className='box5' id='img img5'>box 5</div>
             
              
              
             </div>
    
      
    </div>
    </Fragment>
  );
}

export default App;
