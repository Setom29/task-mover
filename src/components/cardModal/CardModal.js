import {inject, observer} from "mobx-react";
import {
    AppBar,
    Box,
    Button,
    Dialog, IconButton, Toolbar,
    Typography
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {Description, Title} from "@mui/icons-material";

const CardModal = inject("modalStateStore", "cardsTable", "commentsTable")(observer((props) => {

    const {open, toggle} = props.modalStateStore
    const {name, description, createdAt, createdBy, assignee, dueTo} = props.cardsTable.getItemById(props.cardId)

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={() => toggle(props.card_id)}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => toggle(props.card_id)}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={() => toggle(props.card_id)}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box>
                    <Box>
                        <Title>{name}</Title>
                        {name}
                    </Box>
                    <Box>
                        <Description>{description}</Description>
                        {description}
                    </Box>

                </Box>
            </Dialog>
        </div>
    )
}))

export default CardModal;