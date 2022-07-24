import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

export const ProfileStadistics = ({ profile }) => {
  const valuesStadistics = [
    profile.stamina_points,
    profile.strength_points,
    profile.flexiblity_points,
    profile.mind_points,
  ];
  const typesStadistics = ["Resistencia", "Fuerza", "Flexibilidad", "Mente"];
  const colors = ["#FCD900", "#F13B46", "#69AE00", "#1D8CB9"];

  return (
    <Box
      display="flex"
      justifyContent="center"
      paddingTop={5}
      paddingBottom={5}
    >
      {typesStadistics.map((stat, i) => {
        return (
          <Box
            key={stat}
            paddingLeft={1.5}
            paddingRight={1.5}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              className="letter-shadow"
              sx={{
                backgroundColor: colors[i],
                width: 100,
                height: 100,
                fontSize: 40,
                fontWeight: 900,
              }}
            >
              {valuesStadistics[i]}
            </Avatar>
            <Typography paddingTop={1}>{stat}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

ProfileStadistics.propTypes = {
  profile: PropTypes.object.isRequired,
};
