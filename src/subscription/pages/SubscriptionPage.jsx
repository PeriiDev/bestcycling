import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Checkbox } from "@mui/material";
import { SubscriptionBoton } from "../components";
import { setAutoSub } from "../../store/slices";

export const SubscriptionPage = () => {
  const dispatch = useDispatch();
  const { auto } = useSelector((state) => state.subscription);

  const onChangeAutoSub = () => {
    dispatch(setAutoSub(!auto));
  };

  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontFamily: "Heavy", fontSize: 60 }}>
        SUSCRÍBETE
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 4,
          paddingBottom: 6,
        }}
      >
        <Checkbox
          name="autoSub"
          value={auto}
          checked={auto}
          onChange={() => onChangeAutoSub()}
          size="large"
          style={{ fill: "white", color: "#FF7900" }}
        />
        <Typography sx={{ fontFamily: "Light", fontSize: 22 }}>
          Autorenovar automáticamente
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 4,
          paddingBottom: 6,
        }}
      >
        <SubscriptionBoton title="1 minuto" timeSub={6} />
        <SubscriptionBoton title="5 minutos" timeSub={300} />
        <SubscriptionBoton title="10 minutos" timeSub={600} />
      </Box>
    </Box>
  );
};
