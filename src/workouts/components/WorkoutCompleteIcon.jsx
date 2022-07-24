import { Box } from "@mui/system";

export const WorkoutCompleteIcon = ({title}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 2,
        padding: 0.5,
        backgroundColor: "#FF7900",
        position: "absolute",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        fontFamily: "Heavy",
        bottom: 75,
      }}
    >
      {title}
    </Box>
  );
};
