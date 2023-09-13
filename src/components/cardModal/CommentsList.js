import Comment from './Comment'
import {inject, observer} from "mobx-react";
import {Box} from "@mui/material";


const CommentsList = inject(
    "commentsTable",
    "usersTable",

)(
    observer((props) => {

        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "fit-content",
                    borderRadius: "5px",
                    backgroundColor: "blue.contrastText",
                    color: "shades.dark",
                    p: 4,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        height: "100%",
                        backgroundColor: "transparent.contrastText",
                        borderRadius: "5px",
                    }}
                >
                    {[
                        ...props.commentsTable.getCommentByCardId(props.cardId)
                    ]

                        .sort((a, b) => a.created_at < b.created_at ? -1 : a.created_at > b.created_at ? 1 : 0)
                        .map((comment) => (
                            <Comment key={comment.id} commentId={comment.id}/>
                        ))}
                </Box>
            </Box>

        )
    })
)

export default CommentsList;