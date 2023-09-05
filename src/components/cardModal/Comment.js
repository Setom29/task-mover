import React from 'react'
import {inject, observer} from "mobx-react";
import {Avatar, Box, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography} from "@mui/material";


const Comment = inject("commentsTable")(
    observer(({comment}) => {
        function handleClick(comment) {

        }

        return (
          <ListItem alignItems="flex-start">
              <ListItemText
                  primary={comment.user_id}
                  secondary={
                      <>
                          <Typography component="span" variant="body2" color="textPrimary">
                              {comment.text}
                          </Typography>
                          {' - '}
                          {comment.created_at}
                      </>
                  }
              />
              <ListItemButton
                  alignItems="flex-start"
                  selected={comment === selected}
                  onClick={() => handleClick(comment)}
              >Edit</ListItemButton>
          </ListItem>
      )
    })
)
