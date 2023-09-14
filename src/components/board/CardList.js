import React from "react";
import { observer, inject } from "mobx-react";
import { Box, IconButton, Typography, Popover, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Card from "./Card";
import AddCardComponent from "./AddCardComponent ";
import {Link} from "react-router-dom";

import { useDrag, useDrop } from "react-dnd";
import {dragTypeCardList} from "../../utils/constants";
// import { resetGlobalState } from "mobx/dist/internal";

const CardList = inject(
    "cardListsTable",
    "cardsTable"
)(
  observer((props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const [{isSomethingDropping}, drop] = useDrop({
      accept: dragTypeCardList,

      collect: (monitor) => {
        return {
          isSomethingDropping: monitor.isOver(),
        };
      },

      drop: (item) => {
        const insertAfterCardListId = props.cardListsTable.getPrevCardListIdInSameBoard(props.cardListId);
        if (item.cardListId === insertAfterCardListId) return; // no drop on itself
        props.cardListsTable.moveCardList(item.cardListId, insertAfterCardListId);
      },

    });
  
      // useDrag will be responsible for making an element draggable. 
      // It also exposes isDragging method to add any styles while dragging
    const [{ isDragging }, drag] = useDrag(() => ({
      type: dragTypeCardList,
      item: { cardListId: props.cardListId },

      collect: (monitor) => {
        return {
          isDragging: !!monitor.isDragging(),
        };
      },
    }));

    return (
      <Box 
        ref={(node) => drag(drop(node))} 
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "start",
          height: "fit-content"
        }} >
        {/* first part is an empty box that imitates empty space for dropping, if isSomethingDropping */}
        {isSomethingDropping ?
          <Box
          sx={{
            gap: "5px",
            width: "200px",
            height: "100%",
            padding: "5px",
            bgcolor: "transparent",
            borderRadius: "5px",
          }} />
          : null}
        <Box
          sx={{
            // display: "flex",
            flexDirection: "column",
            gap: "5px",
            width: "200px",
            height: "100%",
            padding: "5px",
            backgroundColor: "shades.main",
            borderRadius: "5px",
            display: isDragging ? "none" : "flex"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "transparent.contrastText" }}>
              {props.cardListsTable.getItemById(props.cardListId).name}
            </Typography>
            <IconButton onClick={handleClick}>
              <CloseIcon sx={{ color: "transparent.contrastText" }}/>
            </IconButton>
          </Box>
          {/* filter cards by cardListId and display them in the correct order */}
          {[
            ...props.cardsTable.data.filter(
              (card) => card.cardListId === props.cardListId
            ),
          ]
            .sort((a, b) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0)
            .map((card, index) => (
              <Card key={card.id} cardId={card.id} />
            ))}
          <AddCardComponent cardListId={props.cardListId} />
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{ backgroundColor: "shades.main" }}
          >
            <Box sx={{ backgroundColor: "yellow.light", padding: "10px" }}>
              <Typography sx={{ textAlign: "center" }}>Delete list?</Typography>
              <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton
                  onClick={() => {
                    props.cardListsTable.deleteCardList(props.cardListId);
                    handlePopoverClose();
                  }}
                >
                  <DoneIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handlePopoverClose();
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </Box>
          </Popover>
        </Box>
      </Box>
    );
  })
);

export default CardList;
