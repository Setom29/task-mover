import {inject, observer} from "mobx-react";
import {Typography} from "@mui/material";


const Comment = inject("commentsTable")(
    observer((props) => {

        return (
            <Typography variant="caption"
                sx={{
                    padding: "5px",
                    color: "green.dark",
                }}
            >
                {props.commentsTable.getItemById(props.commentId).text}
            </Typography>
        )
    })
)

export default Comment;