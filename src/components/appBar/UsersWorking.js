import { observer, inject } from "mobx-react";
import UserCircle from "./UserCircle";
import { Box } from "@mui/material";

const UsersWorking = inject(
  "usersTable",
  "boardsTable",
  "usersInBoardsTable"
)(
  observer((props) => {
    let usersToShow = props.usersTable.data.filter(
      (u) =>
        props.usersInBoardsTable.isUserInBoard(
          u.id,
          props.boardsTable.currentId
        ) && u.id !== props.usersTable.currentId
    );

    return (
      <Box sx={{ display: "flex", gap: "5px" }}>
        {usersToShow.map((u, i) => (
          <UserCircle user={u} key={i} />
        ))}
      </Box>
    );
  })
);

export default UsersWorking;
