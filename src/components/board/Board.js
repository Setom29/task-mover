import React from "react";
import { observer, inject } from "mobx-react";
import { Box } from "@mui/material";
import CardList from "./CardList";
import BoardHeader from "./BoardHeader";
import {useDrop } from "react-dnd";
import {dragTypeCardList} from "../../utils/constants";


// {boardId, boards, setBoards, users, setUsers, cardLists, setCardLists, cards, setCards, comments, setComments}
const Board = inject("cardListsTable")(
  observer((props) => {

    const [{isSomethingDropping}, drop] = useDrop({
      accept: dragTypeCardList,

      collect: (monitor) => {
        return {
          isSomethingDropping: monitor.isOver(),
        };
      },

      drop: (item, monitor) => {
        if (monitor.didDrop()) return; // no drop if already dropped on child components
        const insertAfterCardListId = props.cardListsTable.getLastCardListIdInBoard(props.boardId);
        if (item.cardListId === insertAfterCardListId) return; // no drop on itself
        props.cardListsTable.moveCardList(item.cardListId, insertAfterCardListId);
      },

    });


    return (
      <Box ref={(node) => drop(node) }>
        <BoardHeader />
        <Box
          sx={{
            width: "calc(100vw - 150px)",
            height: "calc(100vh - 140px)",
            overflowX: "auto",
            padding: "20px 15px",
            '&::-webkit-scrollbar': {
              height: '0.5em',
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
              webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'shades.light',
              outline: '1px solid slategrey'
            },
            '&::-webkit-scrollbar-track-piece': {
              backgroundColor: 'shades.contrastText'
            },
            scrollbarWidth: '0.25em',
            scrollbarColor: 'shades.light'
          
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              width: "fit-content",
            }}
          >
          {/* filter cardLists by boardId and display them in the correct order */}
          {[
            ...props.cardListsTable.data.filter(
              (cardList) => cardList.boardId === props.boardId
            ),
          ]
          .sort((a, b) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0)
            .map((cardList) => (
              <CardList key={cardList.id} cardListId={cardList.id} />
            ))}
          </Box>
        </Box>
      </Box>
    );
  })
);

export default Board;
