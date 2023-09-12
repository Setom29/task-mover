import { IconButton, TextField } from "@mui/material";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { observer, inject } from "mobx-react";
import { useState } from "react";

const AddBoardComponent = inject(
  "boardsTable",
  "usersTable"
)(
  observer((props) => {
    const [open, setOpen] = useState(false);
    const [newBoardName, setNewBoardName] = useState("");

    const handleOK = function() {
        const newBoard = props.boardsTable.addBoard(
          newBoardName,
          props.usersTable.currentItem.id
        );
        props.boardsTable.changeCurrentItemId(newBoard.id);
        setOpen(false);
        setNewBoardName("");
    }

    const handleCancel = function() {
      setOpen(false);
      setNewBoardName("");
    }


    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleOK();
      } else if (event.key === 'Escape') {
        handleCancel();
      }
    };


    return (
      <Box
        sx={{
          border: "none",
          backgroundColor: "transparent.main",
          heigth: "1em",
          display: "flex",
          justifyContent: "start",
        }}
      >
        {open ? (
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <TextField
              color="shades"
              variant="outlined"
              autoFocus
              onChange={(e) => setNewBoardName(e.target.value)}
              onKeyDown={handleKeyDown}
              value={newBoardName}
              placeholder="Board name"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                disabled={newBoardName === ""}
                onClick={handleOK}
              >
                <SendIcon />
              </IconButton>
              <IconButton
                onClick={handleCancel}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <IconButton onClick={() => setOpen(true)} sx={{ aspectRatio: "1/1" }}>
            <AddCircleOutlineIcon sx={{color: "transparent.contrastText"}}/>
          </IconButton>
        )}
      </Box>
    );
  })
);

export default AddBoardComponent;
