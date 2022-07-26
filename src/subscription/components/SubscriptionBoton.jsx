import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { updateSubscription } from "../../store/slices";

export const SubscriptionBoton = ({ title, timeSub }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auto } = useSelector((state) => state.subscription);

  const newSubscription = () => {
    dispatch(updateSubscription(auto, timeSub));
    navigate("/workouts");
  };

  return (
    <Box
      onClick={() => newSubscription()}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 2,
        marginRight: 2,
      }}
    >
      <Typography sx={{ color: "orange", fontFamily: "Heavy", fontSize: 50 }}>
        {title}
      </Typography>
    </Box>
  );
};

SubscriptionBoton.propTypes = {
  title: PropTypes.string.isRequired,
};
