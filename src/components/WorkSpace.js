import React, { useState } from "react";
import { Box, IconButton, SpeedDial, SpeedDialAction } from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import ChatIcon from "@mui/icons-material/Chat";
import SideNavBar from "./sideBar/SideNavBar";
import Board from "./board/Board";
import AppHeader from "./appBar/AppHeader";
import { inject, observer } from "mobx-react";
import CardModal from "./cardModal/CardModal";
import ChatPopup from "./chat/ChatPopup";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { initialMessages } from "../utils/constants";


const actions = [{ icon: <ChatIcon />, name: "Chat" }];

const WorkSpace = inject(
  "usersTable",
  "boardsTable",
  "modalStateStore",
  "usersInBoardsTable"
)(
  observer((props) => {
    const [openPopup, setOpenPopup] = useState(false);
    const [messages, setMessages] = useState(initialMessages);

    const availableBoardIds = props.usersInBoardsTable.getBoardIdsByUserId(
      props.usersTable.currentId
    );

    return (
      <Box
        sx={{
          position: "relative",
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
          {props.boardsTable.currentId !== null ? (
            <DndProvider backend={HTML5Backend}>
              <Board boardId={props.boardsTable.currentId} />
            </DndProvider>
          ) : null}
        </Box>
        {props.modalStateStore.open ? <CardModal /> : null}

        {openPopup ? (
          <ChatPopup setOpenPopup={setOpenPopup} openPopup={openPopup} messages= {messages} setMessages={setMessages} />
        ) : (
          <IconButton
            onClick={() => setOpenPopup(true)}
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
              backgroundColor: "green.main",
            }}
          >
            <ChatIcon />
          </IconButton>
        )}
      </Box>
    );
  })
);

export default WorkSpace;
