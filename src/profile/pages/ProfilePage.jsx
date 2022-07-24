import { Box } from "@mui/system";
import { useSelector } from "react-redux";

import {
  ProfileInfo,
  ProfileStadistics,
  ProfileStats,
  ProfileWorkouts,
} from "../components";

export const ProfilePage = () => {
  const { profile, instructors, training_classes,  } =
    useSelector((state) => state.userProfile);

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
