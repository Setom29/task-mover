import { Button, IconButton, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { observer, inject } from "mobx-react";
import { useState } from "react";

const AddCardComponent = inject(
  "cardsTable",
  "usersTable"
)(
  observer((props) => {
    const [open, setOpen] = useState(false);
    const [newCardName, setNewCardName] = useState("");

    return (
      <Box
        sx={{
          border: "1px solid black",
          padding: "5px",
          backgroundColor: "darkgray",
          width: "100%",
          heigth: "1em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {open ? (
          <Box>
            <TextareaAutosize
              onChange={(e) => setNewCardName(e.target.value)}
              value={newCardName}
            />
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <IconButton
                variant="contained"
                disabled={newCardName === ""}
                onClick={() => {
                  props.cardsTable.addCard(
                    newCardName,
                    props.cardListId,
                    props.usersTable.currentItem
                  );
                  setOpen(false);
                  setNewCardName("");
                }}
              >
                <SendIcon />
              </IconButton>
              <IconButton
                variant="contained"
                onClick={() => {
                  setOpen(false);
                  setNewCardName("");
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <IconButton variant="contained" onClick={() => setOpen(true)}>
            <AddCircleOutlineIcon />
          </IconButton>
        )}
      </Box>
    );
  })
);

export default AddCardComponent;
