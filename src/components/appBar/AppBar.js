import { observer, inject } from 'mobx-react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import BoardsSelect from './BoardsSelect';
import AddBoardComponent from './AddBoardComponent';
import imgLogo from '../../assets/logo-small.png' 
import UsersWorking from './UsersWorking';

const AppBarHeader = inject("usersTable")(observer((props) => {

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{display: "flex", flexDirection: "row", gap: "5px", justifyContent: "space-between"}}>
            <Box component="div" sx={{display: "flex", flexDirection: "row", gap: "5px", flexGrow: 0.3, alignContent: "center"}}>
              <Box component="img"
                   src={imgLogo} 
                   alt="Logo" 
                   sx={{borderRadius: "10px", objectFit: "cover"}}
               />
              <BoardsSelect/>
              <AddBoardComponent/>
            </Box>
            <Typography variant="h6" component="div" >
               <UsersWorking />
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}))

export default AppBarHeader;