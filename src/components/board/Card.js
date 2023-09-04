import React from "react";
import { observer, inject } from "mobx-react";
import { Typography, Box } from "@mui/material";

// cardId, users, setUsers, cards, setCards, comments, setComments
const Card = inject("cardsTable")(
  observer((props) => {
    return (
      <Box
        sx={{
          border: "1px solid black",
          padding: "5px",
          backgroundColor: "darkgray",
          width: "100%",
          height: "3em",
        }}
      >
        <Typography variant="caption" >
          {props.cardsTable.getItemById(props.cardId).name}
        </Typography>
      </Box>
    );
  })
);

export default Card;
