import React from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import image from "../img/clearLogo.png";
export default function Loader() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "gold" }}>Namaz Is Mandatory..</h3>
      <CircularProgress
        size={100} // Set a larger size
        thickness={5} // Thicker progress circle
        sx={{ color: "white" }} // Set color to secondary (you can change this)
      />
      <div style={{ alignContent: "flex-end", marginTop: "15em" }}>
        <img src={image} alt="Hlogo" style={{ width: "4em", margin: "0" }} />
        <h4 style={{ color: "black", margin: "0" }}>
          <i>Hamza Production</i>
        </h4>
      </div>
    </Box>
  );
}
