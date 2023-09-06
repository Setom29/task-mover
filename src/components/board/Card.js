import React from "react";
import {observer, inject} from "mobx-react";
import {Typography, Box} from "@mui/material";
import CardModal from "../cardModal/CardModal";

// cardId, users, setUsers, cards, setCards, comments, setComments
const Card = inject("modalStateStore", "cardsTable", "commentsTable")(
    observer((props) => {

        const {open, toggle} = props.modalStateStore
        const {name, description, createdAt, createdBy, assignee} = props.cardsTable.getItemById(props.cardId)

        return (
            <>
                {!open ? (
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
                    ) :
                    (
                        <CardModal cardId={props.cardId}>{}</CardModal>
                    )

                }
            </>
        );
    })
);

export default Card;
