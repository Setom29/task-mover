import React from "react";
import {observer, inject} from "mobx-react";
import {Typography, Box} from "@mui/material";
import CardModal from "../cardModal/CardModal";
import {Link} from "react-router-dom";

// cardId, users, setUsers, cards, setCards, comments, setComments
const Card = inject("modalStateStore", "cardsTable", "commentsTable")(
    observer((props) => {

        const {open, toggle} = props.modalStateStore
        const {name, description, createdAt, createdBy, assignee} = props.cardsTable.getItemById(props.cardId)

        return (
            <Box onClick={() => toggle(props.cardId)}
                 sx={{
                     border: "1px solid black",
                     padding: "5px",
                     backgroundColor: "darkgray",
                     width: "100%",
                     height: "3em",
                 }}
            >
                <Typography variant="caption">
                    {name}
                </Typography>
            </Box>

        );
    })
);

export default Card;
