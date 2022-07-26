import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import "./fonts/TextaLight.ttf";

import { getDataUserProfile } from "./store/slices/userProfile";
import { checkSubscription } from "./store/slices/subscription";

export const BestCycling = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataUserProfile());
    dispatch(checkSubscription());
  }, []);

  return <AppRouter />;
};
