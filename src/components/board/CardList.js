import React from 'react'
import {Box} from "@mui/material"
import Card from './Card'

export default function CardList({cardListId, users, setUsers, cardLists, setCardLists, cards, setCards, comments, setComments}) {
  return (
    <Box>
        <div>CardList</div>
        <Card />
    </Box>

  )
}
