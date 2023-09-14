import { Backdrop, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import UsersSimple from "./UsersSimple";
import { Link } from "react-router-dom";
import Export from "./Export";
import Import from "./Import";

export default function SideNavBar() {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      bgcolor="shades.light"
      sx = {{minWidth: "150px"}}
      // we'll have opacity when we set our palette, defining colors via rgba().
      // Seems there's no way to make it with preset MUI colors
    >
      <UsersSimple />
      <Box>
        <Export/>
        <Import/>
      </Box>
      <Link to="/" style={{ textDecoration: "none", width: "100%", display: "block"}}>
        <Button variant="contained" color="transparent" sx={{width: "100%", borderRadius: "0"}}>Log out</Button>
      </Link>
    </Stack>
  );
}
