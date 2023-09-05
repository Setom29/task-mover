import { observer, inject } from 'mobx-react'
import { Box, Tooltip } from "@mui/material";

const availableColors = ["red", "green", "blue", "orange", "indigo", "yellow", "violet"];

function UserCircle({user}) {
    const bgColor = availableColors[user.id % availableColors.length];
    return (
        <Tooltip title={user.name + " " + user.surname}>
            <Box component="span" bgcolor= {bgColor}
                    sx={{
                        mx: "0.5rem",
                        p: "0.5rem",
                        borderRadius: "50%", 
                        color: "white",
                        aspectRatio: "1 / 1",
                        }}>
            {user.name[0]}{user.surname[0]}
            </Box>
        </Tooltip>);
}

export default UserCircle;