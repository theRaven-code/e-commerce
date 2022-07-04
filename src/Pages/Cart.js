import { Box, Grid } from "@mui/material";
import React from "react";
import CartTable from "../Components/CartTable/CartTable";

const Cart = () => {
  return (
    <Box>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CartTable />
      </Grid>
    </Box>
  );
};

export default Cart;
