import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import Users from "./Users";
import { Box } from "@mui/material";

const Login = inject("usersTable")(
  observer((props) => {
    return (
      <Box
        bgcolor="shades.main"
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Users />
      </Box>
    );
  })
);

export default Login;
