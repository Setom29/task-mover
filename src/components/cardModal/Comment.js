import {inject, observer} from "mobx-react";
import {Box, Typography} from "@mui/material";


const Comment = inject(
    "commentsTable", "usersTable",)(
    observer((props) => {

        const currentUser = props.usersTable.getItemById(props.ownerComment)

        return (
            <Box sx={{
                display: 'flex',
                flexDirection: "row",
                justifyContent: 'space-between',
                padding: "5px",
                color: "yellow.contrastText",
                fontSize: "100%",
                borderRadius: "5px",
                bgcolor: "yellow.light",
                boxShadow: 2,

            }}>
                <Typography variant="caption" sx={{
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word',
                    width: "80%",
                }}>
                    {props.commentsTable.getItemById(props.commentId).text}
                </Typography>
                <Box>
                    {currentUser.name}
                </Box>
            </Box>
        )
    })
)

export default Comment;