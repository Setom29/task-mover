import React from "react";
import { observer, inject } from "mobx-react";
import { Box } from "@mui/material";
import CardList from "./CardList";
// {boardId, boards, setBoards, users, setUsers, cardLists, setCardLists, cards, setCards, comments, setComments}
const Board = inject("cardListsTable")(
  observer((props) => {
    return (
      <Box
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
      {/* filter cardLists by boardId and display them in the correct order */}
        {[
          ...props.cardListsTable.data.filter(
            (cardList) => cardList.boardId === props.boardId
          ),
        ]
          .sort((a, b) => a.order < b.order)
          .map((cardList) => (
            <CardList cardListId={cardList.id} />
          ))}
      </Box>
    );
  })
);

export default Board;
