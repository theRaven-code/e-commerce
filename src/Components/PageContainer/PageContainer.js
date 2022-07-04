import React from "react";
import { Box } from "@mui/material";
const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%"
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
