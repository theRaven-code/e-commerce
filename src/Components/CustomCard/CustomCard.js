import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const CustomCard = ({ img, imgAlt, content, price, title, id, type }) => {
  const disptach = useDispatch();
  useEffect(() => {
  }, [])

  const handleClick = (title, id, type, price) => {
    const product = {
      title: title,
      id: uuidv4(),
      type: type,
      price: parseInt(price.replace(/,/g, "")),
      quantity: 1,
    };

    disptach({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Card
      sx={{
        maxWidth: 251,
        height: 330,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      elevation={0}
    >
      <CardMedia component="img" height="140" image={img} alt={imgAlt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${content.slice(0, 130)}...`}
          <Box style={{ color: "blue", display: "inline" }}>See More</Box>
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          justifyContent: "space-between",
          padding: 1,
        }}
      >
        <Typography variant="h5" component="div">
          $&nbsp;{price}
        </Typography>
        <Button
          sx={{
            borderRadius: 2,
            fontSize: 12,
            fontWeight: 400,
            color: "black",
          }}
          variant="outlined"
          onClick={() => handleClick(title, id, type, price)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
