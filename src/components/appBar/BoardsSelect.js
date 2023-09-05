import { observer, inject } from 'mobx-react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const BoardsSelect = inject("boardsTable", "usersTable", "usersInBoardsTable")(observer((props) => {

    const handleChange = function(e){
        props.boardsTable.changeCurrentItemId(e.target.value);
     }

    const isCurrentUserInBoard = function(board){
        return props.usersInBoardsTable.isUserInBoard(props.usersTable.currentId, board.id);
    }

    return (
        <FormControl fullWidth>
        <InputLabel id="board-select-label">Board</InputLabel>
            <Select
            labelId="board-select-label"
            id="board-select"
            value={props.boardsTable.currentItem.id}
            label="Board"
            onChange={handleChange}
            >
            {props.boardsTable.data
                    .filter(b => isCurrentUserInBoard(b))
                    .map(b => <MenuItem value={b.id} key={b.id}>{b.name}</MenuItem>)}
            </Select>
        </FormControl>
    );
}))

export default BoardsSelect;

