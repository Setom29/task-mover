import React, { useRef, useState } from "react";
import {observer, inject} from "mobx-react";
import {Typography, Box} from "@mui/material";

import { useDrag, useDrop } from "react-dnd";
import {dragTypeCard} from "../../utils/constants";

const Card = inject("cardsTable", "modalStateStore")(
  
  observer((props) => {

    const [{isSomethingDropping}, drop] = useDrop({
      accept: dragTypeCard,

      collect: (monitor) => {
        return {
          isSomethingDropping: monitor.isOver(),
        };
      },

      drop: (item) => {
        const newCardListId = props.cardsTable.getItemById(props.cardId).cardListId;
        const insertAfterCardId = props.cardsTable.getPrevCardIdInSameCardList(props.cardId);
        if (item.cardId === insertAfterCardId) return; // no drop on itself
        props.cardsTable.moveCard(item.cardId, newCardListId, insertAfterCardId);
      },

    });
  
      // useDrag will be responsible for making an element draggable. 
      // It also exposes isDragging method to add any styles while dragging
    const [{ isDragging }, drag] = useDrag(() => ({
      // what type of item this to determine if a drop target accepts it
      type: dragTypeCard,
      // data of the item to be available to the drop methods
      item: { cardId: props.cardId },
      // method to collect additional data for drop handling like whether is currently being dragged
      collect: (monitor) => {
        return {
          isDragging: !!monitor.isDragging(),
        };
      },
    }));

  /* 
    Initialize drag and drop into the element using its reference.
    Here we initialize both drag and drop on the same element (Card component)
  */
    // drag(drop(ref));
    
    const {open, toggle} = props.modalStateStore;
    // const {name, description, createdAt, createdBy, assignee} = props.cardsTable.getItemById(props.cardId)
    
    return (
      <Box ref={(node) => drag(drop(node))}>
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
        : null }
        <Box onClick={() => toggle(props.cardId)}
          ref={(node) => drag(drop(node))}
          sx={{
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "yellow.light", 
            color: "transparent.main",
            width: "100%",
            height: "3em",
            display: isDragging ? "none" : "block",
            textOverflow: "ellipsis"
          }}
        >
          <Typography component="div" variant="caption" noWrap sx={{color: "shades.dark"}}>
            {props.cardsTable.getItemById(props.cardId).name}
          </Typography>
        </Box>
      </Box>
    );
  })
);

export default Card;
