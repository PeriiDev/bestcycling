import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Grid, Checkbox } from "@mui/material";
import { Box } from "@mui/system";

import { getInstructorById } from "../../profile";
import { getWorksoutDay } from "../helpers";
import {
  BorderTriangle,
  WorkoutCompleteIcon,
  PlayerButton,
  LevelWorkout,
} from "../components";
import { setCheckedWorkout } from "../../store/slices/userProfile";

export const WorkoutsPage = () => {
  const dispatch = useDispatch();
  const { instructors, training_classes } = useSelector(
    (state) => state.userProfile
  );

  const [anyWorkoutSelected, setAnyWorkoutSelected] = useState(false);

  const onSelectWorkout = (index) => {
    dispatch(setCheckedWorkout(index));
  };

  useEffect(() => {
    setAnyWorkoutSelected(training_classes.some((t) => t.checked === true));
  }, [training_classes]);

  return (
    <>
      <PlayerButton anyWorkoutSelected={anyWorkoutSelected} />

      <Grid container sx={{ padding: 4, display: "flex" }}>
        {training_classes.map((workout, index) => {
          const instructor = getInstructorById(
            instructors,
            workout.instructor_id
          );
          const day = getWorksoutDay(workout.published);
          const duration = Math.floor(workout.duration / 60);
          const isChecked = workout.checked;

          return (
            <Grid key={workout.name} item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#2F2F2F",
                  marginRight: 2,
                  marginBottom: 2,
                  position: "relative",
                  paddingBottom: 4,
                }}
              >
                <Box
                  sx={{
                    width: "90%",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                  }}
                >
                  <Checkbox
                    checked={isChecked}
                    name={workout.id.toString()}
                    value={workout.checked}
                    onChange={() => onSelectWorkout(index)}
                    style={{ fill: "white", color: "#FF7900" }}
                  />

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontFamily: "Heavy", fontSize: 26 }}>
                      {workout.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Light",
                      }}
                    >
                      {instructor.name}
                    </Typography>
                  </Box>
                </Box>

                {workout.completed && (
                  <WorkoutCompleteIcon title={"Completado"} />
                )}
                <img src={workout.image} alt="" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 1,
                  }}
                >
                  <LevelWorkout level={workout.level} />

                  <Typography sx={{ fontFamily: "Light" }}>{day}</Typography>
                  <Typography sx={{ fontFamily: "Light" }}>
                    Duración {duration}'
                  </Typography>
                </Box>
                <BorderTriangle />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
