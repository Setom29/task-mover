import { observer, inject } from 'mobx-react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import BoardsSelect from './BoardsSelect';
import AddBoardComponent from './AddBoardComponent';
import imgLogo from '../../assets/logo-small.png' 
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const AppHeader = inject("usersTable")(observer((props) => {

  return (
    <AppBar position="static">
      <Toolbar sx={{display: "flex", py: "10px", flexDirection: "row", gap: "5px", justifyContent: "space-between"}}>
          <Box component="div" sx={{display: "grid", gridTemplateColumns: "1fr 4fr 3fr", gap: "5px", alignContent: "center"}}>
            <Box component="img"
                  src={imgLogo} 
                  alt="Logo" 
                  sx={{borderRadius: "10px", objectFit: "cover"}}
              />
            <BoardsSelect/>
            <AddBoardComponent/>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" component="div">
              {props.usersTable.currentItem.name} {props.usersTable.currentItem.surname} 
            </Typography>
            <Link to="/">
              <AccountCircle />
            </Link>
          </Box>
      </Toolbar>
    </AppBar>
  )
}))

export default AppHeader;