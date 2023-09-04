import { observer, inject } from 'mobx-react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const BoardsSelect = inject("boards", "users", "usersInBoards")(observer((props) => {

    const handleChange = function(e){
        props.boards.changeCurrentItemId(e.target.value);
     }

    const isCurrentUserInBoard = function(board){
        return props.usersInBoards.isUserInBoard(props.users.currentId, board.id);
    }

    return (
        <FormControl fullWidth>
        <InputLabel id="board-select-label">Board</InputLabel>
            <Select
            labelId="board-select-label"
            id="board-select"
            value={props.boards.currentItem.id}
            label="Board"
            onChange={handleChange}
            >
            {props.boards.data
                    .filter(b => isCurrentUserInBoard(b))
                    .map(b => <MenuItem value={b.id} key={b.id}>{b.name}</MenuItem>)}
            </Select>
        </FormControl>
         );
}))

export default BoardsSelect;

