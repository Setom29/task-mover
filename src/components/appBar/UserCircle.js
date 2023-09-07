import { observer, inject } from "mobx-react";
import { Box, Tooltip, Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

const availableColors = [
  "#5a7997",
  "#078470",
  "#7f8465",
  "#d4dca9",
  "#e5eacb",
  "#80add7",
  "#a6c6e3",
  "#0abda0",
  "#54d1bd",
  "#866e55",
];

function UserCircle({ user }) {
  const bgColor = availableColors[user.id % availableColors.length];
  return (
    <Tooltip title={user.name + " " + user.surname}>
      <Avatar sx={{ bgcolor: bgColor }}>
        {user.name[0]}
        {user.surname[0]}
      </Avatar>
    </Tooltip>
  );
}

export default UserCircle;
