import { IconButton, TextField, Button } from "@mui/material";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { observer, inject } from "mobx-react";
import { useState } from "react";

const AddCardListComponent = inject(
  "boardsTable",
  "cardListsTable"
)(
  observer((props) => {
    const [open, setOpen] = useState(false);
    const [cardListName, setCardListName] = useState("");

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
              onChange={(e) => setCardListName(e.target.value)}
              value={cardListName}
              size="small"
              placeholder="List name"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                disabled={cardListName === ""}
                onClick={() => {
                  props.cardListsTable.addCardList(
                    cardListName,
                    props.boardsTable.currentId
                  );
                  setOpen(false);
                  setCardListName("");
                }}
              >
                <SendIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  setOpen(false);
                  setCardListName("");
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            color="transparent"
          >
            Add new list
          </Button>
        )}
      </Box>
    );
  })
);

export default AddCardListComponent;
