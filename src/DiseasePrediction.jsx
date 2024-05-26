import { useContext, useRef } from "react";
import { AppContext } from "./AppContext";
import { Box, Stack, Paper, Button, Typography } from "@mui/material";

function PaperTemplate({ Child }) {
  return (
    <Paper
      sx={{
        height: "66.6vh",
        width: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      variant="outlined"
      square
    >
      <Child />
    </Paper>
  );
}
function DiseasePrediction() {
  const { getFile } = useContext(AppContext);
  return (
    <Stack
      sx={{
        justifyContent: "space-around",
      }}
      direction="row"
      spacing={0}
    >
      <PaperTemplate
        Child={getFile() == null ? UploadComponent : PreviewComponent}
      />

      <PaperTemplate Child={ResultComponent} />
    </Stack>
  );
}

function UploadComponent() {
  const { setFile } = useContext(AppContext);
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(URL.createObjectURL(e.dataTransfer.files[0]));
  };
  const uploadFile = (e) => setFile(URL.createObjectURL(e.target.files[0]));

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        hidden
        accept="image/*"
        onChange={uploadFile}
      />
      <Stack
        sx={{
          height: 1,
          width: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            height: 0.66,
            width: 0.66,
            outline: "1px dashed black",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Typography
            variant="h3"
            sx={{
              opacity: 0.1,
            }}
          >
            Drag files here.
          </Typography>
        </Box>
        <Button variant="contained" onClick={() => inputRef?.current?.click()}>
          Upload file
        </Button>
      </Stack>
    </>
  );
}
function PreviewComponent() {
  const { getFile, resetFile } = useContext(AppContext);

  return (
    <Stack spacing={2}>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
        }}
        alt="The house from the offer."
        src={getFile()}
      />
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
        }}
        direction={"row"}
      >
        <Button color="primary" variant="contained">
          predict{" "}
        </Button>
        <Button onClick={resetFile} color="warning" variant="outlined">
          cancel
        </Button>
      </Stack>
    </Stack>
  );
}
function ResultComponent() {
  return <> show result here </>;
}

export default DiseasePrediction;
