import { IconButton, TextareaAutosize } from "@mui/material";
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

    return (
      <Box
        sx={{
          border: "1px solid black",
          padding: "5px",
          backgroundColor: "primary.dark",
          heigth: "1em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {open ? (
          <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <TextareaAutosize
              maxRows={1}
              onChange={(e) => setNewBoardName(e.target.value)}
              value={newBoardName}
            />
            <Box  sx={{display: "flex", flexDirection: "row", alignItems: "center"}} >
                <IconButton
                variant="contained"
                disabled={newBoardName === ""}
                onClick={() => {
                    const newBoard = props.boardsTable.addBoard(
                        newBoardName,
                        props.usersTable.currentItem.id
                    );
                    props.boardsTable.changeCurrentItemId(newBoard.id);
                    setOpen(false);
                    setNewBoardName("");
                }}
                >
                <SendIcon />
                </IconButton>
                <IconButton
                variant="contained"
                onClick={() => {
                    setOpen(false);
                    setNewBoardName("");
                }}
                >
                <CloseIcon />
                </IconButton>
            </Box>
          </Box>
        ) : (
          <IconButton variant="contained" onClick={() => setOpen(true)} sx={{aspectRatio: "1/1"}}>
            <AddCircleOutlineIcon />
          </IconButton>
        )}
      </Box>
    );
  })
);

export default AddBoardComponent;
