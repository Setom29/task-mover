import { inject, observer } from "mobx-react";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Description, Title } from "@mui/icons-material";

const CardModal = inject(
  "modalStateStore",
  "cardsTable",
  "commentsTable"
)(
  observer((props) => {
    const { open, toggle } = props.modalStateStore;

    const [currentCard, setCurrentCard] = useState(props.cardsTable.getItemById(props.modalStateStore.currentCardId));

    return (
      <Modal
        open={open}
        onClose={() => {
          props.cardsTable.editItem({...currentCard})
          toggle(props.modalStateStore.currentCardId);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "transparent.contrastText",
            boxShadow: 24,
            p: 4,
            borderRadius: "5px",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="Title"
            multiline
            rows={3}
            value={currentCard.name}
            onChange={(e) => setCurrentCard({...currentCard, name: e.target.value})}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={10}
            value={currentCard.description}
            onChange={(e) => setCurrentCard({...currentCard, description: e.target.value})}
          />
        </Box>
      </Modal>
    );
  })
);

export default CardModal;
