import { useFetch } from "../hooks";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const url =
    "https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json";

  const { profile, categories, instructors, training_classes } = useFetch(url);

  return (
    <AppContext.Provider
      value={{ profile, categories, instructors, training_classes }}
    >
      {children}
    </AppContext.Provider>
  );
};
