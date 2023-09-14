import { blue, grey } from "@mui/material/colors";
import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[300],
      dark: blue[800],
      contrastText: "#fff",
    },
    secondary: {
      main: grey[700],
      light: grey[800],
      dark: grey[400],
      contrastText: "#fff",
    },
    shades: {
      main: "rgba(0, 0, 0, 0.5)",
      light: "rgba(0, 0, 0, 0.3)",
      dark: "rgba(0, 0, 0, 0.7)",
      contrastText: "rgba(0, 0, 0, 0.4)",
    },

    transparent: {
      main: "rgba(0, 0, 0, 0)",
      light: "rgba(255, 255, 255, 0.15)",
      dark: "rgba(0, 0, 0, 0.15)",
      contrastText: "rgba(255, 255, 255, 0.90)",
    },
    blue: {
      main: "#80add7", //0%
      light: "#b3cee7", //-40%
      dark: "#4d6881", //+40%
      contrastText: "#fff",
    },
    green: {
      main: "#0abda0", //0%
      light: "#6cd7c6", //-40%
      dark: "#067160", //+40%
      contrastText: "#fff",
    },
    yellow: {
      main: "#d4dca9", //0%
      light: "#e5eacb", //-40%
      dark: "#7f8465", //+40%
      contrastText: "#fff",
    },
    brown: {
      main: "#bf9d7a", //0%
      light: "#d9c4af", //-40%
      dark: "#735e49", //+40%
      contrastText: "#fff",
    },
    button: {
      main: "rgba(0, 0, 0, 0.5)",
      light: "rgba(0, 0, 0, 0.3)",
      dark: "rgba(0, 0, 0, 0.7)",
      contrastText: "rgba(255, 255, 255, 0.9)",
    },
  },
});

export default theme;
