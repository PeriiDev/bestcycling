import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography, Avatar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { getCheckedWorkouts } from "../helpers";
import { getInstructorById } from "../../profile";
import { setNextWorkout } from "../../store/slices/userProfile";
import { useCounter } from "../../hooks";
import { Player } from "../components";
import {
  decrementTime,
  finishedSubscription,
  refreshSubscription,
  refreshTime,
} from "../../store/slices";

export const VideoWorkoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    dispatch(refreshSubscription());
    navigate(-1);
  };

  const { counter, decrement, resetCounter } = useCounter(5);
  const [iteration, setIteration] = useState(0);

  const { active, auto, time, extra_time } = useSelector(
    (state) => state.subscription
  );
  const { instructors, training_classes } = useSelector(
    (state) => state.userProfile
  );

  console.log(extra_time);

  const myWorkouts = useMemo(
    () => getCheckedWorkouts(training_classes),
    [training_classes]
  );

  const instructor = useMemo(
    () => getInstructorById(instructors, myWorkouts[iteration].instructor_id),
    [training_classes]
  );

  if (!active) return navigate("/subscription");

  useEffect(() => {
    //Decrement one second on my sub
    if (counter <= 4) {
      dispatch(decrementTime(1));
    }
    if(time === 0 && auto) {
      dispatch(refreshTime())
    }
    if (counter === 0) {
      if (time === 0) {
        dispatch(finishedSubscription());
      }
      //Skip the current video and play next if exists
      dispatch(setNextWorkout(myWorkouts[iteration].id));
      setIteration(iteration + 1);

      dispatch(refreshSubscription());

      if (iteration + 1 === myWorkouts.length) {
        navigate("/workouts", { replace: true });
      } else {
        resetCounter();
        navigate("/workouts/player", { replace: true });
      }
    }
    if (counter > 0) {
      setTimeout(decrement, 1000);
    }
  }, [counter]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          padding: 6,
        }}
      >
        <Avatar
          onClick={goBack}
          sx={{
            backgroundColor: "black",
            width: 60,
            height: 60,
            marginRight: 4,
          }}
        >
          <ArrowBackIosIcon sx={{ paddingLeft: 1.5, width: 40, height: 40 }} />
        </Avatar>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontFamily: "Heavy", fontSize: 40 }}>
            {myWorkouts[iteration].name}
          </Typography>
          <Typography sx={{ fontFamily: "Heavy", fontSize: 22 }}>
            {instructor?.name}
          </Typography>
        </Box>
      </Box>

      <Player counter={counter} />
    </>
  );
};
