import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/system";

const Users = inject(
  "usersTable",
  "usersInBoardsTable",
  "boardsTable"
)(
  observer((props) => {
    const changeCurrentUser = function (e) {
      console.log(e.target.value);
      props.usersTable.changeCurrentItemId(Number(e.target.value));
    };

    const setCurrentBoard = function (e) {
      const availableBoardIds = props.usersInBoardsTable.getBoardIdsByUserId(
        Number(e.target.value)
      );
      props.boardsTable.changeCurrentItemId(availableBoardIds[0]);
    };
    let users = [...props.usersTable.data];
    return (
      <Card variant="outlined" sx={{ width: 400 }}>
        <CardContent>
          <Stack
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              sx={{ textAlign: "center" }}
              variant="h5"
              component="div"
              color="shades.dark"
            >
              Log in
            </Typography>
            {users.map((user, index) => {
              return (
                <Link to="/workspace" key={index}>
                  <Button
                    onClick={(e) => {
                      changeCurrentUser(e);
                      setCurrentBoard(e);
                    }}
                    value={user.id}
                    variant="outlined"
                    size="small"
                  >
                    {user.name}
                  </Button>
                </Link>
              );
            })}
          </Stack>
        </CardContent>
      </Card>
    );
  })
);
export default Users;
