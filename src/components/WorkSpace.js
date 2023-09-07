import React from 'react'
import {Box} from "@mui/material"
import SideNavBar from './sideBar/SideNavBar'
import Board from './board/Board'
import AppHeader from './appBar/AppHeader'
import { inject, observer } from 'mobx-react'

const WorkSpace = inject("usersTable", "boardsTable")(observer((props) => {
  return (
    <Box sx={{width: "100wh", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "start", background: " rgb(128,173,215)",
          background:
            "linear-gradient(135deg, rgba(128,173,215,1) 0%, rgba(10,189,160,1) 35%, rgba(212,220,169,1) 100%)",}}>
        <AppHeader/>
        <Box sx={{height: "100%", display: "grid", gridTemplateColumns: "1fr 9fr"}}>
          <SideNavBar />
          <Board boardId={props.boardsTable.currentId}/>
        </Box>
    </Box>
        )
}))

export default WorkSpace;
