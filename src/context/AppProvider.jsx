import { useFetch } from "../hooks";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const url =
    "https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json";

  const { profile, categories, instructors, training_classes } = useFetch(url);
  const workoutsChecked = new Array(training_classes.length).fill(false);

  return (
    <AppContext.Provider
      value={{ profile, categories, instructors, training_classes, workoutsChecked }}
    >
      {children}
    </AppContext.Provider>
  );
};
