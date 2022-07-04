import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#18a0fb",
    },
  },
  typography: {
    fontFamily: '"Poppins",  "sans-serif"',
    fontSize: 12,
    lineHeight: 18,
    button: {
      fontWeight: 700,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 2.5,
    },
    h5: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 700,
    },
  },
});
