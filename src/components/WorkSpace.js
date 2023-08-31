import React from 'react'
import {Box} from "@mui/material"
import SideNavBar from './appBar/SideNavBar'
import Board from './board/Board'

export default function WorkSpace({boards, setBoards, users, setUsers, cardLists, setCardLists, cards, setCards, comments, setComments}) {
  return (
   <Box>
        <div>WorkSpace</div>
        <SideNavBar />
        <Board />
    </Box>
  )
}
