import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { SignUp } from "../SignUp/SignUp";
import { Login } from "../Login/Login";
import {
  homeRoutePath,
  loginRoutePath,
  signUpRoutePath,
} from "../../Constant/RouterPaths";

export const RouterComponent = () => {
  console.log("NODE_ENV:=>", process.env.NODE_ENV);
  console.log("PUBLIC_URL:=>", process.env.PUBLIC_URL);
  console.log("Path example:=>", `${process.env.PUBLIC_URL}/lock.png`);
  return (
    <>
      <Routes>
        <Route path={homeRoutePath} element={<Home />}></Route>
        <Route path={loginRoutePath} element={<Login />}></Route>
        <Route path={signUpRoutePath} element={<SignUp />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
};
