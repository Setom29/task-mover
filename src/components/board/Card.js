import React from "react";
import { observer, inject } from "mobx-react";
import { Typography, Box, IconButton } from "@mui/material";

import { useDrag, useDrop } from "react-dnd";
import { dragTypeCard } from "../../utils/constants";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

const Card = inject(
  "cardsTable",
  "modalStateStore"
)(
  observer((props) => {
    const handlerStatus = function () {
      props.cardsTable.changeStatusIcon(props.cardId);
    };

    const [{ isSomethingDropping }, drop] = useDrop({
      accept: dragTypeCard,

      collect: (monitor) => {
        return {
          isSomethingDropping: monitor.isOver(),
        };
      },

      drop: (item) => {
        const newCardListId = props.cardsTable.getItemById(
          props.cardId
        ).cardListId;
        const insertAfterCardId = props.cardsTable.getPrevCardIdInSameCardList(
          props.cardId
        );
        if (item.cardId === insertAfterCardId) return; // no drop on itself
        props.cardsTable.moveCard(
          item.cardId,
          newCardListId,
          insertAfterCardId
        );
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

    const { open, toggle } = props.modalStateStore;
    // const {name, description, createdAt, createdBy, assignee} = props.cardsTable.getItemById(props.cardId)

    return (
      <Box ref={(node) => drag(drop(node))}>
        {/* first part is an empty box that imitates empty space for dropping, if isSomethingDropping */}
        {isSomethingDropping ? (
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
        ) : null}
        <Box
          ref={(node) => drag(drop(node))}
          sx={{
            padding: "5px 30px 5px 5px",
            borderRadius: "5px",
            backgroundColor: "yellow.light",
            color: "transparent.main",
            width: "100%",
            height: "3em",
            display: isDragging ? "none" : "block",
            textOverflow: "ellipsis",
            position: "relative",
          }}
        >
          <Typography
          onClick={() => toggle(props.cardId)}
            component="div"
            variant="caption"
            sx={{
              display: "flex",
              color: "shades.dark",
              gap: "3px",
              whiteSpace: "normal",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            {props.cardsTable.getItemById(props.cardId).name}
          </Typography>
          <IconButton
          size="small"
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={(e) => {
              handlerStatus();
            }}
          >
            {props.cardsTable.getItemById(props.cardId).status === 1 ? (
              <LocalFireDepartmentIcon />
            ) : props.cardsTable.getItemById(props.cardId).status === -1 ? (
              <WaterDropIcon />
            ) : (
              <AllInclusiveIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    );
  })
);

export default Card;
