import { observer, inject } from "mobx-react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Box,
  OutlinedInput,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const BoardsSelect = inject(
  "boardsTable",
  "usersTable",
  "usersInBoardsTable"
)(
  observer((props) => {
    const handleChange = function (e) {
      props.boardsTable.changeCurrentItemId(e.target.value);
    };

    const isCurrentUserInBoard = function (board) {
      return props.usersInBoardsTable.isUserInBoard(
        props.usersTable.currentId,
        board.id
      );
    };
    const availableBoards = props.usersInBoardsTable.getBoardIdsByUserId(
      props.usersTable.currentId
    );

    return (
      <Box>
        {availableBoards.length !== 0 ? (
          <FormControl fullWidth color="lights">
            <InputLabel id="board-select-label"  sx={{color:"lights.main"}}>Board</InputLabel>
            <Select
              labelStyle={{ color: "lights.contrastText" }}
              sx={{
                color: "lights.light",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "lights.main",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "lights.main",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "lights.light",
                },
                ".MuiSvgIcon-root ": {
                  fill: "white !important",
                },
              }}
              value={props.boardsTable.currentId ?? ""}
              onChange={handleChange}
              input={<OutlinedInput label="Board" />}
            >
              {availableBoards.map((boardId) => {
                const board = props.boardsTable.getItemById(boardId);
                return (
                  <MenuItem value={board.id} key={board.id}>
                    {board.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        ) : (
          <Typography variant="p" color="lights.light" textAlign="center">
            No boards available
          </Typography>
        )}
      </Box>
    );
  })
);

export default BoardsSelect;
