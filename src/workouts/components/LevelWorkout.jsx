import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import LensIcon from "@mui/icons-material/Lens";

export const LevelWorkout = ({ level }) => {
  return (
    <Typography sx={{ fontFamily: "Light" }}>
      Nivel
      <LensIcon sx={{ fontSize: 10, paddingLeft: 1, paddingRight: 0.35 }} />
      <LensIcon
        color={level >= 2 ? "" : "disabled"}
        sx={{
          fontSize: 10,
          paddingLeft: 0.5,
          paddingRight: 0.35,
        }}
      />
      <LensIcon
        color={level >= 3 ? "" : "disabled"}
        sx={{ fontSize: 10, paddingLeft: 0.5, paddingRight: 0 }}
      />
    </Typography>
  );
};

LevelWorkout.propTypes = {
  level: PropTypes.number.isRequired,
};
