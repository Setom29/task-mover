import React from "react";
import { observer, inject } from "mobx-react";
import { Box } from "@mui/material";
import CardList from "./CardList";
// {boardId, boards, setBoards, users, setUsers, cardLists, setCardLists, cards, setCards, comments, setComments}
const Board = inject("cardListsTable")(
  observer((props) => {
    return (
      <Box>
        <div>BoardHeader</div>
        <CardList />
        {/* map */}
      </Box>
    );
  })
);

export default Board;
