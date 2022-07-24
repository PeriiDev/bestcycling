import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const Player = ({ counter }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        paddingTop: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 600,
          backgroundColor: "black",
        }}
      >
        <Typography sx={{ fontFamily: "Heavy", fontSize: 200 }}>
          {counter}
        </Typography>
      </Box>
    </Box>
  );
};

Player.propTypes = {
  counter: PropTypes.number.isRequired,
};
