import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

const CustomTypographyWrapper = ({ title, subText, onClickHandler }) => {
  return (
    <Box
      onClick={onClickHandler}
      sx={{
        cursor: 'pointer'
      }}
    >
      <Typography
        variant='h3'
        sx={{
          lineHeight: 1.5
        }}
      >
        {title}
      </Typography>
      <Typography
        variant='subtitle2'
      >
        {subText}
      </Typography>
    </Box>
  )
}

const NavBar = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <CustomTypographyWrapper title={"Amazing"} subText={"your favorite pet market"} onClickHandler={handleClick} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ShoppingCart badgeContent={4} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
