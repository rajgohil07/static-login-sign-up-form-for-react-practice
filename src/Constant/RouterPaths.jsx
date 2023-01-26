export const loginRoutePath =
  process.env.NODE_ENV === "development"
    ? "/login"
    : "/static-login-sign-up-form-for-react-practice/login";

export const signUpRoutePath =
  process.env.NODE_ENV === "development"
    ? "/sign-up"
    : "/static-login-sign-up-form-for-react-practice/sign-up";

export const homePath =
  process.env.NODE_ENV === "development"
    ? "/"
    : "/static-login-sign-up-form-for-react-practice/";
