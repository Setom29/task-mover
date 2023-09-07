import React from "react";
import { observer, inject } from "mobx-react";
import { Typography, Box } from "@mui/material";

// cardId, users, setUsers, cards, setCards, comments, setComments
const Card = inject("cardsTable")(
  observer((props) => {
    return (
      <Box
        sx={{
          padding: "5px",
          borderRadius: "5px",
          backgroundColor: "yellow.light",
          color: "transparent.main",
          width: "100%",
          height: "3em",
        }}
      >
        <Typography variant="caption" sx={{color: "shades.dark"}}>
          {props.cardsTable.getItemById(props.cardId).name}
        </Typography>
      </Box>
    );
  })
);

export default Card;
