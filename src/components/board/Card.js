import React, { useRef } from "react";
import {observer, inject} from "mobx-react";
import {Typography, Box} from "@mui/material";
import CardModal from "../cardModal/CardModal";
import {Link} from "react-router-dom";

import { useDrag, useDrop } from "react-dnd";

const typeToAcceptDrop = "Card";

const Card = inject("cardsTable", "modalStateStore")(
  observer((props) => {

    // const ref = useRef(null); 
    const [{isSomethingDropping}, drop] = useDrop({
      accept: typeToAcceptDrop,

      collect: (monitor) => {
        return {
          isSomethingDropping: monitor.isOver(),
        };
      },

      drop: (item) => {
        const newCardListId = props.cardsTable.getItemById(props.cardId).cardListId;
        const insertAfterCardId = props.cardsTable.getPrevCardIdInCardList(props.cardId);
        props.cardsTable.moveCard(item.cardId, newCardListId, insertAfterCardId);
      }
    });
  
      // useDrag will be responsible for making an element draggable. 
      // It also exposes isDragging method to add any styles while dragging
    const [{ isDragging }, drag] = useDrag(() => ({
      // what type of item this to determine if a drop target accepts it
      type: typeToAcceptDrop,
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
      <Box onClick={() => toggle(props.cardId)}
        ref={(node) => drag(drop(node))}
        sx={{
          padding: "5px",
          borderRadius: "5px",
          backgroundColor: isDragging ? "yellow.dark" : isSomethingDropping ? "green" : "yellow.light", 
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
