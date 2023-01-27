import { useState } from "react";
import { loginRoutePath, publicURLPath } from "../../Constant/RouterPaths";
import "./SignUp.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [isPasswordVisible, changePasswordVisibility] = useState(false);

  return (
    <>
      <div className="signUpWrapper">
        <div className="signUpBackgroundWrapper">
          <div className="signUpBox">
            <h3>Signup</h3>

            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Create password" />

            <div className="confirmPassword">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Confirm password"
              />
              <img
                onClick={() =>
                  changePasswordVisibility((prevState) => !prevState)
                }
                src={
                  isPasswordVisible
                    ? `${publicURLPath}/closed-eye.png`
                    : `${publicURLPath}/eye.png`
                }
                alt={isPasswordVisible ? "Hide password" : "Display password"}
                title={isPasswordVisible ? "Hide password" : "Display password"}
              />
            </div>

            <div className="signUpButton">
              <button>Signup</button>
            </div>

            <div className="loginLinker">
              <p>
                Already have an account?
                <span>
                  <Link to={loginRoutePath}> Login</Link>
                </span>
              </p>
            </div>

            {/* Ref: https://stackoverflow.com/a/26634224 */}
            <div className="separator">
              <p>Or</p>
            </div>

            <div className="facebookButton">
              <img
                src={`${publicURLPath}/fb-circle.png`}
                title="Login With Facebook"
                alt="Facebook logo"
              />
              <h5>Login with Facebook</h5>
            </div>

            <div className="googleButton">
              <img
                src={`${publicURLPath}/google.png`}
                title="Login With Google"
                alt="Google logo"
              />
              <h5>Login with Google</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
