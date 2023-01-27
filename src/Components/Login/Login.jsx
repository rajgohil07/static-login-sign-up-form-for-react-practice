import "./Login.css";
import { Link } from "react-router-dom";
import { publicURLPath, signUpRoutePath } from "../../Constant/RouterPaths";

export const Login = () => {
  return (
    <div className="mainLoginWrapper">
      <div className="login">
        <h2 className="loginText">Login</h2>

        <div className="inputTypeMerger">
          <img src={`${publicURLPath}/email.png`} alt="Email icon" />
          <input type="text" placeholder="Email" />
        </div>

        <div className="inputTypeMerger passwordInput">
          <img src={`${publicURLPath}/lock.png`} alt="Password icon" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="checkBoxWrapper">
          <input type="checkbox" />
          <h5> Remember me</h5>
        </div>

        <div className="loginButtonWrapper">
          <button>Login</button>
        </div>

        <div className="textLoginSuggest">
          <h5>Or login with</h5>
        </div>

        <div className="googleFacebookWrapper">
          <div className="facebook">
            <img src={`${publicURLPath}/facebook.png`} alt="Facebook logo" />
            <h5 className="companyName">Facebook</h5>
          </div>
          <div className="google">
            <img src={`${publicURLPath}/google.png`} alt="Google logo" />
            <h5 className="companyName">Google</h5>
          </div>
        </div>

        <div className="signUpTextWrapper">
          <h5>
            Not a member? <Link to={signUpRoutePath}>Sign up now</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};
