import { observer, inject } from "mobx-react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Box,
} from "@mui/material";

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
          <FormControl fullWidth color="shades">
            <InputLabel id="board-select-label">Board</InputLabel>
            <Select
              labelId="board-select-label"
              id="board-select"
              value={props.boardsTable.currentId ?? ""}
              label="Board"
              onChange={handleChange}
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
          <Typography
            variant="p"
            color="transparent.contrastText"
            sx={{ textAlign: "center" }}
          >
            No boards available
          </Typography>
        )}
      </Box>
    );
  })
);

export default BoardsSelect;
