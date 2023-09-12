import { Button, IconButton, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { observer, inject } from "mobx-react";
import { useState } from "react";

import {dragTypeCard} from "../../utils/constants";
import { useDrag, useDrop } from "react-dnd";

const AddCardComponent = inject(
  "cardsTable",
  "usersTable"
)(
  observer((props) => {
    const [open, setOpen] = useState(false);
    const [newCardName, setNewCardName] = useState("");

    const [{isSomethingDropping}, drop] = useDrop({
      accept: dragTypeCard,

      collect: (monitor) => {
        return {
          isSomethingDropping: monitor.isOver(),
        };
      },

      drop: (item) => {
        const newCardListId = props.cardListId;
        const insertAfterCardId = props.cardsTable.getLastCardIdInCardList(props.cardListId);
        if (item.cardId === insertAfterCardId) return; // no drop on itself
        props.cardsTable.moveCard(item.cardId, newCardListId, insertAfterCardId);
      },

    });

    return (
      <Box ref={(node) => drop(node)}>
        {/* first part is an empty box that imitates empty space for dropping, if isSomethingDropping */}
        {isSomethingDropping ? 
          <Box
            sx={{
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "green", 
              color: "transparent.main",
              width: "100%",
              height: "3em",
            }}
          /> 
          : null}
          <Box
          sx={{
            width: "100%",
            heigth: "1em",
            display: "flex",
            justifyContent: "center",
            borderRadius: "5px",
            backgroundColor: "transparent",
            mt: "20px",
            color: "transparent.main",
          }}
        >
          {open ? (
            <Box>
              <TextareaAutosize
                onChange={(e) => setNewCardName(e.target.value)}
                value={newCardName}
                sx={{
                  padding: "5px",
                  borderRadius: "5px",
                  color: "yellow",
                  background: "shadows.dark",
                  border: "1px solid shadows.main",
                }}
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
                  <DoneIcon sx={{ color: "transparent.contrastText" }} />
                </IconButton>
                <IconButton
                  variant="contained"
                  onClick={() => {
                    setOpen(false);
                    setNewCardName("");
                  }}
                >
                  <CloseIcon sx={{ color: "transparent.contrastText" }} />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              color="transparent"
              sx={{ width: "100%" }}
            >
              <AddCircleOutlineIcon />
            </Button>
          )}
        </Box>
      </Box>
    );
  })
);

export default AddCardComponent;
