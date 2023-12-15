import { Card, Box, Button } from "@mui/material";
import Pin from "../assets/Pin.svg";

type Props = {
  label: string;
  adr: string;
  func: string;
  loc: string;
};

export const Locals = ({ label, adr, func, loc }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#D9D9D9",
        margin: "10px",
        width: "90%",
        height: "14vh",
        padding: "10px",
        display: "inline-flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "inline-flex",
            marginBottom: "10px",
          }}
        >
          <img src={Pin} style={{ width: "12px", marginBottom: "6px" }} />
          <h1
            style={{
              marginLeft: "5px",
              fontSize: "20px",
              letterSpacing: "3px",
            }}
          >
            {label}
          </h1>
        </Box>
        <Box
          sx={{
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p>{adr}</p>
          <p>{func}</p>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Button
          href={loc}
          variant="contained"
          sx={{
            backgroundColor: "rgb(24, 119, 242)",
            marginLeft: "60px",
          }}
        >
          {" "}
          <a style={{ color: "#ffff" }}>ver ruta</a>
        </Button>
      </Box>
    </Card>
  );
};
