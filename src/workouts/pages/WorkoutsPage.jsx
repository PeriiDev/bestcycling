import { useContext, useEffect, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Typography, Grid, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import LensIcon from "@mui/icons-material/Lens";

import { useDispatch, useSelector } from "react-redux";

import { AppContext } from "../../context/AppContext";
import { getInstructorById } from "../../profile";
import { getWorksoutDay } from "../helpers";
import { WorkoutCompleteIcon } from "../components";
import { useForm } from "../../hooks";
import { setCheckedWorkout } from "../../store/slices/userProfile/userProfileSlice";
import { PlayerButton } from "../components/PlayerButton";

export const WorkoutsPage = () => {
  const dispatch = useDispatch();
  const { profile, instructors, training_classes } = useSelector(
    (state) => state.userProfile
  );

  const [anyWorkoutSelected, setAnyWorkoutSelected] = useState(false);

  const {} = useForm({});

  // const navigate = useNavigate();
  // const goToWorkoutPlayer = (instructor, name) => {
  //   navigate({
  //     pathname: `/workouts/player`,
  //     search: createSearchParams({
  //       name: name,
  //       instructor: instructor,
  //     }).toString(),
  //   });
  // };



  const onSelectWorkout = (index) => {
    dispatch(setCheckedWorkout(index));
  };

  useEffect(() => {
    setAnyWorkoutSelected(training_classes.some((t) => t.checked === true));
    console.log(`Algun video seleccionado: ${anyWorkoutSelected}`);
  }, [training_classes]);

  return (
    <>
    <PlayerButton anyWorkoutSelected={anyWorkoutSelected}/>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          paddingTop: 3,
          paddingRight: 6,
        }}
      >
        <button
          onClick={() => console.log("asdasd")}
          disabled={!anyWorkoutSelected}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#222222",
            padding: 10,
          }}
        >
          <PlayArrowOutlinedIcon
            sx={{
              marginRight: 1,
              fontSize: 30,
              color: !anyWorkoutSelected ? "#d5a87a" : "orange",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Heavy",
              fontSize: 18,
              color: !anyWorkoutSelected ? "#bbb7b7" : "white",
            }}
          >
            REPRODUCIR AUTOMÁTICAMENTE
          </Typography>
        </button>
      </Box> */}

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
                  {/* CHECKBOX */}
                  <Checkbox
                    checked={isChecked}
                    name={workout.id.toString()}
                    value={workout.checked}
                    onChange={() => onSelectWorkout(index)}
                    style={{ fill: "white", color: "#FF7900" }}
                  ></Checkbox>

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

                {workout.completed && <WorkoutCompleteIcon title={"Completado"} />}

                <img

                  src={workout.image}
                  alt=""
                />
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
                      sx={{
                        fontSize: 10,
                        paddingLeft: 0.5,
                        paddingRight: 0.35,
                      }}
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
                {/* AQUI VA EL TRAINGULO DE COLORES */}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
