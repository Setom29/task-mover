import React from 'react'
import {Box} from "@mui/material"
import SideNavBar from './appBar/SideNavBar'
import Board from './board/Board'
import AppBarHeader from './appBar/AppBar'
import { inject, observer } from 'mobx-react'

const WorkSpace = inject("usersTable", "boardsTable")(observer((props) => {
  return (
   <Box>
        <AppBarHeader/>
        <SideNavBar />
        <Board boardId={props.boardsTable.currentId}/>
    </Box>
  )
}))

export default WorkSpace;