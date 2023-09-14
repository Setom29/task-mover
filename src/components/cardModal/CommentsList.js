import Comment from './Comment'
import {inject, observer} from "mobx-react";
import {Box} from "@mui/material";


const CommentsList = inject(
    "commentsTable",
)(
    observer((props) => {

        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "5px",
                    backgroundColor: "transparent.contrastText",
                    color: "shades.dark",
                    height: 490,
                    p: 4,

                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        borderRadius: "5px",
                        backgroundColor: "transparent.light",
                        boxShadow: 2,
                        flexGrow: 1,
                        overflow: "auto",
                    }}
                    className="no-scrollbar"
                >
                    {[
                        ...props.commentsTable.getCommentByCardId(props.cardId)
                    ]

                        .sort((a, b) => a.created_at < b.created_at ? -1 : a.created_at > b.created_at ? 1 : 0)
                        .map((comment) => (
                            <Comment key={comment.id} commentId={comment.id} ownerComment={comment.user_id}/>
                        ))}
                </Box>
            </Box>

        )
    })
)

export default CommentsList;