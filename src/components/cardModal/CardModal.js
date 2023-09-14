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
                        justifyContent: 'space-between',
                        position: 'relative',
                        height: "60%",
                        width: "70%",
                        flexDirection: "column",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "blue.contrastText",
                        boxShadow: 24,
                        p: 4,
                        m: 4,
                        borderRadius: "5px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                            flexDirection: "column",
                            position: "absolute",
                            width: "45%",
                            left: 20,
                            top: 40,
                        }}
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="Title"
                            multiline
                            rows={3}
                            value={currentCard.name}
                            onChange={(e) => setCurrentCard({...currentCard, name: e.target.value})}
                        />

                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={10}
                            value={currentCard.description}
                            onChange={(e) => setCurrentCard({...currentCard, description: e.target.value})}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            position: 'absolute',
                            gap: "10px",
                            width: "45%",
                            right: 40,
                            top: 40,
                        }}
                    >
                        <CommentsList cardId={props.modalStateStore.currentCardId}/>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your comment:"
                            value={newComment}
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
