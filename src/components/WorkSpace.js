import React from "react";
import { Box } from "@mui/material";
import SideNavBar from "./sideBar/SideNavBar";
import Board from "./board/Board";
import AppHeader from "./appBar/AppHeader";
import { inject, observer } from "mobx-react";
import CardModal from "./cardModal/CardModal";

import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const WorkSpace = inject(
  "usersTable",
  "boardsTable",
  "modalStateStore"
)(
  observer((props) => {
    return (
      <Box
        sx={{
          width: "100wh",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
         // background: " rgb(128,173,215)",
          background:
            "linear-gradient(135deg, rgba(128,173,215,1) 0%, rgba(10,189,160,1) 35%, rgba(212,220,169,1) 100%)",
        }}
      >
        <AppHeader />
        <Box
          sx={{
            height: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 9fr",
          }}
        >
          <SideNavBar />
          <DndProvider backend={HTML5Backend}>
            <Board boardId={props.boardsTable.currentId} />
          </DndProvider>
        </Box>
        {props.modalStateStore.open ? <CardModal /> : null}
      </Box>
    );
  })
);

export default WorkSpace;
