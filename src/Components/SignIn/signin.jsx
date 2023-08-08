import { Fragment, useState, useEffect } from "react";
import React from "react";
import "./signin.css";

import {createUserDocumentFromAuth, signInWithGooglePopup, signUpForm, SignInForm} from "../Utility/Firebase/firebaseDB.js";


function SignIn()  {


  const googleSign = async () => {
    const {user} = await signInWithGooglePopup();
    const response = await createUserDocumentFromAuth(user);
    console.log("response:", response);

    
  };

  const  [userData, setUserData] =useState({});
  
    
   const changeHandler = (e)=> {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  }
  useEffect(() => {
    console.log(userData)
  }, [userData])
  
    
  const signUpHandler = async (event)=>{
    event.preventDefault();
  let data = await signUpForm(userData.displayName, userData.email, userData.password);
   console.log(data);
   const response = await createUserDocumentFromAuth(data.user);
    console.log("response:", response);
   
  //  setCurrentUser(signUpUser);
    
  };

  const signInHandler = async (event)=> {
    event.preventDefault();
    let signInData = await SignInForm(userData.displayName, userData.email, userData.password);
    const response = await createUserDocumentFromAuth(signInData.user)
    console.log("Response", response);
  }

 
  

  // const submitHandler = async (e)=>{
  //   e.preventDefault();

  //   const {displayName, email, password, confirmPassword,} = userData;

  //   if(fullName===""|| email ===''|| password===""|| confirmPassword===""){
  //     alert('All fields are must be filled')
      
  //   }
  //   else if(password!== confirmPassword){
  //     alert("Password do not be match")
  //   }
  //   else if (password.length()>= 6 || password.length()!== 6){
  //     alert("Password must greater than 6 characters")
  //   }
  //   else{

  //   }
  // }
  
  

  
  return (
    <Fragment>
      <div className="container">
        <div className="Container flex">
          <div className="SignIn">
            <h1>SignIn</h1>
            <h3>I already have an account</h3>
            <h4>Sign in with your email and password</h4>

            <form>
              <label className="email">Email</label>
          
              <input type="text" name="email" placeholder="Email" onChange={changeHandler}/>
            
              

              <label>Password</label>
              <input type="text" name="password" placeholder="Password" onChange={changeHandler} />
            </form>

            <div className="buttonFlex">
              <span>
                <button type="submit" id="btn-signin" onClick={signInHandler} >
                  SIGN IN
                </button>
              </span>
              <span>
                <button type="submit" id="btn-google" onClick={googleSign}>
                  GOOGLE SIGN IN
                </button>
              </span>
            </div>
          </div>


{/* ---------------------------------SignUp Form---------------------------- */}

          <div className="Signup">
          <h1>Sign Up</h1>
            <h2>I do not have an account</h2>
            <h4>Sign up with your email and password</h4>

            <form>
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter Name"  onChange={changeHandler} />

              <label>Email</label>
              <input type="text" name="email" placeholder="Email" onChange={changeHandler} />

              <label>Password</label>
              <input type="password" name="password" placeholder="Password" onChange={changeHandler} />

              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={changeHandler}
              />
            </form>
            <span>
              <button type="submit" id="btn-signup" onClick={signUpHandler}>
                SIGN UP
              </button>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignIn;
