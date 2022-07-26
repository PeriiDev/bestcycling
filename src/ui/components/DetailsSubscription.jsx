import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { formatSubscriptionTime } from "../helpers";

export const DetailsSubscription = ({ time }) => {
  const navigate = useNavigate();
  return (
    <Typography
      onClick={() => navigate("/subscription")}
      sx={{ paddingRight: 2, fontFamily: "Heavy", fontSize: 22 }}
    >
      SUSCRIPCIÓN {formatSubscriptionTime(time)}
    </Typography>
  );
};

DetailsSubscription.propTypes = {
  time: PropTypes.number.isRequired,
};
