import { Backdrop, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import UsersSimple from './UsersSimple'
import { Link } from 'react-router-dom'

export default function SideNavBar() {
  return (
      <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={0} 
      bgcolor="primary.main"
      // we'll have opacity when we set our palette, defining colors via rgba(). 
      // Seems there's no way to make it with preset MUI colors       
      >
        <UsersSimple/>
        <Typography component="div" variant='h6'>
          <Link to="/" style={{"textDecoration": "none"}}>
            <Button variant="contained">Log out</Button>
          </Link>
        </Typography>
    </Stack>
  )
}
