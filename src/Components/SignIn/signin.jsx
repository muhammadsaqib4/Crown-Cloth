import { Fragment } from "react";
import "./signin.css";
import {signInWithGooglePopup} from "../Utility/Firebase/firebaseDB.js";


function SignIn() {
  return (
    <Fragment>
      <div className="container">
        <div className="Container flex">
          <div className="SignIn">
            <h2>I already have an account</h2>
            <h4>Sign in with your email and password</h4>

            <form>
              <label className="email">Email</label>
            <div>
              <input type="text" name="email" placeholder="Email"/>
            </div>
              

              <label>Password</label>
              <input type="text" name="password" placeholder="Password" />
            </form>

            <div className="buttonFlex">
              <span>
                <button type="submit" id="btn-signin">
                  SIGN IN
                </button>
              </span>
              <span>
                <button type="submit" id="btn-google" onClick={signInWithGooglePopup}>
                  GOOGLE SIGN IN
                </button>
              </span>
            </div>
          </div>

          <div className="Signup">
            <h2>I do not have an account</h2>
            <h4>Sign up with your email and password</h4>

            <form>
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter Name" />

              <label>Email</label>
              <input type="text" name="email" placeholder="Email" />

              <label>Password</label>
              <input type="text" name="password" placeholder="Password" />

              <label>Confirm Password</label>
              <input
                type="text"
                name="password"
                placeholder="Confirm Password"
              />
            </form>
            <span>
              <button type="submit" id="btn signup">
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
