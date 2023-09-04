import { Button, IconButton, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import { observer, inject } from "mobx-react";
import { useState } from "react";

const AddCardComponent = inject(
  "cardsTable",
  "users"
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
        }}
      >
        {open ? (
          <Box>
            <TextareaAutosize
              onChange={(e) => setNewCardName(e.target.value)}
              value={newCardName}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => {
                props.cardsTable.addCard(
                  newCardName,
                  props.cardListId,
                  props.users.currentItem
                );
                setOpen(false);
                setNewCardName("")
              }}
            ></Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            endIcon={<AddCircleOutlineIcon />}
            onClick={() => setOpen(true)}
          >
            Add new card
          </Button>
        )}
      </Box>
    );
  })
);

export default AddCardComponent;

// props.cardsTable.addCard(
//     "New card",
//     props.cardListId,
//     props.users.currentItem
//   )
