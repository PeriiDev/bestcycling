import { AppRouter } from "./router/AppRouter";
import "./fonts/TextaLight.ttf";
import { AppProvider } from "./context/AppProvider";

export const BestCycling = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
