import { Box } from "@mui/material";
import insta from "../assets/noun_instagram_3350460 1.svg";

export const Footer = () => {
  return (
    <Box sx={{ marginTop: "70px", backgroundColor: "black", color: "white" }}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Siganos en las redes</p>
          <img src={insta} alt="" style={{ width: "35px" }} />
        </Box>
        <div
          style={{
            width: "5px",
            height: "25vh",
            backgroundColor: "grey",
            marginTop: "10px",
          }}
        ></div>
        <Box
          sx={{
            width: "65%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p>Contacto</p>
          <p>Quien Somos</p>
          <p>Productos</p>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <p style={{ marginBottom: "15px" }}>
          {" "}
          © all rights reserved Raspa Dogs
        </p>
      </Box>
    </Box>
  );
};
