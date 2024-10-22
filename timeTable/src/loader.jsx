import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loader() {
  return (
    <div>
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Horizontally center
          alignItems: "center", // Vertically center
          backgroundColor: "transparent", // Optional: white background
        }}
      >
        <h1>Salam</h1>
        <LinearProgress color="success" sx={{ width: "40%" }} />
        <h3>Namaz Is Mandatory..</h3>
      </Box>
    </div>
  );
}
