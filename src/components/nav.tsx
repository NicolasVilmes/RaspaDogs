import { Box, Button } from "@mui/material";
import dogfeet from "../assets/dog_feet.svg";
import whats from "../assets/whatsapp-logo.svg";
import "../styles/nav.css";

export const Navbar = () => {
  return (
    <nav id="nav">
      <Box sx={{ display: "inline-flex" }}>
        <h1 className="tittle">
          Raspa D
          <img src={dogfeet} className="feet" alt="logo" />
          gs
        </h1>
      </Box>
      <div className="left">
        <li>
          <a href="#AboutUS">Quienes Somos</a>
        </li>
        <li>
          <a href="#Products">Productos</a>
        </li>
        <li>
          <a href="#FindUs">Encuentranos</a>
        </li>
        <Button
          href="ttps://walink.co/2ac24e"
          variant="contained"
          sx={{
            backgroundColor: "rgb(40, 209, 70)",
            marginLeft: "60px",
          }}
        >
          <a style={{ color: "#ffff" }}>Contactenos</a>
          <img src={whats} alt="Whatsapp Logo" className="whats" />
        </Button>
      </div>
    </nav>
  );
};
