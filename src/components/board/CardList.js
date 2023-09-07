import React from "react";
import { observer, inject } from "mobx-react";
import { Box, IconButton, Typography, Popover, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Card from "./Card";
import AddCardComponent from "./AddCardComponent ";
// {cardListId, users, setUsers, cardLists, setCardLists, cards, setCards, comments, setComments}
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
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "200px",
          height: "100%",
          padding: "5px",
          backgroundColor: "shades.main",
          borderRadius: "5px",
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
            <CloseIcon />
          </IconButton>
        </Box>
        {/* filter cards by cardListId and display them in the correct order */}
        {[
          ...props.cardsTable.data.filter(
            (card) => card.cardListId === props.cardListId
          ),
        ]
          .sort((a, b) => a.order < b.order)
          .map((card, index) => (
            <Card key={index} cardId={card.id} />
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
    );
  })
);

export default CardList;
