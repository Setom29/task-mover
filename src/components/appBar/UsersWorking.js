import { observer, inject } from 'mobx-react'
import UserCircle from "./UserCircle";

const UsersWorking = inject("usersTable", "boardsTable", "usersInBoardsTable")(observer((props) => {
    let usersToShow = props.usersTable.data.filter(u => (
                props.usersInBoardsTable.isUserInBoard(u.id, props.boardsTable.currentId))
                && u.id !== props.usersTable.currentId
                )
                
    return (<>
        {usersToShow.length === 0 ?  
        <span>Working: {props.usersTable.currentItem.name}</span> :
        <>
            <span>Working: {props.usersTable.currentItem.name} and </span>
            {usersToShow.map((u, i) => <UserCircle user={u} key={i}/>)}
        </> } 
    </> )
}))

export default UsersWorking;