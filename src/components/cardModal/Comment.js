import React, {useState} from 'react'
import {inject, observer} from "mobx-react";
import {Box, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";


const Comment = inject("commentsTable")(
    observer((props) => {

        const [comment, setComment] = useState(props.commentsTable.getItemById(props.commentId))
       // console.log(comment)
        return (
            <Typography variant="caption"
                sx={{
                    padding: "5px",
                    color: "green.dark",
                }}
            >
            </Typography>
        )
    })
)

export default Comment;