import React from 'react'
import Comment from './Comment'
import {Box} from "@mui/material"

export default function Comments(users, setUsers, comments, setComments) {
  return (
    <Box>
        <div>Comments</div>
        <Comment />
    </Box>

  )
}
