import React from 'react'
import {Box} from "@mui/material"
import CardList from './CardList'

export default function Board({boardId, boards, setBoards, users, setUsers, cardLists, setCardLists, cards, setCards, comments, setComments}) {
  return (
    <Box>
        <div>BoardHeader</div>
        <CardList />{/* map */}
    </Box>
  )
}
