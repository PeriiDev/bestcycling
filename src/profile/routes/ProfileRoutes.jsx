import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui";
import { WorkoutsPage } from "../../workouts";
import { ProfilePage } from "../pages";
import { VideoWorkoutPage } from "../../workouts";

export const ProfileRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="workouts" element={<WorkoutsPage />} />

        <Route path="workouts/player" element={<VideoWorkoutPage />} />
 
        <Route path="/" element={<Navigate to="/profile" />} /> 
      </Routes>
    </>
  );
};
