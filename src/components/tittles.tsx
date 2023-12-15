import { Box } from "@mui/material";
import dogfeet from "../assets/dog_feet.svg";
import "../styles/tittles.css";

type Props = {
  label: string;
  icon?: string;
  size?: string;
};

export const Tittles = ({ label, icon, size }: Props) => {
  return (
    <Box
      sx={{
        margin: "50px",
      }}
    >
      {icon && (
        <img src={icon} alt="" style={{ width: size, marginRight: "15px" }} />
      )}
      <h1 className="tittles">{label}</h1>
      <img src={dogfeet} className="feet1" alt="logo" />
    </Box>
  );
};
