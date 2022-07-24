import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import "./fonts/TextaLight.ttf";

import { getDataUserProfile } from "./store/slices/userProfile";

export const BestCycling = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDataUserProfile());
  }, []);

  return (
  
    <AppRouter />

  );
};
