import { Route, Routes } from "react-router-dom";
import { ProfileRoutes } from "../profile";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ProfileRoutes />} />
      </Routes>
    </>
  );
};
