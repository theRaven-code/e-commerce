import { Badge, IconButton } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const ShoppingCart = () => {
  const getCount = useSelector(
    state => state.cartReducer.cart.length,
    shallowEqual
  );

  const history = useHistory();
  const handleClick = () => {
    history.push("/cart");
  };

  return (
    <IconButton onClick={handleClick}>
      <Badge badgeContent={getCount} color="error">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
};

export default ShoppingCart;
