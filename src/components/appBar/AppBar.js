import { observer, inject } from 'mobx-react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import BoardsSelect from './BoardsSelect';

const AppBarHeader = inject("users")(observer((props) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <BoardsSelect/>
          <Typography variant="h6" component="div" edge="end" sx={{ flexGrow: 1 }}>
            User: {props.users.currentItem.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}))

export default AppBarHeader;