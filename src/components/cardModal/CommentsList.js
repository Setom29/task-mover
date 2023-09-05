import React from 'react'
import Comment from './Comment'
import {Box, List} from "@mui/material"

export default function CommentsList(users, setUsers, comments, setComments) {
  return (
      <List>
          {comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
          ))}
      </List>

  )
}
