import {inject, observer} from "mobx-react";
import {
    AppBar,
    Box,
    Button,
    Dialog, IconButton, Modal, Toolbar,
    Typography
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {Description, Title} from "@mui/icons-material";

const CardModal = inject("modalStateStore", "cardsTable", "commentsTable")(observer((props) => {

    const {open, toggle} = props.modalStateStore
    const {
        name,
        description,
        createdAt,
        createdBy,
        assignee,
        dueTo
    } = props.cardsTable.getItemById(props.cardId)
    console.log(name)
    return (

        <Modal
            open={open}
            onClose={() => toggle(props.cardId)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <Typography id="modal-modal-description">
                    {description}
                </Typography>
            </Box>
        </Modal>
    )
}))

export default CardModal;