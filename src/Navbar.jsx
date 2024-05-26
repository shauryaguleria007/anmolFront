import { useTheme } from "@mui/material/styles";
import {  Stack, Paper, Typography } from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

function Navbar() {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        height: "12vh",
        width: 1,
        zIndex: 2,
        bgcolor: "primary.light",
      }}
      elevation={12}
      square
    >
      <Stack
        direction={"row"}
        sx={{
          height: 1,
          maxWidth: 1,
          justifyContent: "space-between",
          alignItems: "center",
          px: 6,
        }}
      >
        <Typography variant="h4" color={"white"}>
          Disease Prediction
        </Typography>
          <CoronavirusIcon fontSize="large" sx={{
            color:"info.dark",
            fontSize:"70px"
          }}/>
      </Stack>
    </Paper>
  );
}

export default Navbar;
