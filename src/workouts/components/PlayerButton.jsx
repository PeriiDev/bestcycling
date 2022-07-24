import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Typography } from "@mui/material";

export const PlayerButton = ({ anyWorkoutSelected }) => {
  const navigate = useNavigate();

  const goToWorkoutPlayer = () => {
    navigate({ pathname: `/workouts/player` });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        paddingTop: 3,
        paddingRight: 6,
      }}
    >
      <button
        onClick={() => {
          goToWorkoutPlayer();
        }}
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
    </Box>
  );
};

PlayerButton.propTypes = {
  anyWorkoutSelected: PropTypes.bool.isRequired,
};
