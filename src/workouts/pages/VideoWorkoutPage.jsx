import { Box } from "@mui/system";
import { Typography, Avatar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export const VideoWorkoutPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const name = params.get("name");
  const instructor = params.get("instructor");

  const goBack = () => navigate(-1);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          padding: 6,
        }}
      >
        <Avatar
          onClick={goBack}
          sx={{
            backgroundColor: "black",
            width: 60,
            height: 60,
            marginRight: 4,
          }}
        >
          <ArrowBackIosIcon sx={{ paddingLeft: 1.5, width: 40, height: 40 }} />
        </Avatar>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontFamily: "Heavy", fontSize: 40 }}>
            {name}
          </Typography>
          <Typography sx={{ fontFamily: "Heavy", fontSize: 22 }}>
            {instructor}
          </Typography>
        </Box>
      </Box>

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
          <Typography sx={{ fontFamily: "Heavy", fontSize: 200 }}>5</Typography>
        </Box>
      </Box>
    </>
  );
};
