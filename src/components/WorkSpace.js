import React from "react";
import { Box } from "@mui/material";
import SideNavBar from "./appBar/SideNavBar";
import Board from "./board/Board";
import AppBarHeader from "./appBar/AppBar";
import { inject, observer } from "mobx-react";

const WorkSpace = inject(
  "usersTable",
  "boardsTable"
)(
  observer((props) => {
    return (
      <Box
        sx={{
          width: "100wh",
          height: "100vh",
          background: " rgb(128,173,215)",
          background:
            "linear-gradient(135deg, rgba(128,173,215,1) 0%, rgba(10,189,160,1) 35%, rgba(212,220,169,1) 100%)",
        }}
      >
        <AppBarHeader />
        <SideNavBar />
        <Board boardId={props.boardsTable.currentId} />
      </Box>
    );
  })
);

export default WorkSpace;
