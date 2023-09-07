import { blue, grey } from "@mui/material/colors";
import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[800],
      dark: blue[400],
      contrastText: "rgba(0, 0, 0, 0.54)",
    },
    secondary: {
      main: grey[700],
      light: grey[800],
      dark: grey[400],
      contrastText: "rgba(0, 0, 0, 0.54)",
    },
  },
});

export default theme;
