import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import {
  Box,
  Button,
  Popper,
  IconButton,
  TextField,
  Toolbar,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
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
    const open = Boolean(anchorEl);
    return (
      <Box
        sx={{
          width: "100%",
          height: "60px",
          display: "flex",
          gap: "20px",
          justifyContent: "left",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "10px",
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          Add new list
        </Button>
        <Popper
          open={open}
          anchorEl={anchorEl}
          sx={{
            width: "250px",
            height: "150px",
            backgroundColor: "darkgrey",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <TextField
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
              <SendIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setAnchorEl(null);
                setNewCardListName("");
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </Popper>
      </Box>
    );
  })
);

export default BoardHeader;
