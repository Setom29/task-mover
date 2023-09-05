import React from 'react'
import { observer, inject } from 'mobx-react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/system';

const Users = inject("usersTable")(observer((props) => {
  // props.users.....
  const changeCurrentUser = function(e) {
      console.log(e.target.value)
    props.usersTable.changeCurrentItemId(Number(e.target.value))
  }
  let usersY = [...props.usersTable.data]
  return (
    
    <Card variant="outlined" sx={{ width: 400 }} >
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" >
          choose user
        </Typography>
        <Stack 
        spacing={2} 
        direction="column"
        justifyContent="center"
        alignItems="center">
            {usersY.map((user) => { 
            return <a href='/workspace'>
                    <Button onClick={changeCurrentUser} value={user.id} variant="outlined" size="small">
                        {JSON.stringify(user.name)}
                    </Button>
                </a>
            })}
        </Stack>
      </CardContent>
      <input type="number" id="currentUserIdInput" onChange={changeCurrentUser} value={props.usersTable.currentId}></input>

    </Card>
  )
})
)
export default Users;