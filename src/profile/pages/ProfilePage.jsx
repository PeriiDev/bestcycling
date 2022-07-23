import { Box } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import {
  ProfileInfo,
  ProfileStadistics,
  ProfileStats,
  ProfileWorkouts,
} from "../components";

export const ProfilePage = () => {
  const { profile, instructors, training_classes } = useContext(AppContext);

  if (!profile) return;

  return (
    <>
      <Box padding={4}>
        <ProfileInfo profile={profile} />
        <hr />
        <ProfileStats profile={profile} />
        <hr />
        <ProfileStadistics profile={profile} />
        <hr />
        <ProfileWorkouts
          workouts={training_classes}
          instructors={instructors}
        />
      </Box>
    </>
  );
};
