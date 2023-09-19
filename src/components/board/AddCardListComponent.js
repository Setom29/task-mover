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

    const handleOK = function() {
        props.cardListsTable.addCardList(
          cardListName,
          props.boardsTable.currentId
        );
        setOpen(false);
        setCardListName("");
    }

    const handleCancel = function() {
        setOpen(false);
        setCardListName("");
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
              color="lights"
              variant="outlined"
              autoFocus
              onChange={(e) => setCardListName(e.target.value)}
              onKeyDown={handleKeyDown}
              value={cardListName}
              size="small"
              placeholder="List name"
              sx={{
                color: "lights.light",
                "& .MuiInputBase-root": {
                  color: "lights.light",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "lights.light",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "lights.light",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "lights.light",
                },
              }}
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
                onClick={handleOK}
                color="button"
              >
                <SendIcon />
              </IconButton>
              <IconButton
                onClick={handleCancel}
                color="button"
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
