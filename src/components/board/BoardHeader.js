import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import {
  Box,
  Button,
  Popover,
  IconButton,
  TextField,
  Toolbar,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import UsersWorking from "../appBar/UsersWorking";
const BoardHeader = inject(
  "cardListsTable",
  "boardsTable"
)(
  observer((props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [newCardListName, setNewCardListName] = useState("null");

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (
      <Box
        sx={{
          width: "100%",
          height: "60px",
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "shades.main",
          padding: "10px",
        }}
      >
        <Button variant="contained" onClick={handleClick} color="transparent">
          Add new list
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{ backgroundColor: "shades.main" }}
        >
          <Box  sx={{backgroundColor: "yellow.light", padding: "10px" }}>
            <TextField
              color="shades"
              variant="outlined"
              onChange={(e) => setNewCardListName(e.target.value)}
            />
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
              <IconButton
                onClick={() => {
                  props.cardListsTable.addCardList(
                    newCardListName,
                    props.boardsTable.currentId
                  );
                  setAnchorEl(null);
                  setNewCardListName("");
                }}
                disabled={newCardListName === ""}
              >
                <SendIcon sx={{ color: "shades.contrastText" }} />
              </IconButton>
              <IconButton
                onClick={() => {
                  setAnchorEl(null);
                  setNewCardListName("");
                }}
              >
                <CloseIcon sx={{ color: "shades.contrastText" }} />
              </IconButton>
            </Toolbar>
          </Box>
        </Popover>


        <UsersWorking/>
      </Box>
    );
  })
);

export default BoardHeader;
