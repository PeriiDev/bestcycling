import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

export const ProfileStats = ({ profile }) => {
  const typesStats = ["NIVEL", "CONSTANCIA", "PUNTOS"];
  const values = [profile.level, profile.perseverance, profile.total_points];

  return (
    <Box
      paddingTop={2}
      paddingBottom={2}
      display="flex"
      justifyContent="space-evenly"
    >
      {typesStats.map((type, i) => {
        return (
          <Box
            key={type}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontSize={35} fontFamily="Heavy">
              {values[i]}
            </Typography>
            <Typography fontSize={25} fontFamily="Light">
              {type}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

ProfileStats.propTypes = {
  profile: PropTypes.object.isRequired,
};
