import { AppRouter } from "./router/AppRouter";
import "./fonts/TextaLight.ttf";
import { AppProvider } from "./context/AppProvider";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataUserProfile } from "./store/slices/userProfile/thunks";

export const BestCycling = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDataUserProfile());
  }, []);

  return (
    // <AppProvider>
    <AppRouter />
    // </AppProvider>
  );
};
