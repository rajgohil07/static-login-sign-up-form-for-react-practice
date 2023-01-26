import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { SignUp } from "../SignUp/SignUp";
import { Login } from "../Login/Login";
import {
  homePath,
  loginRoutePath,
  signUpRoutePath,
} from "../../Constant/RouterPaths";

export const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route path={homePath} element={<Home />}></Route>
        <Route path={loginRoutePath} element={<Login />}></Route>
        <Route path={signUpRoutePath} element={<SignUp />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
};
