import React from 'react'
import {Box} from "@mui/material"
import SideNavBar from './appBar/SideNavBar'
import Board from './board/Board'
import AppBarHeader from './appBar/AppBar'
import { inject, observer } from 'mobx-react'

const WorkSpace = inject("users")(observer((props) => {
  return (
   <Box>
        <div>WorkSpace</div>
        <AppBarHeader/>
        <SideNavBar />
        <Board />
    </Box>
  )
}))

export default WorkSpace;