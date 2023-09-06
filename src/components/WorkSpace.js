import React from 'react'
import {Box} from "@mui/material"
import SideNavBar from './sideBar/SideNavBar'
import Board from './board/Board'
import AppHeader from './appBar/AppHeader'
import { inject, observer } from 'mobx-react'

const WorkSpace = inject("usersTable", "boardsTable")(observer((props) => {
  return (
    <Box sx={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "start"}}>
        <Box sx={{position: "absolute", left: "0px", top: "300px", zIndex: "-1"}}>test</Box>
        <AppHeader/>
        <Box sx={{height: "100%", display: "grid", gridTemplateColumns: "1fr 9fr"}}>
          <SideNavBar />
          <Board boardId={props.boardsTable.currentId}/>
        </Box>
    </Box>
        )
}))

export default WorkSpace;