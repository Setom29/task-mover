import { observer, inject } from "mobx-react";
import UserCircle from "../appBar/UserCircle";
import {
  Box,
  Avatar,
  Fade,
  Popper,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

Array.prototype.diff = function (a) {
  return this.filter(function (i) {
    return a.indexOf(i) < 0;
  });
};

const UsersWorking = inject(
  "usersTable",
  "boardsTable",
  "usersInBoardsTable"
)(
  observer((props) => {
    let usersToShow = props.usersTable.data.filter((u) =>
      props.usersInBoardsTable.isUserInBoard(u.id, props.boardsTable.currentId)
    );
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (e) => {
      setAnchorEl(anchorEl ? null : e.currentTarget);
    };
    const handleClickAway = (e) => {
      setAnchorEl(null);
    };

    const excludedUserIds = props.usersTable.userIds.diff(
      props.usersInBoardsTable.getUserIdsByBoardId(props.boardsTable.currentId)
    );

    const open = Boolean(anchorEl);
    return (
      <Box sx={{ display: "flex", gap: "5px" }}>
        {usersToShow.map((u, i) => (
          <UserCircle user={u} key={i} />
        ))}
        {excludedUserIds.length !== 0 ? (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box>
              <Avatar
                sx={[
                  { fontSize: "2rem", backgroundColor: "shades.light" },
                  (theme) => ({
                    "&:hover": {
                      backgroundColor: theme.palette.shades.main,
                    },
                    "&:active": {
                      backgroundColor: theme.palette.shades.dark,
                    },
                  }),
                ]}
                onClick={handleClick}
              >
                <AddIcon />
              </Avatar>
              <Popper
                open={open}
                anchorEl={anchorEl}
                transition
                placement="bottom-start"
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps}>
                    <Box paddingTop="20px">
                      <List
                        sx={{
                          border: 1,
                          p: 1,
                          bgcolor: "transparent.contrastText",
                        }}
                      >
                        {excludedUserIds.map((userId) => (
                          <ListItem
                            onClick={() => {
                              props.usersInBoardsTable.addUserInBoard(
                                userId,
                                props.boardsTable.currentId
                              );
                              handleClick();
                            }}
                            sx={[
                              { cursor: "pointer" },
                              (theme) => ({
                                "&:hover": {
                                  backgroundColor: theme.palette.shades.main,
                                },
                                "&:active": {
                                  backgroundColor: theme.palette.shades.dark,
                                },
                              }),
                            ]}
                          >
                            <ListItemText>
                              {props.usersTable.getItemById(userId).name}
                            </ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
          </ClickAwayListener>
        ) : null}
      </Box>
    );
  })
);

export default UsersWorking;
