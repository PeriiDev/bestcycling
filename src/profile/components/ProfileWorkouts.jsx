import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, Typography, Grid } from "@mui/material";

import {
  getLastWorkOuts,
  getInstructorById,
  getWorksoutDate,
} from "../helpers";

export const ProfileWorkouts = ({ workouts, instructors }) => {
  const navigate = useNavigate();
  const lastWorkouts = getLastWorkOuts(workouts);

  const goToWorkoutsPage = () => {
    navigate("/workouts");
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        paddingTop={2}
        paddingBottom={2}
      >
        <Typography
          sx={{
            fontFamily: "Heavy",
            fontSize: 30,
          }}
        >
          ÚLTIMAS CLASES
        </Typography>
        <Button
          onClick={goToWorkoutsPage}
          variant="text"
          size={"large"}
          sx={{
            backgroundColor: "#FF7900",
            color: "white",
            paddingLeft: 3,
            paddingRight: 3,
            fontWeight: 600,
            fontFamily: "Heavy",
            fontSize: 18,
          }}
        >
          VER TODAS
        </Button>
      </Box>

      <Grid container spacing={2}>
        {lastWorkouts.map((workout) => {
          const { name, published, instructor_id } = workout;
          const workoutDate = getWorksoutDate(published);
          const instructor = getInstructorById(instructors, instructor_id);
          return (
            <Grid key={name} item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 1.5,
                }}
              >
                <img src={`/assets/bestcycling.png`} alt="bestcycling" />
                <Typography sx={{ color: "#757575", fontFamily: "Heavy" }}>
                  {workoutDate}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: 1.5,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#2F2F2F",
                }}
              >
                <Typography sx={{ fontFamily: "Heavy", fontSize: 22 }}>
                  {name}
                </Typography>
                <Typography sx={{ fontFamily: "Light" }}>
                  {instructor.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
