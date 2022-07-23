import { useContext } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import LensIcon from "@mui/icons-material/Lens";

import { AppContext } from "../../context/AppContext";
import { getInstructorById } from "../../profile";
import { getWorksoutDay } from "../helpers";

export const WorkoutsPage = () => {
  const { profile, instructors, training_classes } = useContext(AppContext);

  const navigate = useNavigate();

  const goToWorkoutPlayer = (instructor, name) => {
    navigate({
      pathname: `/workouts/player`,
      search: createSearchParams({
        name: name,
        instructor: instructor,
      }).toString(),
    });
  };

  const colors = ["#F13B46", "#FF7900", "#FCD900", "#8D88C5"];

  if (!profile) return;

  return (
    <Grid container sx={{ padding: 4, display: "flex", width: "100%" }}>
      {training_classes.map((workout) => {
        const instructor = getInstructorById(
          instructors,
          workout.instructor_id
        );
        const day = getWorksoutDay(workout.published);
        const duration = Math.floor(workout.duration / 60);

        return (
          <Grid
            onClick={() => {
              goToWorkoutPlayer(instructor.name, workout.name);
            }}
            key={workout.name}
            item
            xs={4}
          >
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
                  paddingLeft: 2,
                  fontFamily: "Heavy",
                  fontSize: 26,
                }}
              >
                {workout.name}
                <Typography
                  sx={{
                    fontFamily: "Light",
                  }}
                >
                  {instructor.name}
                </Typography>
              </Box>

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
                <Typography sx={{ fontFamily: "Light" }}>
                  Nivel
                  <LensIcon
                    sx={{ fontSize: 10, paddingLeft: 1, paddingRight: 0.35 }}
                  />
                  <LensIcon
                    color={workout.level >= 2 ? "" : "disabled"}
                    sx={{ fontSize: 10, paddingLeft: 0.5, paddingRight: 0.35 }}
                  />
                  <LensIcon
                    color={workout.level >= 3 ? "" : "disabled"}
                    sx={{ fontSize: 10, paddingLeft: 0.5, paddingRight: 0 }}
                  />
                </Typography>
                <Typography sx={{ fontFamily: "Light" }}>{day}</Typography>
                <Typography sx={{ fontFamily: "Light" }}>
                  Duración {duration}'
                </Typography>
              </Box>

              <div
                style={{
                  borderBottomColor:
                    colors[Math.floor(Math.random() * colors.length)],
                }}
                className="triangle"
              ></div>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
