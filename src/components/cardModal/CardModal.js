import {inject, observer} from "mobx-react";
import {
    Box, IconButton, InputAdornment,
    Modal,
    TextField,
} from "@mui/material";
import React, {useState} from "react";
import CommentsList from "./CommentsList";
import AddCommentIcon from '@mui/icons-material/AddComment';

const CardModal = inject(
    "modalStateStore",
    "cardsTable",
    "commentsTable",
    "usersTable"
)(
    observer((props) => {
        const {open, toggle} = props.modalStateStore;

        const [currentCard, setCurrentCard] = useState(props.cardsTable.getItemById(props.modalStateStore.currentCardId));
        const [newComment, setNewComment] = useState("")

        const handleOK = function() {
            props.commentsTable.addComment(
                newComment,
                props.usersTable.currentItem.id,
                props.modalStateStore.currentCardId,
            )
            setNewComment("");
        }

        const handleCancel = function() {
            setNewComment("");
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                handleOK();
            } else if (event.key === 'Escape') {
                handleCancel();
            }
        };

        return (
            <Modal
                open={open}
                onClose={() => {
                    props.cardsTable.editItem({...currentCard})
                    toggle(props.modalStateStore.currentCardId);
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        backgroundColor: "shades.main",
                        boxShadow: 24,
                        p: 4,
                        m: 16,
                        borderRadius: "5px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                            flexDirection: "column",
                            width: "48%",
                            backgroundColor: "blue.contrastText",
                            borderRadius: "5px",
                            p: 4,
                        }}
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="Title"
                            multiline
                            rows={3}
                            value={currentCard.name}
                            onChange={(e) => setCurrentCard({...currentCard, name: e.target.value})}
                            sx={{
                                height: "100%",
                                backgroundColor: "transparent.light",
                                boxShadow: 2,
                            }}
                        />

                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={18}
                            value={currentCard.description}
                            onChange={(e) => setCurrentCard({...currentCard, description: e.target.value})}
                            sx={{
                                height: "100%",
                                backgroundColor: "transparent.light",
                                boxShadow: 2,
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            width: "48%",
                            backgroundColor: "blue.contrastText",
                            borderRadius: "5px",
                            p: 4,
                        }}
                    >
                        <CommentsList cardId={props.modalStateStore.currentCardId}/>
                        <TextField
                            sx={{
                                backgroundColor: "transparent.contrastText",
                            }}
                            variant="outlined"
                            placeholder="Enter your comment:"
                            value={newComment}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setNewComment(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            disabled={newComment === ""}
                                            onClick={
                                                () => {
                                                    props.commentsTable.addComment(
                                                        newComment,
                                                        props.usersTable.currentItem.id,
                                                        props.modalStateStore.currentCardId,
                                                    )
                                                    setNewComment("")
                                                }
                                            } edge="end">
                                            <AddCommentIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>
            </Modal>
        );
    })
);

export default CardModal;
