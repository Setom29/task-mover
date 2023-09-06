import { observer, inject } from 'mobx-react'
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

const UsersSimple = inject("usersTable")(observer((props) => {
    let users = [...props.usersTable.data];

    return (
        <Stack 
        spacing={2} 
        direction="column"
        justifyContent="center"
        alignItems="center">
            <Box sx={{
            width: "100%",
            height: "60px",
            display: "flex",
            gap: "20px",
            padding: "10px",
            }}>
                <Typography variant="body1" sx={{color: "primary.contrastText", fontWeight: "900", py: "8px"}}>
                    USERS
                </Typography>
            </Box>
            {users.map((user) => 
                <Typography 
                    variant="string" 
                    sx={{fontWeight: user.id === props.usersTable.currentId ? 'bold' : 'normal'}}> 
                    {user.name} {user.surname}
                </Typography>)
            }
        </Stack>
     );
}))

export default UsersSimple;