import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const SubscriptionButton = ({ title }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => {
        navigate("/subscription");
      }}
      sx={{
        padding: 1.2,
        paddingLeft: 2,
        paddingRight: 2,
        fontFamily: "Heavy",
        backgroundColor: "#FF7900",
        fontSize: 22,
        borderRadius: 1,
      }}
    >
      {title}
    </Box>
  );
};

SubscriptionButton.propTypes = {
  title: PropTypes.string,
};
