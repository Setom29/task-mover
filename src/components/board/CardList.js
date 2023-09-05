import React from "react";
import { observer, inject } from "mobx-react";
import { Box } from "@mui/material";
import Card from "./Card";
import AddCardComponent from "./AddCardComponent ";
// {cardListId, users, setUsers, cardLists, setCardLists, cards, setCards, comments, setComments}
const CardList = inject(
  "cardListsTable",
  "cardsTable"
)(
  observer((props) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "200px",
          height: "100%",
          border: "1px solid black",
          padding: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        {props.cardsTable.data
          .filter((card) => card.cardListId === props.cardListId)
          .map((card, index) => (
            <Card key={index} cardId={card.id} />
          ))}
        <AddCardComponent cardListId={props.cardListId}/>
      </Box>
    );
  })
);

export default CardList;
