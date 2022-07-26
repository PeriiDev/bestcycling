import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui";
import { WorkoutsPage } from "../../workouts";
import { ProfilePage } from "../pages";
import { VideoWorkoutPage } from "../../workouts";
import { SubscriptionPage } from "../../subscription";
import { PrivateRoute } from "../../router/PrivateRoute";

export const ProfileRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="workouts" element={<WorkoutsPage />} />

        {/* <Route path="workouts/player" element={<VideoWorkoutPage />} />  */}
        <Route
          path="workouts/player"
          element={
            <PrivateRoute>
              <VideoWorkoutPage />
            </PrivateRoute>
          }
        />
        <Route path="subscription" element={<SubscriptionPage />} />

        <Route path="/" element={<Navigate to="/profile" />} />
      </Routes>
    </>
  );
};
//
