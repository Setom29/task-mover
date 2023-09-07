import React from "react";
import {observer, inject} from "mobx-react";
import {Typography, Box} from "@mui/material";
import CardModal from "../cardModal/CardModal";
import {Link} from "react-router-dom";

const Card = inject("cardsTable")(
  observer((props) => {
    
    const {open, toggle} = props.modalStateStore
    const {name, description, createdAt, createdBy, assignee} = props.cardsTable.getItemById(props.cardId)
    
    return (
      <Box onClick={() => toggle(props.cardId)
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
