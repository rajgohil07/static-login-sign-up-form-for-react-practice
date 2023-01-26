import { useNavigate } from "react-router-dom";
import { loginRoutePath } from "../../Constant/RouterPaths";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();

  // Use the useEffect hook to redirect the user to the login screen
  useEffect(() => {
    navigate(loginRoutePath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};
