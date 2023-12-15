import { AspectRatio, Box, Card, Typography } from "@mui/joy";
import "../styles/products.css";

type props = {
  img: string;
  name: string;
  price: string;
  description: string;
};

export const Products = ({ img, name, price, description }: props) => {
  return (
    <section className="container">
      <Card
        variant="outlined"
        sx={{ width: 300, height: 400, margin: 5, transform: "" }}
      >
        <AspectRatio ratio="4/3">
          <Box sx={{ height: 300 }}>
            <img src={img} className="imgs" />
          </Box>
        </AspectRatio>

        <div className="text-prod">
          <Typography level="title-md">{name}</Typography>
          <Typography level="body-sm">{description}</Typography>
          <Typography>{price}</Typography>
        </div>
      </Card>
    </section>
  );
};
