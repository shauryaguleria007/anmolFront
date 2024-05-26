import Stack from "@mui/material/Stack";
import Navbar from "./Navbar.jsx";
import DiseasePrediction from "./DiseasePrediction.jsx";
function App() {
  return (
    <Stack
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar />
      <DiseasePrediction />
    </Stack>
  );
}

export default App;
