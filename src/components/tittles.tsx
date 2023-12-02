import { Box } from "@mui/material";
import dogfeet from "../assets/dog_feet.svg";
import "../styles/tittles.css";

type Props = {
  label: string;
  positionX: string;
  positionY: string;
};

export const Tittles = ({ label, positionX, positionY }: Props) => {
  return (
    <Box
      sx={{
        margin: "50px",
      }}
    >
      <h1 className="tittles">{label}</h1>
      <img
        src={dogfeet}
        className="feet"
        alt="logo"
        style={{
          top: positionY,
          left: positionX,
        }}
      />
    </Box>
  );
};
