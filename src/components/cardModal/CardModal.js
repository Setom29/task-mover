import {inject, observer} from "mobx-react";
import {
    Box,
    IconButton,
    InputAdornment,
    Modal,
    TextField,
} from "@mui/material";
import React, {useState} from "react";
import CommentsList from "./CommentsList";
import AddCommentIcon from "@mui/icons-material/AddComment";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from '@mui/icons-material/Close';

const CardModal = inject(
    "modalStateStore",
    "cardsTable",
    "commentsTable",
    "usersTable"
)(
    observer((props) => {
        const {open, toggle} = props.modalStateStore;

        const [currentCard, setCurrentCard] = useState(
            props.cardsTable.getItemById(props.modalStateStore.currentCardId)
        );
        const [newComment, setNewComment] = useState("");

        const handleOK = function () {
            props.commentsTable.addComment(
                newComment,
                props.usersTable.currentItem.id,
                props.modalStateStore.currentCardId
            );
            setNewComment("");
        };

        const handleCancel = function () {
            setNewComment("");
        };

        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                handleOK();
            } else if (event.key === "Escape") {
                handleCancel();
            }
        };

        const handleCloseModal = () => {
            toggle(props.modalStateStore.currentCardId);
        }

        const handleDeleteCard = () => {
            props.commentsTable.deleteComment(props.modalStateStore.currentCardId)
            props.cardsTable.deleteCard(props.modalStateStore.currentCardId)
            handleCloseModal()
        }

        return (
            <Modal
                open={open}
                onClose={() => {
                    props.cardsTable.editItem({...currentCard});
                    handleCloseModal()
                }}
            >
                <Box
                    sx={{
                        p: 4,
                        margin: "5% 10%",
                        borderRadius: "5px",
                        backgroundColor: "shades.main",
                        boxShadow: 24,
                        position: "relative",
                        height: "80vh"
                    }}
                >
                    <IconButton aria-label="delete"
                                sx={{
                                    position: "absolute",
                                    top: 10,
                                    right: 5,
                                    zIndex: 2500,
                                    color: "transparent.contrastText"
                                }}
                                size="large"
                                onClick={() => handleCloseModal()}
                    >
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                    <IconButton aria-label="delete"
                                sx={{
                                    position: "absolute",
                                    top: 60,
                                    right: 5,
                                    zIndex: 2500,
                                    color: "transparent.contrastText"
                                }}
                                size="large"
                                onClick={handleDeleteCard}
                    >
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            p: 1,
                            height: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                width: "48%",
                                backgroundColor: "yellow.light",
                                borderRadius: "5px",
                                p: 4,
                                overflow: "auto",
                            }}
                        >
                            <TextField
                                id="outlined-multiline-static"
                                label="Title"
                                multiline
                                rows={4}
                                value={currentCard.name}
                                onChange={(e) =>
                                    setCurrentCard({...currentCard, name: e.target.value})
                                }
                                color="shades"
                                sx={{
                                    display: "flex",
                                    backgroundColor: "transparent.light",
                                    borderRadius: "5px",
                                }}
                            />

                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={11}
                                value={currentCard.description}
                                onChange={(e) =>
                                    setCurrentCard({...currentCard, description: e.target.value})
                                }
                                color="shades"
                                sx={{
                                    display: "flex",
                                    backgroundColor: "transparent.light",
                                    borderRadius: "5px",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                width: "48%",
                                backgroundColor: "yellow.light",
                                borderRadius: "5px",
                                p: 4,
                            }}
                        >
                            <CommentsList cardId={props.modalStateStore.currentCardId}/>
                            <TextField
                                sx={{
                                    backgroundColor: "transparent.dark",
                                }}
                                variant="outlined"
                                placeholder="Enter your comment:"
                                value={newComment}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => setNewComment(e.target.value)}
                                color="shades"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                disabled={newComment === ""}
                                                onClick={() => {
                                                    props.commentsTable.addComment(
                                                        newComment,
                                                        props.usersTable.currentItem.id,
                                                        props.modalStateStore.currentCardId
                                                    );
                                                    setNewComment("");
                                                }}
                                                edge="end"
                                            >
                                                <AddCommentIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        );
    })
);

export default CardModal;
