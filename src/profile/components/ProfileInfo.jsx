import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const ProfileInfo = ({ profile }) => {
  return (
    <Box height="300px" display="flex">
      <Box>
        <Avatar
          src={`/assets/logo.png`}
          sx={{ width: 250, height: 250, paddingLeft: 6, paddingRight: 4 }}
        ></Avatar>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        paddingTop={4}
      >
        <Typography
          fontWeight={900}
          fontFamily="Heavy"
          fontSize={50}
          paddingLeft={1}
        >
          {profile.name}
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="end">
          <LocationOnIcon sx={{ fontSize: 40, color: "#B9B9B9" }} />
          <Typography color={"#B9B9B9"} fontSize={20}>
            Valencia, Spain
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
